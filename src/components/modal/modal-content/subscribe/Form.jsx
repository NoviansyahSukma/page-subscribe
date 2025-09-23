import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaChevronDown } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router";

export default function Form({ setIsOpen }) {
  const [fileKtpName, setFileKtpName] = useState("");
  const [fileSelfieName, setFileSelfieName] = useState("");
  const [UrlKtp, setUrlKtp] = useState("");
  const [UrlSelfie, setUrlSelfie] = useState("");

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const phoneRegex =
    /^(?:\\+62|62|0)(?:8[1-9][0-9]{7,10}|(?:21|22|24|31|61|72|74)[0-9]{6,8})$/;

  const registerForm = (e) => {
    e.preventDefault();
    // alert("Submit Form");
    alert(formik.values.foto_ktp);
    console.log(formik.values.foto_ktp);
    console.log("dari", UrlKtp);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      no_ktp: "",
      email: "",
      no_telp: "",
      tower: "",
      lantai: "",
      unit: "",
      foto_ktp: "",
      foto_selfie: "",
      captcha: "",
    },

    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("Nama wajib diisi")
        .min(3, "Minimal 3 karakter"),
      no_ktp: Yup.string()
        .required("No KTP wajib diisi")
        .min(16, "Minimal 16 digit"),
      email: Yup.string()
        .required("Email wajib diisi")
        .email("Email tidak valid"),
      no_telp: Yup.string()
        .required("No Telp wajib diisi")
        .matches(phoneRegex, "Format nomor telepon tidak valid"),
      tower: Yup.string().required("Tower wajib dipilih"),
      lantai: Yup.string().required("Lantai wajib diisi"),
      unit: Yup.string().required("Unit wajib diisi"),
      foto_ktp: Yup.mixed()
        .required("Wajib lampirkan Foto")
        .test("fileSize", "Foto harus dibawah 5 MB", (value) => {
          return value && value.size <= 5000000; // 2 MB
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
        .test("fileSize", "Foto harus dibawah 5 MB", (value) => {
          return value && value.size <= 5000000; // 2 MB
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
    captcha: Yup.string().required("Silahkan Verifikasi"),
    validateOnMount: true,
    onSubmit: registerForm,
  });

  const handleForm = (e) => {
    const { target } = e;
    formik.setFieldValue(target.name, target.value);
    formik.setFieldValue(target.no_ktp, target.value);
    formik.setFieldValue(target.email, target.value);
    formik.setFieldValue(target.no_telp, target.value);
    formik.setFieldValue(target.tower, target.value);
    formik.setFieldValue(target.lantai, target.value);
    formik.setFieldValue(target.unit, target.value);
  };

  return (
    <>
      <div className="w-full max-w-9/10 m-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full space-y-12">
            <div className="border-b border-slate-400 pb-12 pt-4">
              <h2 className="text-xl font-semibold text-slate-500 text-center">
                KONTRAK BERLANGGANAN TRANSPARK BINTARO
              </h2>
              <p className="mt-2 text-md/6 text-slate-500 text-center">
                Informasi berlangganan anda :
              </p>

              <div className="w-full bg-slate-500 text-slate-100 rounded-xs pl-2 py-1 mt-7 shadow-sm">
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
                      onChange={handleForm}
                      onBlur={formik.handleBlur}
                      className={`block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-slate-500 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-slate-300 sm:text-sm/6 ${
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
                    htmlFor="no_ktp"
                    className="block text-sm/6 font-medium text-slate-500"
                  >
                    No. Identitas / KTP
                  </label>
                  <div className="mt-2">
                    <input
                      id="no_ktp"
                      name="no_ktp"
                      type="number"
                      onChange={handleForm}
                      onBlur={formik.handleBlur}
                      className={`block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-slate-500 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-slate-300 sm:text-sm/6 ${
                        formik.touched.no_ktp && formik.errors.no_ktp
                          ? "outline-red-500"
                          : "focus:outline-sky-300 outline-slate-300"
                      }`}
                    />
                    {formik.touched.no_ktp && formik.errors.no_ktp && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.no_ktp}
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
                      onChange={handleForm}
                      onBlur={formik.handleBlur}
                      className={`block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-slate-500 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-slate-300 sm:text-sm/6 ${
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
                      type="number"
                      onChange={handleForm}
                      onBlur={formik.handleBlur}
                      className={`block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-slate-500 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-slate-300 sm:text-sm/6 ${
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
                      onChange={handleForm}
                      onBlur={formik.handleBlur}
                      className={`block w-full appearance-none rounded-md bg-slate-100 px-3 py-1.5 text-base text-slate-500 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-slate-300 sm:text-sm/6 ${
                        formik.touched.tower && formik.errors.tower
                          ? "outline-red-500"
                          : "focus:outline-sky-300 outline-slate-300"
                      }`}
                    >
                      <option value="" disabled>
                        Pilih Tower
                      </option>
                      <option value="chicago">Chicago</option>
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
                      onChange={handleForm}
                      onBlur={formik.handleBlur}
                      className={`block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-slate-500 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-slate-300 sm:text-sm/6 ${
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
                      onChange={handleForm}
                      onBlur={formik.handleBlur}
                      className={`block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-slate-500 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-slate-300 sm:text-sm/6 ${
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
                        className={`flex flex-col items-center px-6 py-4 bg-slate-100 text-blue-600 rounded-lg border-2 border-blue-500 border-dashed cursor-pointer hover:bg-blue-100 transition ${
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
                          onChange={(e) => {
                            const file = e.target.files[0];

                            if (file) {
                              setFileKtpName(file.name);

                              // Jika gambar, buat preview
                              if (file.type.startsWith("image/")) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  setUrlKtp(reader.result);
                                };
                                reader.readAsDataURL(file);
                                formik.setFieldValue("foto_ktp", file);
                              } else {
                                setUrlKtp("");
                              }
                            }
                          }}
                        />
                      </div>
                      {formik.touched.foto_ktp && formik.errors.foto_ktp && (
                        <div className="text-red-500 text-sm mt-2">
                          {formik.errors.foto_ktp}
                        </div>
                      )}
                    </div>
                  </label>

                  {fileKtpName && (
                    <p className="mt-4 text-sm text-gray-700 font-medium text-center">
                      File dipilih:{" "}
                      <span className="text-blue-600">{fileKtpName}</span>
                    </p>
                  )}

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
                        className={`flex flex-col items-center px-6 py-4 bg-slate-100 text-blue-600 rounded-lg border-2 border-blue-500 border-dashed cursor-pointer hover:bg-blue-100 transition ${
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
                          onChange={(e) => {
                            const file = e.target.files[0];

                            if (file) {
                              setFileSelfieName(file.name);

                              // Jika gambar, buat preview
                              if (file.type.startsWith("image/")) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  setUrlSelfie(reader.result);
                                };
                                reader.readAsDataURL(file);
                                formik.setFieldValue("foto_selfie", file);
                              } else {
                                setUrlSelfie("");
                              }
                            }
                          }}
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

                  {fileSelfieName && (
                    <p className="mt-4 text-sm text-gray-700 font-medium text-center">
                      File dipilih:{" "}
                      <span className="text-blue-600">{fileSelfieName}</span>
                    </p>
                  )}

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

          <div className="w-full mt-5">
            <h3 className="text-slate-800 font-semibold">Info Penting</h3>
            <ol className="list-decimal px-4 mt-2 text-slate-800">
              <li>
                Harga sebagaimana disebutkan{" "}
                <span className="font-semibold">diatas sebelum PPN 11%</span>{" "}
                dan belum termasuk biaya materai.
              </li>
              <li>
                Silahkan melakukan pembayaran di Payment Channel Transvision.
              </li>
              <li>
                Pembayaran dilakukan dengan memasukkan Kode Pembayaran ID
                Pelanggan &#40;
                <span className="font-semibold">contoh:127899887766</span>&#41;.
              </li>
              <li>
                Perangkat ONT, STB/Dekoder dan kelengkapannya merupakan milik
                DIJ/Transvision selama berlangganan layanan DIJ/Transvision, dan
                wajib dikembalikan apabila periode berlangganan berakhir. Selama
                dipinjam-pakaikan perangkat ONT, STB/Dekoder dan kelengkapannya
                merupakan tanggungjawab Pelanggan sehingga kerusakan ataupun
                kehilangan dikarenakan kelalaian Pelanggan akan dikenakan biaya
                sesuai tarif yang berlaku.
              </li>
              <li>
                Bila ada pertanyaan, silahkan menghubungi contact center kami di
                02150999333 atau email:{" "}
                <span className="text-blue-700 font-semibold">
                  helpdesk@detikinijuga.net.id
                </span>{" "}
                atau nomor Whatsapp di{" "}
                <Link
                  to="https://wa.me/6282299000147"
                  target="blank"
                  className="text-green-700 font-semibold hover:text-green-500"
                >
                  0822-9900-0147
                </Link>
              </li>
              <li>
                Dengan submit formulir ini, pelanggan telah menyetujui untuk
                berlangganan layanan DIJ/Transvision dan mengikuti syarat dan
                ketentuan berlangganan layanan DIJ/Transvision.
              </li>
            </ol>

            <div className="mt-4">
              <label htmlFor="terms">
                <div className="mt-2 flex items-baseline">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="outline-1 outline-red-400 hover:outline-red-500 rounded-md focus:outline-blue-500"
                  />
                  <span className="text-md ml-2 font-semibold text-slate-800">
                    Saya telah membaca dan menyetujui Syarat & Ketentuan yang
                    berlaku
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div className="w-xs m-auto mt-4 py-3 rounded-sm border-1 border-slate-200 flex items-center">
            <ReCAPTCHA
              sitekey={siteKey}
              onChange={""}
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
              // disabled={!formik.isValid}
              className="cursor-pointer rounded-md bg-blue-500 hover:bg-blue-400 px-3 py-2 text-sm font-semibold text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
