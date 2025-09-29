import logo from "../assets/logo-dij-font.png";
import { Outlet } from "react-router";

export default function SitePage() {
  return (
    <>
      <div className="w-full h-screen py-7 md:px-10 bg-slate-100">
        <img src={logo} alt="logo" className="w-3xs m-auto" />
        <span className="block w-xs h-[4px] m-auto mt-4 bg-gradient-to-r from-purple-300 via-orange-400 to-blue-500" />
        <div className="bg-white w-full lg:max-w-9/10 xl:max-w-3/4 m-auto mt-7 xl:px-7 shadow-lg">
          <Outlet />
        </div>
        <p className="w-full m-auto mt-3 py-7 text-center text-gray-500">
          Copyright &copy; 2025 detik ini juga
        </p>
      </div>
    </>
  );
}
