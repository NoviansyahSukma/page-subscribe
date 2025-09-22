export default function InetOnly({ setIsOpen }) {
  return (
    <>
      <div className="w-full px-4">
        <h2 className="text-2xl text-center font-semibold">
          Syarat & Ketentuan
        </h2>
        <h3 className="text-md sm:text-lg mt-4 font-semibold text-center">
          Syarat dan ketentuan layanan DIJ ini adalah perjanjian antara PT Detik
          Ini Juga &#40;&#34;DIJ&#34;&#41; dengan pelanggan DIJ
          &#40;&#34;Pelanggan&#34;&#41; &#40;untuk selanjutnya disebut
          &#34;SKB&#34;&#41;. SKB ini berlaku efektif sejak layanan
        </h3>

        <div className="my-5 text-left">
          <h3 className="text-lg font-semibold">A. Umum</h3>
          <ul className="text-md list-decimal list-outside px-4">
            <li>
              Jangka waktu berlangganan minimal kontrak 12 &#40;dua belas&#41;
              bulan &#40;otomatis diperpanjang&#41;.Jika berhenti berlangganan
              kurang dari 12 &#40;dua belas&#41; bulan maka dikenakan penalty.
            </li>
            <li>
              Jika pelanggan ingin mengajukan pembekuan layanan &#40;
              <span className="italic">freeze</span>&#41;, periode{" "}
              <span className="italic">freeze</span> berlaku maksimal selama
              enam bulan berturut-turut.
            </li>
            <li>
              Jika melakukan penurunan paket &#40;
              <span className="italic">downgrade</span>&#41; kurang dari 12
              &#40;dua belas&#41; bulan maka akan dikenakan penalty.
            </li>
            <li>
              {" "}
              Jika permintaan penurunan paket &#40;
              <span className="italic">downgrade</span>&#41; masuk setelah
              billing diterbitkan, maka akan diproses di bulan berikutnya.
            </li>
            <li>
              Aktivasi dilakukan maksimal pada H+7 &#40;tujuh&#41; hari kerja
              setelah pelanggan mengirimkan berkas administrasi dan telah di
              verifikasi.
            </li>
            <li>
              Jatuh tempo pembayaran adalah 20 &#40;dua puluh&#41; hari dari
              tanggal cetak tagihan
            </li>
            <ul className="list-[lower-alpha] px-4">
              <li>
                Keterlambatan pembayaran akan dikenakan denda keterlambatan
              </li>
              <li>
                Jika dalam 5 &#40;lima&#41; hari setelah tanggal cetak tagihan
                bulan berikutnya tidak ada pembayaran, maka layanan pelanggan
                akan dihentikan sementara &#40;isolir&#41; sampai pelanggan
                melakukan pembayaran biaya berlangganan dan denda keterlambatan.
              </li>
              <li>
                Apabila pembayaran tidak dilakukan hingga tiga kali tagihan atau
                90 hari, maka akan dilakukan pemutusan sepihak oleh DIJ dan
                pelanggan akan dikenakan biaya penalti jika masa berlangganan
                kurang dari 12 bulan.
              </li>
            </ul>
            <li>
              {" "}
              ONT adalah milik DIJ, apabila terjadi kerusakan/kehilangan yang
              disebabkan oleh pelanggan, pelanggan wajib membayar biaya ganti
              rugi.
            </li>
            <li>
              Jika pelanggan ingin pindah layanan ke unit baru, maka akan
              dihitung pemasangan layanan baru.
            </li>
            <li>
              Calon Pelanggan bertanggungjawab penuh terhadap kebenaran dari
              seluruh data dan informasi yang disampaikan di dalam formulir
              pendaftaran.
            </li>
            <li>
              Pelanggan tidak diperkenankan melakukan pembayaran atas biaya
              berlangganan DIJ secara tunai melalui karyawan DIJ.
            </li>
            <li>
              DIJ tidak bertanggung jawab dan Pelanggan setuju untuk membebaskan
              DIJ terhadap kondisi &#34;Force Majeure&#34; atau kondisi di luar
              kehendak/kemampuan DIJ termasuk tapi tidak terbatas pada layanan
              internet, seperti gangguan pada jalur optic, penggantian/perubahan
              dalam kebijakan/peraturan yang dikeluarkan oleh pemerintah
              Republik Indonesia, unjuk rasa, perang, gempa bumi, banjir, petir,
              kebakaran dan lain-lain yang mungkin terjadi selama masa
              berlangganan yang berada di luar jangkauan kemampuan manusia pada
              umumnya, termasuk DIJ, sehingga DIJ tidak berkewajiban untuk
              memberikan ganti rugi dalam bentuk apapun kepada Pelanggan.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">B. Biaya</h3>
          <ul className="text-md list-decimal list-outside px-4">
            <li>
              Apabila Pelanggan terlambat membayar tagihan bulanan melebihi
              batas waktu yang ditetapkan, maka dikenakan biaya denda
              keterlambatan sebesar Rp 50.000,- &#40;lima puluh ribu rupiah&#41;
              per keterlambatan.
            </li>
            <li>
              Biaya penggantian perangkat karena kerusakan/kehilangan yang
              disebabkan oleh pelanggan adalah Rp 1.500.000,- &#40;satu juta
              lima ratus ribu rupiah&#41;.
            </li>
            <li>
              Pelanggan akan dikenakan penalti sebesar Rp 500.000,- &#40;lima
              ratus ribu rupiah&#41; apabila berhenti berlangganan sebelum 12
              &#40;dua belas&#41; bulan.
            </li>
            <li>
              Pelanggan akan dikenakan penalti sebesar Rp 100.000,- &#40;seratus
              ribu rupiah&#41; apabila melakukan penurunan paket &#40;
              <span className="italic">downgrade</span>&#41; sebelum 12 &#40;dua
              belas&#41; bulan.
            </li>
            <li>
              Pembekuan layanan &#40;<span className="italic">freeze</span>&#41;
              akan dikenakan biaya sewa perangkat sebesar Rp 100.000,-
              &#40;seratus ribu rupiah&#41; per bulan.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">D. Lain-lain</h3>
          <ul className="text-md list-decimal list-outside px-4">
            <li>Biaya-biaya yang disebutkan belum termasuk PPN 11%</li>
            <li>
              DIJ tidak bertanggung jawab terhadap penggunaan internet terkait
              semua aktifitas yang melanggar hukum dan semua akibat dari
              aktifitas di internet &#40;seperti penyebaran virus, pembajakan,
              tindakan kriminal, dll&#41;. Apabila ada kejadian yang
              bertentangan dengan hukum, norma, kesusilaan, kesopanan,
              adat-istiadat, agama dan lain-lain, maka DIJ tidak dapat diminta
              pertanggung jawabannya dan karenanya Pelanggan membebaskan DIJ
              dari setiap tuntutan, gugatan hukum terhadap penggunaan layanan.
            </li>
            <li>
              Dengan berlangganan Layanan DIJ, maka Pelanggan dengan ini
              menyatakan akan tunduk kepada seluruh syarat dan ketentuan dalam
              SKB ini beserta seluruh perubahannya dari waktu ke waktu tanpa
              harus adanya pemberitahuan terlebih dahulu oleh DIJ.
            </li>
          </ul>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className=" bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-center"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
