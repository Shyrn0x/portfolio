export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-black mb-4 text-blue-700 dark:text-blue-400">Project</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-300 text-lg max-w-2xl">Berikut adalah beberapa project yang pernah saya buat, mulai dari aplikasi, website, hingga eksperimen teknologi. Klik detail untuk info lebih lanjut.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contoh Project Card */}
        <div className="rounded-2xl bg-white/80 dark:bg-black/60 border border-gray-200 dark:border-gray-800 shadow-lg p-8 flex flex-col gap-3 hover:scale-[1.02] transition-all duration-200">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Judul Project</h2>
          <p className="text-gray-600 dark:text-gray-300">Deskripsi singkat project. Misal: Website portofolio, aplikasi monitoring, dsb.</p>
          <div className="flex gap-2 mt-2">
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold">Lihat detail</a>
            <a href="#" className="text-gray-500 dark:text-gray-300 hover:underline text-sm font-semibold">GitHub</a>
          </div>
        </div>
        {/* Tambahkan project lain di sini */}
      </div>
      <div className="mt-12 text-center">
        <a href="mailto:zaidan@email.com" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition-all duration-200">Ingin Kolaborasi? Kontak Saya</a>
      </div>
    </section>
  );
}
