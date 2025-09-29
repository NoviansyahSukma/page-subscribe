import logoSurabaya from "../../assets/image/logo-surabaya.png";
import LayoutPackage from "./LayoutPackage";
import PackageContent from "./package-content/PackageContent";

export default function Surabaya() {
  return (
    <>
      <LayoutPackage imageSrc={logoSurabaya}>
        <div className="w-full h-100 p-5 md:px-7 lg:px-6 2xl:px-16 m-auto flex items-center justify-center bg-gradient-to-r from-purple-300 via-orange-400 to-blue-500">
          <h1 className="text-6xl text-center text-slate-700">COMING SOON</h1>
        </div>
      </LayoutPackage>
    </>
  );
}
