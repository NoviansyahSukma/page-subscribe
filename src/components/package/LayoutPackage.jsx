import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router";
import { FaSignal } from "react-icons/fa";
import { PiTelevision } from "react-icons/pi";

export default function LayoutPackage({ imageSrc, children }) {
  return (
    <>
      <div className="w-full p-5 md:px-7 lg:px-6 2xl:px-16 m-auto">
        <div className="px-2">
          <Link to="/" className="group w-[90px] flex items-center">
            <MdArrowBack className="bg-slate-500 inline-block group-hover:bg-slate-400 p-1 text-2xl sm:text-2xl sm:p-0.5 text-slate-100 rounded-full" />
            <p className="text-lg ml-1.5 font-semibold inline-block text-slate-500 sm:text-2xl group-hover:text-slate-400">
              Back
            </p>
          </Link>
        </div>

        <div className="w-full flex items-center justify-between m-auto mt-2 px-2">
          <img src={imageSrc} alt="bintaro" className="w-[140px]" />
          <h1 className="text-4xl font-semibold text-slate-600">PAKET</h1>
        </div>

        {children}
      </div>
    </>
  );
}
