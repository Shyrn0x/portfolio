export default function LaporanMagangPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto py-20 px-4 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-4">
              📋 Dokumentasi Akademik
            </span>
          </div>
          <h1 className="text-5xl font-black mb-6 leading-tight">
            Laporan Magang
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Dokumentasi pengalaman magang di bidang telekomunikasi dan teknologi
          </p>
          <div className="flex items-center justify-center gap-4 text-blue-100">
            <img src="/pic.png" alt="Zaidan Arrifqi" className="w-12 h-12 rounded-full object-cover border-2 border-white/50" />
            <div className="text-left">
              <div className="font-semibold">Zaidan Arrifqi</div>
              <div className="text-sm opacity-90">21 Agustus 2025 • Politeknik Negeri Semarang</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto py-12 px-4">
        {/* Latar Belakang */}
        <div className="mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latar Belakang</h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Kegiatan magang bertujuan menjembatani teori dan praktik agar mahasiswa siap menghadapi dunia kerja di bidang telekomunikasi dan teknologi.
            </p>
          </div>
        </div>

        {/* Profil Perusahaan */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 shadow-xl border border-green-200/50 dark:border-green-700/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Profil Perusahaan</h2>
            </div>
            
            <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <img src="/logo-perusahaan.png" alt="Logo Perusahaan" className="h-24 w-24 object-contain rounded-lg bg-white p-2 shadow-md" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">PT Mitra Karsa Utama (MKU)</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-4" />
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">📍</span>
                        <span className="font-semibold text-gray-900 dark:text-white">Lokasi</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Jl. Cempedak Selatan, Lamper Kidul, Kec. Semarang Sel., Kota Semarang
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">💼</span>
                        <span className="font-semibold text-gray-900 dark:text-white">Bidang Usaha</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Outsourcing & Managed Services
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">🎯 Visi Perusahaan</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Menjadi perusahaan terbaik dalam menyediakan layanan <span className="font-medium italic">Managed Services</span> di berbagai bidang di Indonesia.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3">🚀 Misi Perusahaan</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        <div className="flex items-start gap-2">
                          <span className="text-green-600 font-bold text-sm">1.</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Menjadikan kepuasan mitra bisnis sebagai prioritas</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-green-600 font-bold text-sm">2.</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Memberikan nilai tambah untuk mitra bisnis</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-green-600 font-bold text-sm">3.</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Mengelola SDM dengan layanan berkualitas tinggi</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-green-600 font-bold text-sm">4.</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Menggunakan prosedur standar yang inovatif</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tujuan Magang */}
        <div className="mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tujuan Magang</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200/50 dark:border-purple-700/50">
                <div className="text-2xl mb-3">📚</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Penerapan Ilmu</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Menerapkan ilmu dan keterampilan yang diperoleh selama kuliah ke dunia kerja nyata
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/50">
                <div className="text-2xl mb-3">🔧</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pemahaman Industri</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Memahami proses kerja di industri telekomunikasi dan teknologi
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200/50 dark:border-green-700/50">
                <div className="text-2xl mb-3">🤝</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pengembangan Skill</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Meningkatkan kompetensi teknis dan soft skill seperti komunikasi serta kerja tim
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Waktu dan Tempat Magang */}
        <div className="mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Waktu dan Tempat Magang</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border border-orange-200/50 dark:border-orange-700/50">
                <div className="text-2xl mb-3">⏰</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Periode Magang</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  21 Agustus 2025 – 18 Januari 2026
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/50">
                <div className="text-2xl mb-3">🏢</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tempat Magang</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  PT. Mitra Karsa Utama
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200/50 dark:border-green-700/50">
                <div className="text-2xl mb-3">📍</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Alamat Lengkap</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Jl. Cempedak Selatan, Lamper Kidul, Kec. Semarang Selatan, Kota Semarang
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Deskripsi Kegiatan */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 shadow-xl border border-indigo-200/50 dark:border-indigo-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Deskripsi Kegiatan</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 border border-indigo-200/30 dark:border-indigo-700/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📋 Membuat Laporan Inspeksi</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Membuat laporan hasil inspeksi dan rekomendasi (Approved/Rejected)
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 border border-indigo-200/30 dark:border-indigo-700/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🔍 Validasi Material</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Validasi material genset sesuai spesifikasi teknis dan standar OEM
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 border border-indigo-200/30 dark:border-indigo-700/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🤝 Koordinasi Tim</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Koordinasi dengan vendor dan tim QA/QC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">📈 Hasil Pembelajaran</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Pengalaman magang ini memberikan wawasan mendalam tentang industri telekomunikasi dan meningkatkan kemampuan teknis serta profesional saya.
            </p>
            <div className="flex justify-center gap-4">
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="font-bold text-xl">5</div>
                <div className="text-sm opacity-90">Bulan</div>
              </div>
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="font-bold text-xl">3</div>
                <div className="text-sm opacity-90">Kegiatan Utama</div>
              </div>
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="font-bold text-xl">100%</div>
                <div className="text-sm opacity-90">Komitmen</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
