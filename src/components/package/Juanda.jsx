import { FaSignal } from "react-icons/fa";
import { PiTelevision } from "react-icons/pi";
import logoJuanda from "../../assets/image/logo-juanda.png";
import LayoutPackage from "./LayoutPackage";
import PackageContent from "./package-content/PackageContent";
import PackageCard from "../card/PackageCard";
import Terms from "../button/Terms";
import Subscribe from "../button/Subscribe";

export default function Juanda() {
  const tower = [
    { id: 1, nameTower: "Jade (A)" },
    { id: 2, nameTower: "Saphire (B)" },
  ];

  return (
    <>
      <LayoutPackage imageSrc={logoJuanda}>
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
            bandwith="10"
            namaPaket="Silver"
            textContentCard="Bundling TV"
            channel="45"
            harga="187.378"
          >
            <Terms bundlingJuanda />
            <Subscribe
              textHeadForm="JUANDA"
              bundlingJuanda
              paket="10 Mbps Bundling Tv"
              tower={tower}
            />
          </PackageCard>
          <PackageCard
            bundling
            bandwith="20"
            namaPaket="GOLD"
            textContentCard="Bundling TV"
            channel="59"
            harga="275.409"
          >
            <Terms bundlingJuanda />
            <Subscribe
              textHeadForm="JUANDA"
              bundlingJuanda
              paket="20 Mbps Bundling Tv"
              tower={tower}
            />
          </PackageCard>
          <PackageCard
            bundling
            bandwith="30"
            namaPaket="PLATINUM"
            textContentCard="Bundling TV"
            channel="70"
            harga="425.687"
          >
            <Terms bundlingJuanda />
            <Subscribe
              textHeadForm="JUANDA"
              bundlingJuanda
              paket="30 Mbps Bundling Tv"
              tower={tower}
            />
          </PackageCard>
          <PackageCard
            bundling
            bandwith="50"
            namaPaket="DIAMOND"
            textContentCard="Bundling TV"
            channel="83"
            harga="719.496"
          >
            <Terms bundlingJuanda />
            <Subscribe
              textHeadForm="JUANDA"
              bundlingJuanda
              paket="50 Mbps Bundling Tv"
              tower={tower}
            />
          </PackageCard>
          <PackageCard
            bundling
            bandwith="2"
            namaPaket="IPL"
            textContentCard="Bundling TV (DVB-T)"
            channel="20"
            textIpl="*Biaya berlangganan sudah termasuk dalam IPL bulanan"
          >
            <Terms bundlingJuanda bundlingIpl />
            <Subscribe
              textHeadForm="JUANDA"
              bundlingJuanda
              bundlingIpl
              paket="2 Mbps Bundling Tv"
              tower={tower}
            />
          </PackageCard>
        </PackageContent>
      </LayoutPackage>
    </>
  );
}
