export default function BlogPage() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-black mb-4 text-green-700 dark:text-green-400">Blog & Dokumentasi</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-300 text-lg max-w-2xl">Tempat menulis dokumentasi, kegiatan sehari-hari, atau catatan penting lainnya. Anda bisa menulis pengalaman, tutorial, atau catatan teknologi di sini.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contoh Blog Card */}
        <div className="rounded-2xl bg-white/80 dark:bg-black/60 border border-gray-200 dark:border-gray-800 shadow-lg p-8 flex flex-col gap-3 hover:scale-[1.02] transition-all duration-200">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Judul Tulisan</h2>
          <p className="text-gray-600 dark:text-gray-300">Cuplikan atau ringkasan tulisan. Misal: pengalaman magang, tutorial, dsb.</p>
          <a href="#" className="text-green-600 dark:text-green-400 hover:underline text-sm font-semibold">Baca selengkapnya</a>
        </div>
        {/* Tambahkan blog lain di sini */}
      </div>
      <div className="mt-12 text-center">
        <a href="mailto:zaidan@email.com" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-green-400 text-white font-bold shadow-lg hover:scale-105 hover:from-green-700 hover:to-green-500 transition-all duration-200">Ingin Diskusi? Kontak Saya</a>
      </div>
    </section>
  );
}
