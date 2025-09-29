// import { useEffect } from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router";

export default function Accordion({ infoBundling }) {
  const [isOpenA, setIsOpenA] = useState(false);
  const [isOpenB, setIsOpenB] = useState(false);

  return (
    <div className="w-full m-auto mt-5 bg-gray-100 border-1 hover:bg-slate-200 border-slate-400 rounded-lg hover:border-sky-400 hover:shadow-md focus:outline-sky-300 overflow-hidden">
      <div
        className={`w-full flex items-center ${
          isOpenA ? "border-b-1 border-slate-400" : "border-none"
        }`}
      >
        <FaChevronDown
          aria-hidden="true"
          className="pointer-events-none right-3 text-slate-500 text-sm ml-4"
        />
        {infoBundling ? (
          <button
            type="button"
            onClick={() => {
              setIsOpenA(!isOpenA);
              setIsOpenB(false);
            }}
            className="w-full px-4 py-2 text-right text-gray-800"
          >
            Info Bundling Tv
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setIsOpenB(!isOpenB);
              setIsOpenA(false);
            }}
            className="w-full px-4 py-2 text-right text-gray-800"
          >
            Info Internet Only
          </button>
        )}
      </div>

      {isOpenA && (
        <div className="px-4 py-2 bg-slate-100 text-gray-700 shadow-md">
          <ol className="list-decimal px-4 mt-2 text-slate-800">
            <li>
              Harga sebagaimana disebutkan{" "}
              <span className="font-semibold">diatas sebelum PPN 11%</span> dan
              belum termasuk biaya materai.
            </li>
            <li>
              Silahkan melakukan pembayaran di Payment Channel Transvision.
            </li>
            <li>
              Pembayaran dilakukan dengan memasukkan Kode Pembayaran ID
              Pelanggan &#40;
              <span className="font-semibold">contoh:127899887766</span>
              &#41;.
            </li>
            <li>
              Perangkat ONT, STB/Dekoder dan kelengkapannya merupakan milik
              DIJ/Transvision selama berlangganan layanan DIJ/Transvision, dan
              wajib dikembalikan apabila periode berlangganan berakhir. Selama
              dipinjam-pakaikan perangkat ONT, STB/Dekoder dan kelengkapannya
              merupakan tanggungjawab Pelanggan sehingga kerusakan ataupun
              kehilangan dikarenakan kelalaian Pelanggan akan dikenakan biaya
              sesuai tarif yang berlaku.
            </li>
            <li>
              Bila ada pertanyaan, silahkan menghubungi contact center kami di{" "}
              <span className="font-semibold">021-50999333</span> atau email:{" "}
              <span className="text-blue-700 font-semibold">
                helpdesk@detikinijuga.net.id
              </span>{" "}
              atau nomor Whatsapp di{" "}
              <Link
                to="https://wa.me/6282299000147"
                target="blank"
                className="text-green-700 font-semibold hover:text-green-500"
              >
                0822-9900-0147
              </Link>
            </li>
            <li>
              Dengan submit formulir ini, pelanggan telah menyetujui untuk
              berlangganan layanan DIJ/Transvision dan mengikuti syarat dan
              ketentuan berlangganan layanan DIJ/Transvision.
            </li>
          </ol>
        </div>
      )}

      {isOpenB && (
        <div className="px-4 py-2 bg-slate-100 text-gray-700 shadow-md">
          <ol className="list-decimal px-4 mt-2 text-slate-800">
            <li>
              Calon Pelanggan adalah pemilik unit atau penyewa yang telah
              mendapatkan persetujuan pemilik unit.
            </li>
            <li>
              Harga di atas belum termasuk{" "}
              <span className="font-semibold">PPN 11%</span> dan biaya materai
              &#40;jika diperlukan&#41;
            </li>
            <li>
              Silahkan melakukan pembayaran melalui rekening Bank Mega ke nomor
              rekening{" "}
              <span className="font-semibold">01.074.00.11.038198</span> an. PT
              Detik Ini Juga. &#41;.
            </li>
            <li>
              Selama berlangganan layanan internet, perangkat ONT dan
              kelengkapannya merupakan milik PT Detik Ini Juga &#40;DIJ&#41; dan
              wajib dikembalikan apabila periode berlangganan berakhir. Selama
              dipinjam-pakaikan, perangkat ONT merupakan tanggung jawab
              Pelanggan, sehingga kerusakan atau pun kehilangan dikarenakan
              kelalaian Pelanggan akan dikenakan biaya sesuai tarif yang
              berlaku.
            </li>
            <li>
              Bila ada pertanyaan, silahkan menghubungi contact center kami di{" "}
              <span className="font-semibold">08159454852</span> atau email:{" "}
              <span className="text-blue-700 font-semibold">
                helpdesk@detikinijuga.net.id
              </span>{" "}
              atau nomor Whatsapp di{" "}
              <Link
                to="https://wa.me/6282299000147"
                target="blank"
                className="text-green-700 font-semibold hover:text-green-500"
              >
                0822-9900-0147
              </Link>
            </li>
            <li>
              Dengan submit formulir ini, pelanggan telah menyetujui untuk
              berlangganan layanan DIJ dan mengikuti syarat dan ketentuan
              berlangganan layanan DIJ
            </li>
          </ol>
        </div>
      )}
    </div>
  );
}
