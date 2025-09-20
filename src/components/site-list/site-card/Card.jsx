import { Link } from "react-router";

export default function Card({ logo, thumb, alt, link }) {
  return (
    <>
      <div className="max-w-96 m-auto pt-2 pb-6 shadow-sm transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:bg-slate-100 hover:shadow-md hover:shadow-slate-500">
        <img src={logo} alt="logo-bintaro" className="w-[140px] m-auto" />
        <img src={thumb} alt={alt} className="w-3xs m-auto mt-2 px-4" />
        <button className="m-auto mt-5 px-3 py-1 block rounded-sm bg-blue-500 text-slate-200 font-inter font-semibold hover:bg-blue-700">
          <Link to={link}>Pilih Paket</Link>
        </button>
      </div>
    </>
  );
}
