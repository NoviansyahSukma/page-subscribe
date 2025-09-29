export default function BundlingJuanda({ setIsOpen }) {
  return (
    <>
      <div className="w-full px-4">
        <h2 className="text-2xl text-center font-semibold">
          Syarat & Ketentuan
        </h2>
        <h3 className="text-md sm:text-lg mt-4 font-semibold text-center">
          Syarat dan ketentuan layanan DIJ/Transvision ini adalah perjanjian
          antara PT Detik Ini Juga &#40;&#34;DIJ&#34;&#41; dengan pelanggan DIJ
          &#40;&#34;Pelanggan&#34;&#41; &#40;untuk selanjutnya disebut
          “SKB”&#41;. dan berlaku efektif sejak Pelanggan menyetujui.
        </h3>

        <div className="my-5 text-left">
          <h3 className="text-lg font-semibold">A. Umum</h3>
          <ul className="text-md list-decimal list-outside px-4">
            <li>
              Dokumen &#34;Form Kontrak Berlangganan Paket Premium&#34; ini,
              wajib mendapat persetujuan dari Pemilik Unit Apartemen Transpark
              Bekasi.
            </li>
            <li>
              Pelanggan akan dihubungi oleh pihak Perusahaan, untuk
              mengkonfirmasi &#34;Form Kontrak Berlangganan Paket Premium&#34;
              yang telah diisi dan ditandatangani.
            </li>
            <li>Bagi Pelanggan yang memilih instalasi dengan jasa Teknisi :</li>
            <ul className="list-[lower-alpha] px-4">
              <li>
                Terdapat biaya instalasi yang dibayarkan pada awal masa
                berlangganan.
              </li>
              <li>
                Instalasi dilakukan paling lambat pada H+7 &#40;tujuh&#41; hari
                kerja setelah pelanggan berhasil dikonfirmasi.
              </li>
            </ul>
            <li>
              Ketentuan bagi Pelanggan yang memilih instalasi secara mandiri :
            </li>
            <ul className="list-[lower-alpha] px-4">
              <li>
                Terdapat biaya pengiriman yang wajib dibayarkan pada awal masa
                berlangganan.
              </li>
              <li>
                Pengiriman akan menggunakan jasa ekspedisi yang telah ditentukan
                oleh Perusahaan.
              </li>
              <li>
                Batas waktu normal lama pengiriman adalah +- 3 hari kerja, sejak
                Pelanggan berhasil dikonfirmasi.
              </li>
              <li>
                Billing/tagihan atas Paket Layanan akan terhitung sejak H+1
                ekspedisi menyelesaikan pengiriman.
              </li>
            </ul>
            <li>
              Jangka waktu berlangganan minimal kontrak 12 &#40;dua belas&#41;
              bulan &#40;otomatis diperpanjang&#41;.
            </li>
            <li>
              Jika berhenti berlangganan kurang dari 12 &#40;dua belas&#41;
              bulan maka dikenakan penalty.
            </li>
            <li>
              Jika melakukan penurunan paket{" "}
              <span className="italic">&#40;downgrade&#41;</span> kurang dari 12
              &#40;dua belas&#41; bulan maka akan dikenakan penalty.
            </li>
            <li>Billing / tagihan :</li>
            <ul className="list-[lower-alpha] px-4">
              <li>
                Billing/tagihan pertama, akan bersifat{" "}
                <span className="italic">prorate</span>.
              </li>
              <li>
                Kemudian siklus billing/tagihan berikutnya, akan mengikuti
                standar tanggal siklus billing yakni setiap tanggal 1 atau
                setiap tanggal 16.
              </li>
              <li>
                Jatuh tempo pembayaran billing/tagihan adalah 15 &#40;lima
                belas&#41; hari kalender dari tanggal cetak dokumen
                billing/tagihan.
              </li>
              <li>
                Terdapat denda keterlambatan apabila Pelanggan terlambat
                melakukan pembayaran billing/tagihan.
              </li>
              <li>
                Jika dalam waktu 5 &#40;lima&#41; hari kalender setelah jatuh
                tempo, tidak ada pembayaran, maka Paket Layanan akan dihentikan{" "}
                <span className="italic">&#40;isolir/freeze&#41;</span> sampai
                pelanggan melakukan pembayaran.
              </li>
            </ul>
            <li>
              ONT dan STB adalah milik DIJ, apabila terjadi kerusakan/kehilangan
              yang disebabkan oleh pelanggan, pelanggan wajib membayar biaya
              ganti rugi.
            </li>
            <li>
              Jika pelanggan ingin pindah layanan ke unit baru, maka akan
              dihitung pemasangan layanan baru.
            </li>
            <li>
              Calon Pelanggan bertanggungjawab penuh terhadap kebenaran dari
              seluruh data dan informasi yang disampaikan di dalam formulir
              pendaftaran Transvision.
            </li>
            <li>
              Pelanggan wajib membaca, mengetahui dan menandatangani berita
              acara instalasi maupun dokumen pendukung lainnya &#40;apabila
              ada&#41; di lokasi dari DIJ dan atau pihak lain yang ditunjuk
              secara resmi oleh DIJ kepada pelanggan.
            </li>
            <li>
              Pelanggan tidak diperkenankan melakukan pembayaran atas biaya
              berlangganan secara tunai melalui karyawan DIJ/Transvision atau
              pihak yang ditunjuk secara resmi oleh DIJ/Transvision dalam
              melakukan instalasi Layanan DIJ/Transvision. Seluruh pembayaran
              yang dilakukan oleh Pelanggan harus dilakukan melalui payment
              channel yang dimiliki <b>Transvision</b> dari waktu ke waktu
              seperti yang tertera di dalam website resmi <b>Transvision</b>,
              antara lain melalui kode bayar, virtual account bank, mini market,
              maupun aplikasi mobile.
            </li>
            <li>
              DIJ/Transvision tidak bertanggung jawab dan Pelanggan setuju untuk
              membebaskan DIJ/Transvision terhadap kondisi &#34;Force
              Majeure&#34; atau kondisi di luar kehendak/kemampuan
              DIJ/Transvision termasuk tapi tidak terbatas pada layanan
              internet,saluran yang hilang karena gangguan pada satelit,
              penggantian/perubahan dalam kebijakan/peraturan yang dikeluarkan
              oleh pemerintah Republik Indonesia, unjuk rasa, perang, gempa
              bumi, banjir, petir, kebakaran, dan lain-lain yang mungkin terjadi
              selama masa berlangganan yang berada di luar jangkauan kemampuan
              manusia pada umumnya, termasuk DIJ/Transvision, sehingga
              DIJ/Transvision tidak berkewajiban untuk memberikan ganti rugi
              dalam bentuk apapun kepada Pelanggan.
            </li>
            <li>
              Pelanggan dapat mengajukan berhenti berlanggan atau mengajukan
              pindah layanan ke unit baru, melalui hot line contact center
              021-50999333.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">B. Biaya</h3>
          <ul className="text-md list-decimal list-outside px-4">
            <li>
              Biaya instalasi menggunakan jasa Teknisi sebesar Rp.200.000,-
              &#40;dua ratus ribu rupiah&#41;.
            </li>
            <li>
              Apabila Pelanggan ingin melakukan instalasi mandiri, maka akan
              dikenakan biaya pengiriman sebesar Rp.10.000,-
            </li>
            <li>
              Apabila Pelanggan terlambat membayar tagihan bulanan melebihi
              batas waktu yang ditetapkan, maka dikenakan biaya denda
              keterlambatan sebesar Rp.50.000,- &#40;lima puluh ribu rupiah&#41;
              per keterlambatan per bulan.
            </li>
            <li>
              Biaya penggantian perangkat karena kerusakan/kehilangan yang
              disebabkan oleh pelanggan:
            </li>
            <ul className="list-[lower-alpha] px-4">
              <li>
                Biaya penggantian ONT: Rp 1,500,000 &#40;satu juta lima ratus
                ribu rupiah&#41;
              </li>
              <li>
                Biaya penggantian STB: Rp 399,000 &#40;tiga ratus sembilan puluh
                sembilan ribu rupiah&#41;
              </li>
            </ul>
          </ul>

          <h3 className="text-lg font-semibold mt-4">C. Sanksi</h3>
          <ul className="text-md list-decimal list-outside px-4">
            <li>
              Pelanggan akan dikenakan penalty sebesar Rp. 1.000.000,- &#40;satu
              juta rupiah&#41; apabila berhenti berlangganan sebelum 12 &#40;dua
              belas&#41; bulan dan biaya penarikan perangkat sebesar Rp. 100.000
              &#40;seratus ribu rupiah&#41;.
            </li>
            <li>
              Pelanggan akan dikenakan penalty sebesar Rp. 100.000,-
              &#40;seratus ribu rupiah&#41; apabila melakukan penurunan paket
              &#40;downgrade&#41; sebelum 12 &#40;dua belas&#41; bulan
              berlangganan.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">D. Lain-lain</h3>
          <ul className="text-md list-decimal list-outside px-4">
            <li>Biaya-biaya yang disebutkan belum termasuk PPN 11%</li>
            <li>
              DIJ/Transvision tidak bertanggung jawab terhadap materi siaran
              yang dikarenakan seluruh materi siaran tersebut berasal dari pihak
              ketiga dan DIJ/Transvision hanya menyiarkan kembali. Apabila ada
              materi siaran yang bertentangan dengan hukum, norma, kesusilaan,
              kesopanan, adat-istiadat, agama, dan lain-lain, maka
              DIJ/Transvision tidak dapat diminta pertanggung jawabannya dan
              karenanya Pelanggan membebaskan DIJ/Transvision dari setiap
              tuntutan, gugatan hukum terhadap materi siaran tersebut.
            </li>
            <li>
              Dengan berlangganan Layanan DIJ/Transvision, maka Pelanggan dengan
              ini menyatakan akan tunduk kepada seluruh syarat dan ketentuan
              dalam SKB ini berserta seluruh perubahannya dari waktu ke waktu
              tanpa harus adanya pemberitahuan terlebih dahulu oleh
              DIJ/Transvision.
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
