export default function IplJuanda({ setIsOpen }) {
  return (
    <>
      <div className="w-full px-4">
        <h2 className="text-2xl text-center font-semibold">
          Syarat & Ketentuan
        </h2>
        <h3 className="text-md sm:text-lg mt-4 font-semibold text-center">
          Syarat dan ketentuan layanan DIJ/Transvision ini adalah perjanjian
          antara PT Detik Ini Juga &#40;&#34;DIJ&#34;&#41; dengan Tenant
          Transpark Juanda- Bekasi &#40;&#34;Tenant&#34;&#41;&#34; &#40;untuk
          selanjutnya disebut &#34;SKB&#34;&#41;. SKB ini berlaku efektif sejak
          Tenant menyetujui menerima layanan pertama kali.
        </h3>

        <div className="my-5 text-left">
          <h3 className="text-lg font-semibold">A. Umum</h3>
          <ul className="text-md list-decimal list-outside px-4">
            <li>
              ONT adalah milik DIJ &#40;kecuali ditentukan lain&#41;, apabila
              terjadi kerusakan/kehilangan yang disebabkan oleh Tenant, Tenant
              wajib membayar biaya ganti rugi.
            </li>
            <li>
              Jika Tenant ingin pindah layanan ke unit baru, maka akan dihitung
              pemasangan layanan baru.
            </li>
            <li>
              Calon Tenant bertanggungjawab penuh terhadap kebenaran dari
              seluruh data dan informasi yang disampaikan di dalam formulir
              pendaftaran Transvision.
            </li>
            <li>
              Tenant wajib membaca, mengetahui dan menandatangani berita acara
              instalasi maupun dokumen pendukung lainnya &#40;apabila ada&#41;
              di lokasi dari DIJ dan atau pihak lain yang ditunjuk secara resmi
              oleh DIJ kepada Tenant.
            </li>
            <li>
              DIJ/Transvision tidak bertanggung jawab dan Tenant setuju untuk
              membebaskan DIJ/Transvision terhadap kondisi &#34;Force
              Majeure&#34; atau kondisi di luar kehendak/kemampuan
              DIJ/Transvision termasuk tapi tidak terbatas pada layanan
              internet, saluran yang hilang karena gangguan pada satelit,
              penggantian/perubahan dalam kebijakan/peraturan yang dikeluarkan
              oleh pemerintah Republik Indonesia, unjuk rasa, perang, gempa
              bumi, banjir, petir, kebakaran, dan lain-lain yang mungkin terjadi
              selama masa berlangganan yang berada di luar jangkauan kemampuan
              manusia pada umumnya, termasuk DIJ/Transvision, sehingga
              DIJ/Transvision tidak berkewajiban untuk memberikan ganti rugi
              dalam bentuk apapun kepada Tenant.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">B. Biaya</h3>
          <ul className="text-md list-decimal list-outside px-4">
            <li>
              Biaya penggantian perangkat karena kerusakan/kehilangan yang
              disebabkan oleh Tenant.
            </li>
            <li>
              Biaya penggantian ONT : Rp 1,500,000 &#40;satu juta lima ratus
              ribu rupiah&#41;.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">D. Lain-lain</h3>
          <ul className="text-md list-decimal list-outside px-4">
            <li>
              DIJ/Transvision tidak bertanggung jawab terhadap materi siaran
              yang dikarenakan seluruh materi siaran tersebut berasal dari pihak
              ketiga dan DIJ/Transvision hanya menyiarkan kembali. Apabila ada
              materi siaran yang bertentangan dengan hukum, norma, kesusilaan,
              kesopanan, adat-istiadat, agama, dan lain-lain, maka
              DIJ/Transvision tidak dapat diminta pertanggung jawabannya dan
              karenanya Tenant membebaskan DIJ/Transvision dari setiap tuntutan,
              gugatan hukum terhadap materi siaran tersebut.
            </li>
            <li>
              Dengan berlangganan Layanan DIJ/Transvision, maka Tenant dengan
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
