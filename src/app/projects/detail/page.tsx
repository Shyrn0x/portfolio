export default function ProjectDetailPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-black mb-4 text-blue-700 dark:text-blue-400">Smart Feeder Ikan</h1>
      <div className="flex items-center gap-3 mb-6">
  <img src="/icon-feeder.png" alt="Project" className="w-12 h-12 object-contain rounded-xl" />
        <div>
          <span className="font-semibold text-gray-800 dark:text-gray-100">JavaScript, PHP, MQTT</span>
          <span className="block text-xs text-gray-400">2025</span>
        </div>
      </div>
      <article className="prose dark:prose-invert max-w-none text-lg">
        <div className="w-full flex justify-center mb-8">
          <img src="/feeder-aquarium.jpg" alt="Foto Project" className="rounded-2xl shadow-lg max-h-72 object-cover" />
        </div>
        <h2 className="font-bold text-blue-700 dark:text-blue-400 text-2xl tracking-wide mb-2 mt-8">Deskripsi Project</h2>
        <p>Smart Feeder Ikan adalah sistem IoT berbasis ESP32 yang dirancang untuk memberi makan ikan secara otomatis dan dapat dikendalikan melalui web dashboard. Proyek ini memungkinkan pengguna mengatur jadwal pemberian pakan, memantau status perangkat, dan menjalankan kontrol manual secara real-time melalui komunikasi MQTT.</p>
        <h2 className="font-bold text-blue-700 dark:text-blue-400 text-2xl tracking-wide mb-2 mt-8">Fitur Utama</h2>
        <ul>
          <li>Pengaturan Jadwal Otomatis (pagi & sore)</li>
          <li>Kontrol Manual Melalui Web Dashboard</li>
          <li>Monitoring Status Perangkat Secara Real-Time</li>
          <li>Real-time Update menggunakan protokol MQTT</li>
          <li>Tampilan Responsif untuk desktop dan mobile</li>
        </ul>

        {/* Video Project */}
        <div className="w-full flex justify-center my-8">
          <video controls className="rounded-2xl shadow-lg w-full max-w-2xl bg-black" poster="/feeder-aquarium.jpg">
            <source src="/feeder-test.mp4" type="video/mp4" />
            Browser Anda tidak mendukung video.
          </video>
        </div>
      </article>
    </section>
  );
}
