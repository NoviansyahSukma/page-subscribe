import { Link } from "react-router";
import logoBintaro from "../../../assets/image/logo-bintaro.png";
import PackageCard from "../../card/PackageCard";
import { FaSignal } from "react-icons/fa";
import { PiTelevision } from "react-icons/pi";
import { MdArrowBack } from "react-icons/md";

export default function BintaroPackage() {
  return (
    <>
      <div className="w-full 2xl:w-8/10 m-auto py-3 pb-7 relative">
        <Link to="/">
          <MdArrowBack className="bg-slate-500 right-5 hover:bg-slate-400 absolute p-1 text-3xl ml-5 text-slate-100 rounded-full" />
        </Link>
        <div className="max-w-9/10 flex items-center justify-between m-auto mt-4">
          <img src={logoBintaro} alt="" className="w-[140px]" />
          <h1 className="text-4xl font-semibold text-slate-600">PAKET</h1>
        </div>

        <div className="w-full px-4 mt-4 m-auto">
          <div className="flex items-center-safe">
            <p className="text-2xl tracking-wide font-semibold ml-5 text-slate-600">
              INTERNET & TV
            </p>
            <p className="ml-2 text-center text-2xl text-orange-400">
              <FaSignal />
            </p>
            <p className="ml-1 text-center text-3xl text-orange-400">
              <PiTelevision />
            </p>
          </div>

          <div className="w-full m-auto mt-4 px-1 py-6 rounded-sm border-1 border-purple-900 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PackageCard
              bundling={true}
              tncBundling={true}
              bandWidth={"20"}
              namaPaket={"LITE"}
              channel={"50"}
              inetBw={"20"}
              price={"385.000"}
            />
            <PackageCard
              bundling={true}
              tncBundling={true}
              bandWidth={"30"}
              namaPaket={"DULUXE"}
              channel={"65"}
              inetBw={"30"}
              price={"505.000"}
            />
            <PackageCard
              bundling={true}
              tncBundling={true}
              bandWidth={"50"}
              namaPaket={"MAX"}
              channel={"80"}
              inetBw={"50"}
              price={"715.000"}
            />
          </div>
        </div>

        <div className="w-full px-4 mt-10 m-auto">
          <div className="flex items-center-safe">
            <p className="text-2xl tracking-wide font-semibold ml-5 text-slate-600">
              INTERNET
            </p>
            <p className="ml-2 text-center text-2xl text-orange-400">
              <FaSignal />
            </p>
          </div>

          <div className="w-full m-auto mt-4 px-1 py-6 rounded-sm border-1 border-blue-900 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PackageCard
              bandWidth={"20"}
              namaPaket={"LITE"}
              price={"298.000"}
            />
            <PackageCard
              bandWidth={"30"}
              namaPaket={"DULUXE"}
              price={"398.000"}
            />
            <PackageCard bandWidth={"50"} namaPaket={"MAX"} price={"598.000"} />
          </div>
        </div>
      </div>
    </>
  );
}
