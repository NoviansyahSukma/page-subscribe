import { FaSignal } from "react-icons/fa";
import { PiTelevision } from "react-icons/pi";
import logoBintaro from "../../assets/image/logo-bintaro.png";
import LayoutPackage from "./LayoutPackage";
import PackageContent from "./package-content/PackageContent";
import PackageCard from "../card/PackageCard";
import Terms from "../button/Terms";
import Subscribe from "../button/Subscribe";

export default function Bintaro() {
  const tower = [{ id: 1, nameTower: "Chicago" }];
  return (
    <>
      <LayoutPackage imageSrc={logoBintaro}>
        <PackageContent
          bundling={true}
          textHead="INTERNET & TV"
          style="text-purple-900"
          icon1={<FaSignal />}
          icon2={<PiTelevision />}
        >
          {/* BUNDLING TV */}
          <PackageCard
            bundling
            bandwith="20"
            namaPaket="LITE"
            textContentCard="Bundling TV"
            channel="50"
            harga="385.000"
          >
            <Terms bundling />
            <Subscribe
              bundling
              textHeadForm="BINTARO"
              paket="20 Mbps Bundling Tv"
              tower={tower}
            />
          </PackageCard>
          <PackageCard
            bundling
            bandwith="30"
            namaPaket="DULUXE"
            textContentCard="Bundling TV"
            channel="65"
            harga="505.000"
          >
            <Terms bundling />
            <Subscribe
              bundling
              textHeadForm="BINTARO"
              paket="30 Mbps Bundling Tv"
              tower={tower}
            />
          </PackageCard>
          <PackageCard
            bundling
            bandwith="50"
            namaPaket="MAX"
            textContentCard="Bundling TV"
            channel="80"
            harga="715.000"
          >
            <Terms bundling />
            <Subscribe
              bundling
              textHeadForm="BINTARO"
              paket="50 Mbps Bundling Tv"
              tower={tower}
            />
          </PackageCard>
        </PackageContent>

        {/* INTERNET ONLY */}
        <PackageContent
          textHead="INTERNET ONLY"
          style="text-blue-900 mt-6"
          icon1={<FaSignal />}
        >
          <PackageCard
            internetOnly
            bandwith="20"
            namaPaket="LITE"
            textContentCard="Internet Only"
            harga="298.000"
          >
            <Terms internetOnly />
            <Subscribe
              textHeadForm="BINTARO"
              paket="20 Mbps Internet Only"
              tower={tower}
            />
          </PackageCard>
          <PackageCard
            internetOnly
            bandwith="30"
            namaPaket="DULUXE"
            textContentCard="Internet Only"
            harga="398.000"
          >
            <Terms internetOnly />
            <Subscribe
              textHeadForm="BINTARO"
              paket="30 Mbps Internet Only"
              tower={tower}
            />
          </PackageCard>
          <PackageCard
            internetOnly
            bandwith="50"
            namaPaket="MAX"
            textContentCard="Internet Only"
            harga="598.000"
          >
            <Terms internetOnly />
            <Subscribe
              textHeadForm="BINTARO"
              paket="50 Mbps Internet Only"
              tower={tower}
            />
          </PackageCard>
        </PackageContent>
      </LayoutPackage>
    </>
  );
}
