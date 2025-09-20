import Card from "./site-card/Card";
import logoBintaro from "../../assets/image/logo-bintaro.png";
import thumbBintaro from "../../assets/image/thumb-bintaro.jpg";
import logoCibubur from "../../assets/image/logo-cibubur.png";
import thumbCibubur from "../../assets/image/thumb-cibubur.jpg";
import logoJuanda from "../../assets/image/logo-juanda.png";
import thumbJuanda from "../../assets/image/thumb-juanda.jpg";
import logoSurabaya from "../../assets/image/logo-surabaya.png";
import thumbSurabaya from "../../assets/image/thumb-surabaya.jpg";

export default function SiteList() {
  return (
    <>
      <div className="w-full lg:w-[100%] m-auto p-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 xl:gap-2">
        <Card
          logo={logoBintaro}
          thumb={thumbBintaro}
          alt="thumb-bintaro"
          link="package/bintaro"
        />
        <Card
          logo={logoCibubur}
          thumb={thumbCibubur}
          alt="thumb-bintaro"
          link="package/cibubur"
        />
        <Card
          logo={logoJuanda}
          thumb={thumbJuanda}
          alt="thumb-bintaro"
          link="package/juanda"
        />
        <Card
          logo={logoSurabaya}
          thumb={thumbSurabaya}
          alt="thumb-bintaro"
          link="cibubur-package"
        />
      </div>
    </>
  );
}
