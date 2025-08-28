'use client';

export default function ProjectDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto py-20 px-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src="/icon-feeder.png" alt="Smart Feeder Icon" className="w-16 h-16 object-contain rounded-2xl bg-white/20 p-3 backdrop-blur-sm" />
            <div className="text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-2">
                🐠 IoT Project
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl font-black mb-6 leading-tight text-center">
            Smart Feeder Ikan
          </h1>
          
          <div className="flex justify-center gap-3 mb-6">
            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold">JavaScript</span>
            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold">PHP</span>
            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold">MQTT</span>
            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold">ESP32</span>
          </div>
          
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Sistem IoT berbasis ESP32 untuk pemberian makan ikan secara otomatis dengan kontrol web dashboard dan monitoring real-time
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            <a href="https://github.com/Shyrn0x/Feeder_IoT" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg">
              💻 View Code
            </a>
            <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all">
              📋 Live Demo
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        {/* Project Gallery */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">📸 Project Gallery</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Dokumentasi visual dari implementasi Smart Feeder Ikan
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <img src="/feeder-aquarium.jpg" alt="Smart Feeder Setup" className="w-full h-64 object-cover rounded-xl mb-4 shadow-lg" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">🏠 Setup Aquarium</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Instalasi Smart Feeder pada aquarium dengan sistem kontainer pakan otomatis
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl mb-4 flex items-center justify-center shadow-lg">
                <div className="text-white text-6xl">📱</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">💻 Web Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Interface web responsif untuk kontrol dan monitoring sistem feeder
              </p>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-16">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Deskripsi Project</h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Smart Feeder Ikan adalah sistem IoT berbasis ESP32 yang dirancang untuk memberi makan ikan secara otomatis dan dapat dikendalikan melalui web dashboard. Proyek ini memungkinkan pengguna mengatur jadwal pemberian pakan, memantau status perangkat, dan menjalankan kontrol manual secara real-time melalui komunikasi MQTT.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">✨ Fitur Utama</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Berbagai fitur canggih yang memudahkan perawatan ikan
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Jadwal Otomatis</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Pengaturan jadwal pemberian pakan otomatis untuk pagi dan sore hari
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200/50 dark:border-green-700/50">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Kontrol Manual</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Kontrol pemberian pakan secara manual melalui web dashboard
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-700/50">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Real-time Monitoring</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Monitoring status perangkat secara real-time dengan update otomatis
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6 border border-orange-200/50 dark:border-orange-700/50">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">MQTT Protocol</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Komunikasi real-time menggunakan protokol MQTT untuk update cepat
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-teal-200/50 dark:border-teal-700/50">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Responsive Design</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Tampilan responsif yang optimal untuk desktop dan mobile device
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-indigo-200/50 dark:border-indigo-700/50">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Easy Setup</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Instalasi mudah dengan konfigurasi ESP32 dan komponen minimal
              </p>
            </div>
          </div>
        </div>

        {/* Video Demo Section */}
        <div className="mb-16">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎥</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Demo Video</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Lihat demonstrasi Smart Feeder Ikan dalam aksi
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video 
                controls
                preload="metadata"
                className="w-full max-h-96 object-cover" 
                poster="/feeder-aquarium.jpg"
                key="demo-video"
              >
                <source src="/feeder-test.mp4" type="video/mp4" />
                <p>Browser Anda tidak mendukung video.</p>
              </video>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800/80 dark:to-blue-900/20 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Spesifikasi Teknis</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🔧 Hardware</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">ESP32 Development Board</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Servo Motor SG90</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Wadah Pakan Otomatis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Power Supply 5V</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">💻 Software</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Arduino IDE/PlatformIO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">PHP Backend</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">JavaScript Frontend</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">MQTT Broker</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🚀 Tertarik dengan Project Ini?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Lihat kode lengkap di GitHub atau hubungi saya untuk diskusi lebih lanjut tentang implementasi IoT
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/Shyrn0x/Feeder_IoT" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                💻 View on GitHub
              </a>
              <a href="/projects" className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all">
                📂 More Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
