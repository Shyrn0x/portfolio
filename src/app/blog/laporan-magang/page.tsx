export default function BlogDetailPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-black mb-4 text-green-700 dark:text-green-400">Laporan Magang</h1>
      <div className="flex items-center gap-3 mb-6">
        <img src="/pic.png" alt="Zaidan Arrifqi" className="w-10 h-10 rounded-full object-cover border-2 border-green-400" />
        <div>
          <span className="font-semibold text-gray-800 dark:text-gray-100">Zaidan Arrifqi</span>
          <span className="block text-xs text-gray-400">21 Agustus 2025</span>
        </div>
        <span className="ml-auto px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold">Dokumentasi</span>
      </div>
      <article className="prose dark:prose-invert max-w-none text-lg">
        {/* Latar Belakang */}
        <section className="mb-10">
          <h2 className="font-bold text-green-600 dark:text-green-400 text-2xl tracking-wide mb-3 mt-8">Latar Belakang</h2>
          <p>Kegiatan magang bertujuan menjembatani teori dan praktik agar mahasiswa siap menghadapi dunia kerja di bidang telekomunikasi dan teknologi.</p>
        </section>

        {/* Profil Perusahaan */}
        <section className="mb-10">
          <h2 className="font-bold text-green-600 dark:text-green-400 text-2xl tracking-wide mb-3 mt-8">Profil Perusahaan</h2>
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-xl rounded-2xl bg-white/70 dark:bg-black/60 shadow-xl border border-gray-200 dark:border-gray-800 p-8 flex flex-col items-center gap-4 backdrop-blur-md">
              <img src="/logo-perusahaan.png" alt="Logo Perusahaan" className="h-24 w-24 object-contain mb-2" />
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-1 mt-2 text-center">PT Mitra Karsa Utama (MKU)</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-700 rounded-full mb-4" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 w-full text-sm text-gray-700 dark:text-gray-200 mb-4">
                <div><span className="font-semibold">Lokasi:</span> Jl. Cempedak Selatan, Lamper Kidul, Kec. Semarang Sel., Kota Semarang</div>
                <div><span className="font-semibold">Bidang Usaha:</span> Outsourcing & Managed Services</div>
              </div>
              <div className="w-full mb-2">
                <span className="font-semibold">Visi Perusahaan:</span>
                <p className="mt-1 mb-2">Menjadi perusahaan terbaik dalam menyediakan layanan <span className="italic">Managed Services</span> di berbagai bidang di Indonesia.</p>
              </div>
              <div className="w-full">
                <span className="font-semibold">Misi Perusahaan:</span>
                <ol className="list-decimal list-inside mt-1 space-y-1">
                  <li>Menjadikan kepuasan mitra bisnis sebagai prioritas.</li>
                  <li>Memberikan nilai tambah untuk mitra bisnis.</li>
                  <li>Mengelola sumber daya manusia dengan layanan berkualitas tinggi.</li>
                  <li>Menggunakan prosedur standar yang inovatif, efisien, dan efektif.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Tujuan Magang */}
        <section className="mb-10">
          <h2 className="font-bold text-green-600 dark:text-green-400 text-2xl tracking-wide mb-3 mt-8">Tujuan Magang</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Menerapkan ilmu dan keterampilan yang diperoleh selama kuliah ke dunia kerja nyata.</li>
            <li>Memahami proses kerja di industri telekomunikasi dan teknologi.</li>
            <li>Meningkatkan kompetensi teknis dan soft skill seperti komunikasi serta kerja tim.</li>
          </ul>
        </section>

        {/* Waktu dan Tempat Magang */}
        <section className="mb-10">
          <h2 className="font-bold text-green-600 dark:text-green-400 text-2xl tracking-wide mb-3 mt-8">Waktu dan Tempat Magang</h2>
          <ul className="list-none ml-0">
            <li><span className="font-semibold">Tanggal Pelaksanaan:</span> 21 Agustus 2025 – 18 Januari 2026</li>
            <li><span className="font-semibold">Tempat Magang:</span> PT. Mitra Karsa Utama</li>
            <li><span className="font-semibold">Alamat:</span> Jl. Cempedak Selatan, Lamper Kidul, Kec. Semarang Selatan, Kota Semarang</li>
          </ul>
        </section>

        {/* Deskripsi Kegiatan */}
        <section className="mb-10">
          <h2 className="font-bold text-green-600 dark:text-green-400 text-2xl tracking-wide mb-3 mt-8">Deskripsi Kegiatan</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Membuat laporan hasil inspeksi dan rekomendasi (Approved/Rejected).</li>
            <li>Validasi material genset sesuai spesifikasi teknis dan standar OEM.</li>
            <li>Koordinasi dengan vendor dan tim QA/QC.</li>
          </ol>
        </section>
      </article>
    </section>
  );
}
