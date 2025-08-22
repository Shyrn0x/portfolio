export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 relative min-h-[60vh]">
        {/* Decorative Gradient Circles */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30 rounded-full blur-3xl z-0 animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-green-400 via-blue-400 to-purple-400 opacity-20 rounded-full blur-3xl z-0 animate-pulse" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-blue-500 via-blue-700 to-purple-500 flex items-center justify-center shadow-xl border-4 border-white/40 dark:border-black/40 animate-fade-in overflow-hidden">
            <img src="/pic.png" alt="Foto Zaidan Arrifqi" className="w-full h-full object-cover scale-125" />
          </div>
          <h1 className="text-5xl font-black text-gray-900 dark:text-white text-center tracking-tight animate-fade-in">Zaidan Arrifqi</h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 text-center font-medium animate-fade-in">Programming Enthusiast | Junior Web Developer </p>
          <div className="flex gap-4 mt-6 animate-fade-in">
            <a href="/projects" className="px-8 py-3 rounded-full bg-white/10 backdrop-blur border border-blue-400 text-blue-600 font-bold shadow-lg flex items-center gap-2 hover:bg-blue-600 hover:text-white hover:shadow-xl transition-all duration-200 group">
              <svg className="w-5 h-5 text-blue-500 group-hover:text-white transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
              Lihat Project
            </a>
            <a href="/blog" className="px-8 py-3 rounded-full bg-white/10 backdrop-blur border border-green-400 text-green-600 font-bold shadow-lg flex items-center gap-2 hover:bg-green-600 hover:text-white hover:shadow-xl transition-all duration-200 group">
              <svg className="w-5 h-5 text-green-500 group-hover:text-white transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"/></svg>
              Blog & Dokumentasi
            </a>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="max-w-5xl mx-auto w-full px-4 pb-16 grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        <div className="bg-white/80 dark:bg-black/60 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-800 flex flex-col items-start gap-3 hover:scale-[1.03] transition-all duration-200">
          <span className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-1">Project</span>
          <span className="font-semibold text-gray-900 dark:text-white">Karya & Proyek</span>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Lihat koleksi project yang pernah saya buat, mulai dari aplikasi, website, hingga eksperimen teknologi.</p>
          <a href="/projects" className="mt-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold">Lihat semua project →</a>
        </div>
        <div className="bg-white/80 dark:bg-black/60 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-800 flex flex-col items-start gap-3 hover:scale-[1.03] transition-all duration-200">
          <span className="text-green-600 dark:text-green-400 font-bold text-lg mb-1">Blog</span>
          <span className="font-semibold text-gray-900 dark:text-white">Catatan & Dokumentasi</span>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Baca tulisan, dokumentasi, dan pengalaman sehari-hari saya di dunia teknologi dan kehidupan kampus.</p>
          <a href="/blog" className="mt-2 text-green-600 dark:text-green-400 hover:underline text-sm font-semibold">Baca blog & dokumentasi →</a>
        </div>
        <div className="bg-white/80 dark:bg-black/60 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-800 flex flex-col items-start gap-3 hover:scale-[1.03] transition-all duration-200">
          <span className="text-gray-700 dark:text-gray-200 font-bold text-lg mb-1">Tentang</span>
          <span className="font-semibold text-gray-900 dark:text-white">Profil Singkat</span>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Kenali lebih dekat siapa saya, latar belakang pendidikan, dan minat di bidang teknologi.</p>
          <a href="/about" className="mt-2 text-gray-700 dark:text-gray-200 hover:underline text-sm font-semibold">Tentang saya →</a>
        </div>
      </section>
    </>
  );
}
