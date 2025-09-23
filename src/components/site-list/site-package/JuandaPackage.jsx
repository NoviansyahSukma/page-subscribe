import { Link } from "react-router";
import logoJuanda from "../../../assets/image/logo-juanda.png";
import PackageCard from "../../card/PackageCard";
import { MdArrowBack } from "react-icons/md";

export default function JuandaPackage() {
  return (
    <>
      <div className="w-full 2xl:w-8/10 m-auto py-3 pb-7 relative">
        <Link to="/">
          <MdArrowBack className="bg-slate-500 right-5 hover:bg-slate-400 absolute p-1 text-3xl ml-5 text-slate-100 rounded-full" />
        </Link>
        <div className="max-w-9/10 flex items-center justify-between m-auto mt-4">
          <img src={logoJuanda} alt="" className="w-[140px]" />
          <h1 className="text-4xl ml-3 font-semibold text-slate-600">PAKET</h1>
        </div>

        <div className="w-full px-4 mt-4 m-auto">
          <h3 className="text-2xl tracking-wide font-semibold ml-7 text-slate-600">
            INTERNET & TV
          </h3>

          <div className="w-full m-auto mt-4 px-1 py-6 rounded-sm border-1 border-purple-900 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PackageCard
              bundling={true}
              tncJuanda={true}
              bandWidth={"10"}
              namaPaket={"SILVER"}
              channel={"49"}
              inetBw={"10"}
              price={"187.378"}
            />
            <PackageCard
              bundling={true}
              tncJuanda={true}
              bandWidth={"20"}
              namaPaket={"GOLD"}
              channel={"59"}
              inetBw={"20"}
              price={"275.409"}
            />
            <PackageCard
              bundling={true}
              tncJuanda={true}
              bandWidth={"30"}
              namaPaket={"PLATINUM"}
              channel={"70"}
              inetBw={"30"}
              price={"425.687"}
            />
            <PackageCard
              bundling={true}
              tncJuanda={true}
              bandWidth={"50"}
              namaPaket={"DIAMOND"}
              channel={"83"}
              inetBw={"50"}
              price={"719.496"}
            />
            <PackageCard
              bundling={true}
              tncJuanda={true}
              dvb={"(DVB-T)"}
              bandWidth={"2"}
              namaPaket={"IPL"}
              channel={"20"}
              inetBw={"2"}
              price={""}
            />
          </div>
        </div>
      </div>
    </>
  );
}
