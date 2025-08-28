'use client';

import { useState, useEffect } from 'react';

export default function BluetoothLightPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto py-20 px-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
              <span className="text-3xl">💡</span>
            </div>
            <div className="text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-2">
                📱 IoT & Mobile Project
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl font-black mb-6 leading-tight text-center">
            Pengendali Lampu Bluetooth
          </h1>
          
          <div className="flex justify-center gap-3 mb-6">
            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold">Arduino</span>
            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold">Bluetooth</span>
            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold">Android</span>
            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold">IoT</span>
          </div>
          
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Sistem pengendali lampu menggunakan smartphone via Bluetooth dengan Arduino untuk kontrol wireless yang mudah dan efisien
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        {/* Project Description */}
        <div className="mb-16">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Deskripsi Project</h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Pengendali Lampu Menggunakan Smartphone via Bluetooth adalah sistem otomasi rumah yang memungkinkan pengguna mengontrol lampu menggunakan smartphone Android. Sistem ini mengintegrasikan Arduino Uno sebagai mikrokontroler, modul Bluetooth HC-05 untuk komunikasi nirkabel, dan relay untuk switching lampu 220V.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">🎯 Tujuan Project</h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Membuat sistem kontrol lampu berbasis smartphone</li>
                  <li>• Implementasi komunikasi Bluetooth untuk IoT</li>
                  <li>• Pengembangan aplikasi Android user-friendly</li>
                  <li>• Solusi smart home yang cost-effective</li>
                </ul>
              </div>
              
              <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">⚙️ Metodologi</h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Perancangan rangkaian Arduino dan relay</li>
                  <li>• Programming mikrokontroler dengan C++</li>
                  <li>• Pengembangan aplikasi Android dengan Java</li>
                  <li>• Testing dan kalibrasi sistem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">✨ Fitur Utama</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Berbagai fitur yang memudahkan kontrol pencahayaan rumah
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Kontrol Smartphone</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Mengontrol lampu menggunakan aplikasi Android yang mudah digunakan
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-cyan-200/50 dark:border-cyan-700/50">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Koneksi Bluetooth</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Komunikasi wireless yang stabil menggunakan modul Bluetooth HC-05
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Multiple Light Control</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Dapat mengontrol beberapa lampu secara terpisah atau bersamaan
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-cyan-200/50 dark:border-cyan-700/50">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">User-Friendly Interface</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Interface aplikasi yang sederhana dan mudah dipahami
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Easy Setup</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Instalasi sederhana dengan komponen yang mudah didapat
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-cyan-200/50 dark:border-cyan-700/50">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cost Effective</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Solusi smart home yang terjangkau dengan komponen murah
              </p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-800/80 dark:to-cyan-900/20 rounded-2xl p-8 shadow-xl border border-blue-200/50 dark:border-blue-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-700 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Spesifikasi Teknis</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🔧 Komponen Hardware</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <div>
                      <span className="text-gray-900 dark:text-white font-medium">Arduino Uno R3</span>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Mikrokontroler utama sistem</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>
                    <div>
                      <span className="text-gray-900 dark:text-white font-medium">Modul Bluetooth HC-05</span>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Komunikasi nirkabel dengan smartphone</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <div>
                      <span className="text-gray-900 dark:text-white font-medium">Relay Module 4 Channel</span>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Switching untuk lampu 220V</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>
                    <div>
                      <span className="text-gray-900 dark:text-white font-medium">Lampu LED 220V</span>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Output yang dikontrol</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <div>
                      <span className="text-gray-900 dark:text-white font-medium">Power Supply 12V/5V</span>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Catu daya sistem</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">💻 Software & Tools</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>
                    <div>
                      <span className="text-gray-900 dark:text-white font-medium">Arduino IDE 2.x</span>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Programming mikrokontroler</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <div>
                      <span className="text-gray-900 dark:text-white font-medium">Android Studio</span>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Development aplikasi mobile</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>
                    <div>
                      <span className="text-gray-900 dark:text-white font-medium">Java</span>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Bahasa pemrograman Android</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <div>
                      <span className="text-gray-900 dark:text-white font-medium">C++</span>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Arduino programming language</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>
                    <div>
                      <span className="text-gray-900 dark:text-white font-medium">SoftwareSerial Library</span>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Komunikasi serial Bluetooth</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation & Results */}
        <div className="mb-16">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Implementasi & Hasil</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <div className="text-3xl mb-3">🔌</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Hardware Assembly</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Rangkaian berhasil dirakit dengan koneksi yang stabil antara Arduino, Bluetooth, dan relay
                </p>
              </div>
              
              <div className="text-center p-6 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Mobile App</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Aplikasi Android dengan interface sederhana untuk kontrol ON/OFF lampu
                </p>
              </div>
              
              <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <div className="text-3xl mb-3">📡</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Bluetooth Connection</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Koneksi Bluetooth stabil dengan jangkauan hingga 10 meter
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">🏆 Hasil Testing</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
                <li>✅ Respon time &lt; 1 detik untuk kontrol lampu</li>
                <li>✅ Jangkauan Bluetooth hingga 10 meter</li>
                <li>✅ Aplikasi Android berjalan smooth di semua device</li>
                <li>✅ Sistem relay bekerja dengan baik untuk lampu 220V</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">📸 Project Gallery</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Dokumentasi visual dari implementasi sistem pengendali lampu Bluetooth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <img src="/lampu-on.png" alt="Lampu Menyala" className="w-full h-64 object-cover rounded-xl mb-4 shadow-lg" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">💡 Lampu Menyala</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Hasil implementasi ketika lampu berhasil dinyalakan melalui kontrol Bluetooth smartphone
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <img src="/lampu-off.png" alt="Lampu Mati" className="w-full h-64 object-cover rounded-xl mb-4 shadow-lg" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">🔌 Lampu Mati</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Kondisi lampu dalam keadaan mati, siap untuk dikontrol via aplikasi smartphone
              </p>
            </div>
          </div>
        </div>

        {/* Demo Video Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">🎥 Demo Video</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Video demonstrasi sistem pengendali lampu Bluetooth dalam aksi
            </p>
          </div>
          
          {/* Video Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">🎥 Demo Hasil Testing</h3>
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-black">
                {isClient ? (
                  <video 
                    className="w-full h-48 object-cover rounded-xl"
                    controls
                    preload="metadata"
                  >
                    <source src="/hasil-lampu.mp4" type="video/mp4" />
                    Browser Anda tidak mendukung video HTML5.
                  </video>
                ) : (
                  <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl mb-1">🎥</div>
                      <p>Loading video...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">🔧 Proses Perancangan</h3>
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-black">
                {isClient ? (
                  <video 
                    className="w-full h-48 object-cover rounded-xl"
                    controls
                    preload="metadata"
                  >
                    <source src="/rancang-lampu.mp4" type="video/mp4" />
                    Browser Anda tidak mendukung video HTML5.
                  </video>
                ) : (
                  <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl mb-1">🎥</div>
                      <p>Loading video...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🚀 Tertarik dengan Project Ini?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Jelajahi lebih banyak project saya lainnya!
            </p>
            <div className="flex justify-center">
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
