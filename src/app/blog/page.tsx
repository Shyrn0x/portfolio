export default function BlogPage() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-black mb-4 text-green-700 dark:text-green-400">Blog & Dokumentasi</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-300 text-lg max-w-3xl">Catatan saya tentang dunia teknologi, pengalaman kerja, dan hal-hal menarik lainnya.   </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Blog Card 1 */}
        <div className="rounded-3xl bg-white/70 dark:bg-black/60 border border-gray-200 dark:border-gray-800 shadow-2xl p-8 flex flex-col gap-4 hover:scale-[1.025] hover:shadow-2xl transition-all duration-200 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-2">
            <img src="/pic.png" alt="Zaidan Arrifqi" className="w-10 h-10 rounded-full object-cover border-2 border-green-400" />
            <div>
              <span className="font-semibold text-gray-800 dark:text-gray-100">Zaidan Arrifqi</span>
              <span className="block text-xs text-gray-400">21 Agustus 2025</span>
            </div>
            <span className="ml-auto px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold">Dokumentasi</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Laporan Magang</h2>
          <p className="text-gray-600 dark:text-gray-300">Dokumentasi pelaksanaan magang untuk meningkatkan keterampilan dan wawasan di bidang teknologi dan industri.</p>
          <div className="flex gap-2 mt-2">
            <a href="/blog/laporan-magang" className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold shadow hover:scale-105 hover:from-green-700 hover:to-green-500 transition-all text-sm">Baca selengkapnya</a>
          </div>
        </div>
        {/* Blog Card 2 */}
        <div className="rounded-3xl bg-white/70 dark:bg-black/60 border border-gray-200 dark:border-gray-800 shadow-2xl p-8 flex flex-col gap-4 hover:scale-[1.025] hover:shadow-2xl transition-all duration-200 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-2">
            <img src="/pic.png" alt="Zaidan Arrifqi" className="w-10 h-10 rounded-full object-cover border-2 border-green-400" />
            <div>
              <span className="font-semibold text-gray-800 dark:text-gray-100">Zaidan Arrifqi</span>
              <span className="block text-xs text-gray-400">28 Agustus 2025</span>
            </div>
            <span className="ml-auto px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-green-700 dark:text-blue-300 text-xs font-bold">Google Student Ambassador</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mengakhiri Era Kurikulum Labil dengan Platform yang Transparan   </h2>
          <p className="text-gray-600 dark:text-gray-300">Artikel ini mengupas tuntas dampak dari kebijakan kurikulum yang sering berubah-ubah.</p>
          <div className="flex gap-2 mt-2">
            <a href="/blog/artikel-google" className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold shadow hover:scale-105 hover:from-green-700 hover:to-green-500 transition-all text-sm">Baca selengkapnya</a>
          </div>
        </div>
      </div>
    </section>
    
  );
  
}
