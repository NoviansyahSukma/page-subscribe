import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaChevronDown } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import Accordion from "./Accordion";
import SpanTerms from "../../../button/SpanTerms";
import {
  alertConfirm,
  alertSuccess,
  alertError,
  alertLoading,
} from "../../../../lib/alert";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export default function Form({
  setIsOpen,
  textHeadForm,
  paket,
  towerOpt,
  bundlingJuanda,
  bundling,
  bundlingIpl,
}) {
  const [UrlKtp, setUrlKtp] = useState(null);
  const [UrlSelfie, setUrlSelfie] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const reCaptchaRef = useRef(null);

  const navigate = useNavigate();

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const phoneRegex =
    /^(?:\\+62|62|0)(?:8[1-9][0-9]{7,10}|(?:21|22|24|31|61|72|74)[0-9]{6,8})$/;

  const formik = useFormik({
    initialValues: {
      paket: paket,
      name: "",
      nik: "",
      email: "",
      no_telp: "",
      status: "",
      tower: "",
      lantai: "",
      unit: "",
      foto_ktp: "",
      foto_selfie: "",
    },

    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("Nama wajib diisi")
        .min(3, "Minimal 3 karakter"),
      nik: Yup.string()
        .required("NIK wajib diisi")
        .min(16, "Minimal 16 digit")
        .matches(/^\d+$/, "NIK tidak sesuai"),
      email: Yup.string()
        .required("Email wajib diisi")
        .email("Email tidak valid"),
      no_telp: Yup.string()
        .required("No Telp wajib diisi")
        .matches(phoneRegex, "Format nomor telepon tidak valid"),
      status: Yup.string().required("Status wajib dipilih"),
      tower: Yup.string().required("Tower wajib dipilih"),
      lantai: Yup.string().required("Lantai wajib diisi"),
      unit: Yup.string().required("Unit wajib diisi"),
      foto_ktp: Yup.mixed()
        .required("Wajib lampirkan Foto")
        .test("fileSize", "Foto harus dibawah 2 MB", (value) => {
          return value && value.size <= 2000000; // 2 MB
        })
        .test("fileType", "File harus berupa Foto", (value) => {
          return (
            value &&
            [
              "image/jpeg",
              "image/jpg",
              "image/JPG",
              "image/png",
              "image/PNG",
            ].includes(value.type)
          );
        }),
      foto_selfie: Yup.mixed()
        .required("Wajib lampirkan Foto")
        .test("fileSize", "Foto harus dibawah 2 MB", (value) => {
          return value && value.size <= 2000000; // 2 MB
        })
        .test("fileType", "File harus berupa Foto", (value) => {
          return (
            value &&
            [
              "image/jpeg",
              "image/jpg",
              "image/JPG",
              "image/png",
              "image/PNG",
            ].includes(value.type)
          );
        }),
    }),
    onSubmit: async (values, { resetForm }) => {
      const confirmed = await alertConfirm(
        `Anda Berlangganan ${paket} ${textHeadForm}`
      );

      if (!confirmed) {
        console.log("Dibatalkan oleh user");
        return;
      }

      // Cek captcha
      if (!captchaValue) {
        await alertError("Silakan selesaikan reCAPTCHA terlebih dahulu.");
        return;
      }

      setIsLoading(true);
      alertLoading("Mohon Tunggu Sebentar.");

      setTimeout(async () => {
        await alertSuccess(
          "Terima Kasih Sudah Mendaftar. Silahkan Cek Email Anda."
        );
        setUrlKtp(null);
        setUrlSelfie(null);
        setCaptchaValue(null);
        setIsVerified(false);
        setIsChecked(false);
        setIsLoading(false);
        resetForm();
        Swal.close();
        navigate("/");
      }, 3000);
    },
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      formik.setFieldValue(name, file);

      const reader = new FileReader();
      reader.onloadend = () => {
        if (name === "foto_ktp") setUrlKtp(reader.result);
        if (name === "foto_selfie") setUrlSelfie(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      formik.setFieldValue(name, value);
    }
  };

  const handleExpired = () => {
    setIsVerified(false);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setIsVerified(true);
  };

  return (
    <>
      <div className="w-full max-w-9/10 m-auto py-4">
        <div className="w-full">
          <h2 className="text-xl font-semibold text-slate-500 text-center">
            KONTRAK BERLANGGANAN TRANSPARK {textHeadForm}
          </h2>
          <p className="mt-2 text-lg text-slate-500 text-center">
            Informasi berlangganan anda :
          </p>
          <p className="mt-2 text-md text-slate-500 font-semibold text-center md:text-left">
            Paket {paket}
          </p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full space-y-12">
            <div className="border-b border-slate-400 pb-12">
              <div className="w-full bg-slate-500 text-slate-100 rounded-xs pl-2 py-1 mt-1.5 shadow-sm">
                DATA PELANGGAN
              </div>
              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6 px-1">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm/6 font-medium text-slate-500"
                  >
                    Nama Pelanggan
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formik.values.name}
                      onChange={handleInputChange}
                      onBlur={formik.handleBlur}
                      className={`block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-slate-500 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-slate-300 sm:text-sm/6 hover:outline-sky-400 hover:shadow-md ${
                        formik.touched.name && formik.errors.name
                          ? "outline-red-500"
                          : "focus:outline-sky-300 outline-slate-300"
                      }`}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.name}
                      </div>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="nik"
                    className="block text-sm/6 font-medium text-slate-500"
                  >
                    NIK
                  </label>
                  <div className="mt-2">
                    <input
                      id="nik"
                      name="nik"
                      type="text"
                      inputMode="numeric"
                      value={formik.values.nik}
                      onChange={handleInputChange}
                      onBlur={formik.handleBlur}
                      className={`block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-slate-500 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-slate-300 sm:text-sm/6 hover:outline-sky-400 hover:shadow-md ${
                        formik.touched.nik && formik.errors.nik
                          ? "outline-red-500"
                          : "focus:outline-sky-300 outline-slate-300"
                      }`}
                    />
                    {formik.touched.nik && formik.errors.nik && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.nik}
                      </div>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-slate-500"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={handleInputChange}
                      onBlur={formik.handleBlur}
                      className={`block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-slate-500 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-slate-300 sm:text-sm/6 hover:outline-sky-400 hover:shadow-md ${
                        formik.touched.email && formik.errors.email
                          ? "outline-red-500"
                          : "focus:outline-sky-300 outline-slate-300"
                      }`}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="no_telp"
                    className="block text-sm/6 font-medium text-slate-500"
                  >
                    No. Telp / Hp
                  </label>
                  <div className="mt-2">
                    <input
                      id="no_telp"
                      name="no_telp"
                      type="text"
                      inputMode="numeric"
                      value={formik.values.no_telp}
                      onChange={handleInputChange}
                      onBlur={formik.handleBlur}
                      className={`block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-slate-500 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-slate-300 sm:text-sm/6 hover:outline-sky-400 hover:shadow-md ${
                        formik.touched.no_telp && formik.errors.no_telp
                          ? "outline-red-500"
                          : "focus:outline-sky-300 outline-slate-300"
                      }`}
                    />
                    {formik.touched.no_telp && formik.errors.no_telp && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.no_telp}
                      </div>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="status"
                    className="block text-sm/6 font-medium text-slate-500"
                  >
                    Status Kepemilikan
                  </label>
                  <div className="mt-2 relative">
                    <select
                      id="status"
                      name="status"
                      value={formik.values.status}
                      onChange={handleInputChange}
                      onBlur={formik.handleBlur}
                      className={`block w-full appearance-none rounded-md bg-slate-100 px-3 py-1.5 text-base text-slate-500 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-slate-300 sm:text-sm/6 hover:outline-sky-400 hover:shadow-md ${
                        formik.touched.status && formik.errors.status
                          ? "outline-red-500"
                          : "focus:outline-sky-300 outline-slate-300"
                      }`}
                    >
                      <option value="" disabled>
                        Pilih Status
                      </option>
                      <option value="pemilik">Pemilik</option>
                      <option value="penyewa">Penyewa</option>
                    </select>
                    <FaChevronDown
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3 -translate-y-6 text-slate-500 text-sm"
                    />
                    {formik.touched.status && formik.errors.status && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.status}
                      </div>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="tower"
                    className="block text-sm/6 font-medium text-slate-500"
                  >
                    Tower
                  </label>
                  <div className="mt-2 relative">
                    <select
                      id="tower"
                      name="tower"
                      value={formik.values.tower}
                      onChange={handleInputChange}
                      onBlur={formik.handleBlur}
                      className={`block w-full appearance-none rounded-md bg-slate-100 px-3 py-1.5 text-base text-slate-500 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-slate-300 sm:text-sm/6 hover:outline-sky-400 hover:shadow-md ${
                        formik.touched.tower && formik.errors.tower
                          ? "outline-red-500"
                          : "focus:outline-sky-300 outline-slate-300"
                      }`}
                    >
                      <option value="" disabled>
                        Pilih Tower
                      </option>
                      {towerOpt.map((t) => (
                        <option key={t.id} value={t.nameTower}>
                          {t.nameTower}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3 -translate-y-6 text-slate-500 text-sm"
                    />
                    {formik.touched.tower && formik.errors.tower && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.tower}
                      </div>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="lantai"
                    className="block text-sm/6 font-medium text-slate-500"
                  >
                    Lantai
                  </label>
                  <div className="mt-2">
                    <input
                      id="lantai"
                      name="lantai"
                      type="text"
                      value={formik.values.lantai}
                      onChange={handleInputChange}
                      onBlur={formik.handleBlur}
                      className={`block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-slate-500 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-slate-300 sm:text-sm/6 hover:outline-sky-400 hover:shadow-md ${
                        formik.touched.lantai && formik.errors.lantai
                          ? "outline-red-500"
                          : "focus:outline-sky-300 outline-slate-300"
                      }`}
                    />
                    {formik.touched.lantai && formik.errors.lantai && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.lantai}
                      </div>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="unit"
                    className="block text-sm/6 font-medium text-slate-500"
                  >
                    Unit
                  </label>
                  <div className="mt-2">
                    <input
                      id="unit"
                      name="unit"
                      type="text"
                      value={formik.values.unit}
                      onChange={handleInputChange}
                      onBlur={formik.handleBlur}
                      className={`block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-slate-500 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-slate-300 sm:text-sm/6 hover:outline-sky-400 hover:shadow-md ${
                        formik.touched.unit && formik.errors.unit
                          ? "outline-red-500"
                          : "focus:outline-sky-300 outline-slate-300"
                      }`}
                    />
                    {formik.touched.unit && formik.errors.unit && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.unit}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6 px-1">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="foto_ktp"
                    className="block text-sm/6 font-medium text-slate-500"
                  >
                    Foto Identitas / KTP
                    <div className="mt-2 flex flex-col items-center w-full max-w-md mx-auto">
                      <div
                        className={`flex flex-col items-center px-6 py-4 bg-slate-100 text-blue-600 rounded-lg border-2 border-blue-500 border-dashed cursor-pointer hover:bg-blue-100 transition hover:shadow-md ${
                          formik.touched.foto_ktp && formik.errors.foto_ktp
                            ? "border-red-500"
                            : "border-blue-500"
                        }`}
                      >
                        <svg
                          className="w-8 h-8 mb-2 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.88 9.94A6.5 6.5 0 0010 3.5a6.5 6.5 0 00-6.88 6.44 4.5 4.5 0 00-.12 9h14a4.5 4.5 0 00-.12-9z" />
                        </svg>
                        <span className="text-sm font-medium">
                          Klik untuk pilih file
                        </span>
                        <span className="text-xs text-gray-500">
                          (JPG, PNG)
                        </span>
                        <input
                          id="foto_ktp"
                          name="foto_ktp"
                          type="file"
                          onBlur={formik.handleBlur}
                          className="hidden"
                          onChange={handleInputChange}
                        />
                      </div>
                      {formik.touched.foto_ktp && formik.errors.foto_ktp && (
                        <div className="text-red-500 text-sm mt-2">
                          {formik.errors.foto_ktp}
                        </div>
                      )}
                    </div>
                  </label>

                  {UrlKtp && (
                    <img
                      src={UrlKtp}
                      alt="Preview"
                      className="mt-4 max-w-3/4 h-48 p-2 object-contain rounded shadow-sm shadow-slate-400 m-auto"
                    />
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="foto_selfie"
                    className="block text-sm/6 font-medium text-slate-500"
                  >
                    Foto Selfie
                    <div className="mt-2 flex flex-col items-center w-full max-w-md mx-auto">
                      <div
                        className={`flex flex-col items-center px-6 py-4 bg-slate-100 text-blue-600 rounded-lg border-2 border-blue-500 border-dashed cursor-pointer hover:bg-blue-100 transition hover:shadow-md ${
                          formik.touched.foto_selfie &&
                          formik.errors.foto_selfie
                            ? "border-red-500"
                            : "border-blue-500"
                        }`}
                      >
                        <svg
                          className="w-8 h-8 mb-2 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.88 9.94A6.5 6.5 0 0010 3.5a6.5 6.5 0 00-6.88 6.44 4.5 4.5 0 00-.12 9h14a4.5 4.5 0 00-.12-9z" />
                        </svg>
                        <span className="text-sm font-medium">
                          Klik untuk pilih file
                        </span>
                        <span className="text-xs text-gray-500">
                          (JPG, PNG)
                        </span>
                        <input
                          id="foto_selfie"
                          name="foto_selfie"
                          type="file"
                          className="hidden"
                          onChange={handleInputChange}
                        />
                      </div>
                      {formik.touched.foto_selfie &&
                        formik.errors.foto_selfie && (
                          <div className="text-red-500 text-sm mt-2">
                            {formik.errors.foto_selfie}
                          </div>
                        )}
                    </div>
                  </label>

                  {UrlSelfie && (
                    <img
                      src={UrlSelfie}
                      alt="Preview"
                      className="mt-4 max-w-3/4 h-48 p-2 object-contain rounded shadow-sm shadow-slate-400 m-auto"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-5 border-1 border-slate-500 rounded-lg p-3 pb-4">
            <h3 className="text-slate-800 font-semibold">Info Penting</h3>
            <div>
              {bundlingJuanda ? (
                <>
                  <Accordion
                    text={"Paket Berlangganan Bundling Tv"}
                    infoBundling={true}
                  />
                </>
              ) : (
                <>
                  <Accordion
                    text={"Paket Berlangganan Bundling Tv"}
                    infoBundling={true}
                  />
                  <Accordion text={"Paket Berlangganan Internet Only"} />
                </>
              )}
            </div>
          </div>

          <div className="mt-4 pl-2">
            <label className="flex items-baseline gap-3">
              <div>
                <input
                  type="checkbox"
                  required
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="outline-2 outline-blue-500 invalid:outline-red-500 w-4 h-4 p-2"
                />
              </div>
              <span className="text-slate-800">
                Saya menyetujui{" "}
                {bundlingJuanda ? (
                  <span>
                    {bundlingIpl ? (
                      <SpanTerms bundlingJuanda bundlingIpl />
                    ) : (
                      <SpanTerms bundlingJuanda />
                    )}
                  </span>
                ) : (
                  <span>
                    {bundling ? <SpanTerms bundling /> : <SpanTerms />}
                  </span>
                )}{" "}
                yang berlaku
              </span>
            </label>
          </div>

          <div className="w-xs m-auto mt-4 py-3 rounded-sm border-1 border-slate-200 flex items-center">
            <ReCAPTCHA
              sitekey={siteKey}
              name="captcha"
              onChange={handleCaptchaChange}
              onExpired={handleExpired}
              ref={reCaptchaRef}
              required
              className="inline-block m-auto"
            />
          </div>

          <div className="mt-7 flex items-center justify-end gap-x-4">
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="cursor-pointer rounded-md bg-red-500 hover:bg-red-400 px-3 py-2 text-sm font-semibold text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`rounded-md px-3 py-2 text-sm font-semibold text-white ${
                isVerified
                  ? "bg-blue-500 hover:bg-blue-400 cursor-pointer"
                  : "bg-slate-300"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Mengirim..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
