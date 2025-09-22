import { FaTools } from "react-icons/fa";
// import TnC from "../button/TnC";
import { useState } from "react";
import Modal from "../modal/Modal";
import Bundling from "../modal/modal-content/term-n-condt/Bundling";
import InetOnly from "../modal/modal-content/term-n-condt/InetOnly";
import BundlingJuanda from "../modal/modal-content/term-n-condt/BundlingJuanda";
import IplJuanda from "../modal/modal-content/term-n-condt/IplJuanda";

export default function PackageCard({
  bandWidth,
  namaPaket,
  channel,
  inetBw,
  price,
  dvb,
  bundling,
  tncBundling,
  tncJuanda,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="min-w-68 sm:min-w-68 m-auto pb-6 shadow-sm shadow-gray-500 rounded-sm overflow-hidden transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:bg-slate-100 hover:shadow-md">
        {bundling ? (
          <>
            {/* headers card package */}
            <div className="p-3 flex bg-gray-300">
              <div className="bg-purple-900 inline-block rounded-sm py-1 px-2">
                <p className="text-4xl text-center font-semibold text-slate-100">
                  {bandWidth}
                </p>
                <p className="text-lg text-center font-semibold text-slate-100">
                  Mbps
                </p>
              </div>
              <p className="inline text-3xl text-blue-800 font-semibold ml-2">
                {namaPaket}
              </p>
            </div>

            {/* main card package */}
            {dvb ? (
              <>
                <div className="max-w-58 bg-slate-100 m-auto mt-2 p-4 rounded-sm">
                  <p className="text-xl text-slate-700 font-semibold">{`Bundling TV ${dvb}`}</p>
                  <p className="text-slate-700">{`- ${channel} Channel`}</p>
                  <p className="text-slate-700">{`- Internet ${inetBw} Mbps`}</p>
                  <p className="text-md text-orange-800 font-semibold mt-2">
                    *Biaya berlangganan sudah termasuk dalam IPL bulanan
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="max-w-54 bg-slate-100 m-auto mt-4 p-4 rounded-sm">
                  <p className="text-xl text-slate-700 font-semibold">
                    Bundling TV
                  </p>
                  <p className="text-slate-700">{`- ${channel} Channel`}</p>
                  <p className="text-slate-700">{`- Internet ${inetBw} Mbps`}</p>

                  <p className="text-lg text-slate-700 font-semibold mt-3">
                    {`Rp ${price}/bulan`}
                  </p>
                  <p className="flex items-center text-md text-orange-800 font-semibold mt-2">
                    <FaTools />
                    <span className="ml-2">Free Biaya Instalasi</span>
                  </p>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            {/* headers card package */}
            <div className="p-3 flex bg-gray-300">
              <div className="bg-blue-800 inline-block rounded-sm py-1 px-2">
                <p className="text-4xl text-center font-semibold text-slate-100">
                  {bandWidth}
                </p>
                <p className="text-lg text-center font-semibold text-slate-100">
                  Mbps
                </p>
              </div>
              <p className="inline text-3xl text-blue-800 font-semibold ml-2">
                {namaPaket}
              </p>
            </div>

            {/* main card package */}
            <div className="max-w-54 bg-slate-100 m-auto mt-4 p-4 rounded-sm">
              <p className="text-xl text-slate-700 font-semibold">
                Bundling TV
              </p>
              <p className="text-lg text-slate-700 font-semibold mt-3">
                {`Rp ${price}/bulan`}
              </p>
              <p className="flex items-center text-md text-orange-800 font-semibold mt-2">
                <FaTools />
                <span className="ml-2">Free Biaya Instalasi</span>
              </p>
            </div>
          </>
        )}

        {/* button card package */}
        <div className="w-full m-auto mt-5">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-red-500 m-auto block text-slate-100 py-1 px-3 rounded-lg hover:bg-red-600 hover:shadow-md"
          >
            Syarat & Ketentuan
          </button>
          {tncJuanda ? (
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
              {/* <IplJuanda /> */}
              {dvb ? (
                <IplJuanda setIsOpen={setIsOpen} />
              ) : (
                <BundlingJuanda setIsOpen={setIsOpen} />
              )}
            </Modal>
          ) : (
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
              {tncBundling ? (
                <Bundling setIsOpen={setIsOpen} />
              ) : (
                <InetOnly setIsOpen={setIsOpen} />
              )}
            </Modal>
          )}

          {/* button card subscribe */}
          <button className="bg-sky-500 m-auto mt-4 block text-slate-50 py-1 px-2 rounded-lg hover:bg-blue-600 hover:shadow-md">
            Berlangganan
          </button>
        </div>
      </div>
    </>
  );
}
