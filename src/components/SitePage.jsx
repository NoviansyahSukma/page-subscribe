import { useState } from "react";
import logo from "../assets/logo-dij-font.png";
import { Outlet } from "react-router";
import { useEffect } from "react";

export default function SitePage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 200);
  }, []);

  return (
    <>
      <div className="w-full h-screen py-7 md:px-10 bg-slate-100">
        <div
          className={`transition-all duration-1000 transform ease-in-out ${
            show
              ? "opacity-100 translate-y-0 delay-100"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <img src={logo} alt="logo" className="w-3xs m-auto" />
        </div>

        <div
          className={`transition-all duration-1000 transform ease-in-out ${
            show
              ? "opacity-100 translate-y-0 delay-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <span className="block w-xs h-[4px] m-auto mt-4 bg-gradient-to-r from-purple-300 via-orange-400 to-blue-500" />
        </div>

        <div className="bg-white w-full lg:max-w-9/10 xl:max-w-3/4 m-auto mt-7 xl:px-7 shadow-lg">
          <Outlet />
        </div>

        <div
          className={`transition-all duration-1000 transform ease-in-out ${
            show
              ? "opacity-100 translate-y-0 delay-200"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="w-full m-auto mt-3 py-7 text-center text-gray-500">
            Copyright &copy; 2025 detik ini juga
          </p>
        </div>
      </div>
    </>
  );
}
