import { Link } from "react-router";
import logoCibubur from "../../../assets/image/logo-cibubur.png";
import PackageCard from "../../card/PackageCard";
import { MdArrowBack } from "react-icons/md";

export default function CibuburPackage() {
  return (
    <>
      <div className="w-full 2xl:w-8/10 m-auto py-3 pb-7 relative">
        <Link to="/">
          <MdArrowBack className="bg-slate-500 right-5 hover:bg-slate-400 absolute p-1 text-3xl ml-5 text-slate-100 rounded-full" />
        </Link>
        <div className="max-w-9/10 flex items-center justify-between m-auto mt-4">
          <img src={logoCibubur} alt="" className="w-[140px]" />
          <h1 className="text-4xl ml-3 font-semibold text-slate-600">PAKET</h1>
        </div>

        <div className="w-full px-4 mt-4 m-auto">
          <h3 className="text-2xl tracking-wide font-semibold ml-7 text-slate-600">
            INTERNET & TV
          </h3>

          <div className="w-full m-auto mt-2 px-1 py-4 rounded-sm shadow-md shadow-purple-900 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PackageCard
              bundling={true}
              tncBundling={true}
              bandWidth={"15"}
              namaPaket={"BASIC"}
              channel={"35"}
              inetBw={"15"}
              price={"250.000"}
            />
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

        <div className="w-full px-4 mt-7 m-auto">
          <h3 className="text-2xl tracking-wide font-semibold ml-7 text-slate-600">
            INTERNET ONLY
          </h3>

          <div className="w-full m-auto mt-2 px-1 py-4 rounded-sm shadow-md shadow-blue-900 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
