export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 flex flex-col items-center">
  <div className="w-36 h-36 rounded-full overflow-hidden shadow-xl border-4 border-white/40 dark:border-black/40 mb-10 flex items-center justify-center bg-gradient-to-tr from-blue-500 via-blue-700 to-purple-500">
        <img
          src="/pic.png"
          alt="Foto Zaidan Arrifqi"
          className="w-full h-full object-cover scale-125"
          draggable="false"
        />
      </div>
      <h1 className="text-4xl font-black mb-2 text-gray-900 dark:text-white text-center">Tentang Saya</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300 text-lg text-center max-w-2xl">Halo! Saya <span className="font-bold text-blue-700 dark:text-blue-400">Zaidan Arrifqi</span>, mahasiswa Politeknik Negeri Semarang, Program Studi D3-Teknik Telekomunikasi. Saya memiliki minat di bidang teknologi, jaringan, dan pengembangan perangkat software. Berpengalaman dalam proyek mikrokontroler, aplikasi web, serta sistem otomatisasi. Terbiasa bekerja tim dan terus mengasah kemampuan teknis maupun komunikasi.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="bg-white/80 dark:bg-black/60 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-800 flex flex-col gap-3">
          <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">Biodata</h2>
          <ul className="text-gray-600 dark:text-gray-300 text-base space-y-2">
            <li><span className="font-semibold">Nama:</span> Zaidan Arrifqi</li>
            <li><span className="font-semibold">Asal:</span> Semarang, Indonesia</li>   
            <li><span className="font-semibold">Prodi:</span> D3-Teknik Telekomunikasi</li>
            <li><span className="font-semibold">Email:</span> <a href="mailto:zaidanarrifqi@email.com" className="text-blue-600 dark:text-blue-400 hover:underline">zaidanarrifqi@gmail.com</a></li>
            <li><span className="font-semibold">Linkedin:</span> <a href="linkedin.com/in/zaidan-arrifqi" className="text-blue-600 dark:text-blue-400 hover:underline">zaidan-arrifqi</a></li>
            <li><span className="font-semibold">GitHub:</span> <a href="github.com/Shyrn0x" className="text-blue-600 dark:text-blue-400 hover:underline">Shyrn0x</a></li>
          </ul>
        </div>
        <div className="bg-white/80 dark:bg-black/60 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-800 flex flex-col gap-3">
          <h2 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2">Minat & Keterampilan</h2>
          <ul className="text-gray-600 dark:text-gray-300 text-base space-y-2">
            <li>IoT & Sistem Otomatisasi</li>
            <li>Telekomunikasi & Jaringan</li>
            <li>Pengembangan Web (Next.js, React, Tailwind, Bootstrap 5)</li>
            <li>Pemrograman (Python, C++, PHP, JavaScript)</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-4 mt-8">
        <a href="mailto:zaidanarrifqi@email.com" title="Email" className="text-gray-500 hover:text-blue-600 transition text-2xl">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="align-middle"><path d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17.5v-11z" stroke="currentColor" strokeWidth="1.5"/><path d="M3 7l8.293 6.293a1 1 0 001.414 0L21 7" stroke="currentColor" strokeWidth="1.5"/></svg>
        </a>
        <a href="https://github.com/shyrn0x" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-500 hover:text-black transition text-2xl">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="align-middle"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" fill="currentColor"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/zaidan-arrifqi" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-500 hover:text-blue-700 transition text-2xl">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="align-middle"><path d="M16.5 8A6.5 6.5 0 0123 14.5v4.25A2.25 2.25 0 0120.75 21H3.25A2.25 2.25 0 011 18.75V14.5A6.5 6.5 0 017.5 8h9z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>
        </a>
      </div>
    </section>
  );
}
