export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-black mb-4 text-blue-700 dark:text-blue-400">Project</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-300 text-lg max-w-2xl">Beberapa hasil karya dan eksperimen saya di dunia teknologi, mulai dari web development hingga project IoT.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contoh Project Card Modern */}
        <div className="rounded-3xl bg-white/70 dark:bg-black/60 border border-gray-200 dark:border-gray-800 shadow-2xl p-0 flex flex-col hover:scale-[1.025] hover:shadow-2xl transition-all duration-200 backdrop-blur-md overflow-hidden">
          <img src="/cover.png" alt="Project Feeder" className="w-full h-40 object-cover bg-gray-200 dark:bg-gray-800" />
          <div className="p-7 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold">JavaScript</span>
              <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold">PHP</span>
              <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold">MQTT</span>
              <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold">ESP32</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Smart Feeder Ikan</h2>
            <p className="text-gray-600 dark:text-gray-300">Sistem IoT untuk pemberian makan ikan secara otomatis dan terjadwal. Dapat dikontrol melalui web dashboard dengan fitur atur jadwal, kontrol manual, dan monitoring status feeder.</p>
            <div className="flex gap-2 mt-2">
              <a href="/projects/detail" className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition-all text-sm">Lihat detail</a>
          <a href="https://github.com/Shyrn0x/Feeder_IoT" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 rounded-lg border border-blue-400 text-blue-700 dark:text-blue-300 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900 transition-all text-sm">GitHub</a>
            </div>
          </div>
        </div>
        {/* Tambahkan project lain di sini */}
      </div>   
    </section>
  );
}
