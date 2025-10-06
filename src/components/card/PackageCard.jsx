import { useEffect, useState } from "react";
import { FaTools } from "react-icons/fa";

export default function PackageCard({
  children,
  bandwith,
  namaPaket,
  channel,
  harga,
  bundling,
  textContentCard,
  textIpl,
}) {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCard(true);
    }, 100);
  }, []);

  return (
    <>
      <div
        className={`transition-all duration-1000 transform ease-in-out ${
          showCard
            ? "opacity-100 translate-y-0 delay-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="w-3xs lg:w-60 xl:w-58 2xl:w-72 m-auto pb-6 shadow-sm shadow-gray-500 rounded-sm overflow-hidden transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:bg-slate-100 hover:shadow-md">
          {/* Header */}
          <div className="p-3 flex bg-gray-300">
            <div
              className={`inline-block rounded-sm py-1 px-2 ${
                bundling ? "bg-purple-900" : "bg-blue-900"
              }`}
            >
              <p className="text-4xl text-center font-semibold text-slate-100">
                {bandwith}
              </p>
              <p className="text-lg text-center font-semibold text-slate-100">
                Mbps
              </p>
            </div>
            <p className="inline text-3xl text-blue-800 font-semibold ml-2">
              {namaPaket}
            </p>
          </div>

          {/* main content */}
          <div className="w-4/5 xl:w-5/6 bg-slate-100 m-auto mt-4 px-4 py-2 rounded-sm">
            <p className="text-xl text-slate-700 font-semibold">
              {textContentCard}
            </p>
            {bundling ? (
              <>
                <p className="text-slate-700">{`- ${channel} Channel`}</p>
                <p className="text-slate-700">{`- Internet ${bandwith} Mbps`}</p>
              </>
            ) : (
              <></>
            )}
            <p className="text-lg text-slate-700 font-semibold mt-3">
              {textIpl ? <></> : <>{`Rp ${harga}/bulan`}</>}
            </p>
            <p className="flex items-center text-md text-orange-800 font-semibold mt-2">
              {textIpl ? (
                <>
                  <span className="py-1">{textIpl}</span>
                </>
              ) : (
                <>
                  <FaTools />
                  <span className="ml-2">Free Biaya Instalasi</span>
                </>
              )}
            </p>
          </div>

          {/* footer */}
          <div className="w-full m-auto mt-5">{children}</div>
        </div>
      </div>
    </>
  );
}
