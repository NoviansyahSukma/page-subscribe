import Card from "./card/SiteCard";
import logoBintaro from "../assets/image/logo-bintaro.png";
import thumbBintaro from "../assets/image/thumb-bintaro.jpg";
import logoCibubur from "../assets/image/logo-cibubur.png";
import thumbCibubur from "../assets/image/thumb-cibubur.jpg";
import logoJuanda from "../assets/image/logo-juanda.png";
import thumbJuanda from "../assets/image/thumb-juanda.jpg";
import logoSurabaya from "../assets/image/logo-surabaya.png";
import thumbSurabaya from "../assets/image/thumb-surabaya.jpg";

export default function SiteList() {
  return (
    <>
      <div className="w-full m-auto p-7 md:py-10 md:px-15 lg:px-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-2 md:gap-y-7 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-0">
        <Card
          logo={logoBintaro}
          thumb={thumbBintaro}
          alt="thumb-bintaro"
          link="paket/bintaro"
        />
        <Card
          logo={logoCibubur}
          thumb={thumbCibubur}
          alt="thumb-bintaro"
          link="paket/cibubur"
        />
        <Card
          logo={logoJuanda}
          thumb={thumbJuanda}
          alt="thumb-bintaro"
          link="paket/juanda"
        />
        <Card
          logo={logoSurabaya}
          thumb={thumbSurabaya}
          alt="thumb-bintaro"
          link="paket/surabaya"
        />
      </div>
    </>
  );
}
