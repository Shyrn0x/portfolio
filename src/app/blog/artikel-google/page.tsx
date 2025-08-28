export default function ArtikelGooglePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto py-20 px-4 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-4">
              🎓 Google Student Ambassador
            </span>
          </div>
          <h1 className="text-5xl font-black mb-6 leading-tight">
            Mengakhiri Era Kurikulum Labil dengan Platform yang Transparan
          </h1>
          <div className="flex items-center justify-center gap-4 text-green-100">
            <img src="/pic.png" alt="Zaidan Arrifqi" className="w-12 h-12 rounded-full object-cover border-2 border-white/50" />
            <div className="text-left">
              <div className="font-semibold">Zaidan Arrifqi</div>
              <div className="text-sm opacity-90">28 Agustus 2025 • 5 min read</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto py-12 px-4">
        {/* Problem Section */}
        <div className="mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Masalah yang Kita Hadapi</h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Perubahan kurikulum yang tidak konsisten seringkali membuat mahasiswa bingung dan menyulitkan kampus untuk tetap relevan dengan kebutuhan industri. Ini adalah masalah kita bersama; mahasiswa resah, sementara pihak kampus memerlukan cara yang lebih efektif untuk merancang masa depan akademik.
            </p>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 shadow-xl border border-green-200/50 dark:border-green-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Solusi Inovatif</h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Untuk menjawab tantangan ini, saya mengusulkan <span className="font-bold text-green-700 dark:text-green-400">&ldquo;Kurikulum Canvas Dinamis&rdquo;</span>. Ini adalah platform visual berbasis Gemini tempat dosen dan pimpinan prodi berkolaborasi merancang kurikulum. Dibantu AI yang menganalisis feedback mahasiswa dan tren industri, prosesnya menjadi lebih cepat dan relevan.
            </p>
            
            {/* Visual Feature Cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🤖</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">AI-Powered</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Berbasis Gemini AI</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">👥</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Kolaboratif</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Dosen & Mahasiswa</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Data-Driven</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Analisis Tren Industri</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dampak Positif</h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Canvas ini juga menjadi jembatan bagi mahasiswa untuk memberikan masukan secara langsung. Hasilnya adalah kurikulum yang tidak hanya adaptif, tetapi juga dikembangkan secara kolaboratif. Mari wujudkan era baru transparansi akademik di kampus kita!
            </p>
          </div>
        </div>

        {/* Hashtags */}
        <div className="text-center">
          <div className="inline-flex gap-3">
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-semibold text-sm">
              #TeamGoogle
            </span>
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full font-semibold text-sm">
              #GoogleStudentAmbassador
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
