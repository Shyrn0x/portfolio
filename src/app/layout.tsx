import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col w-full`}>
        {/* Navbar Global */}
        <header className="w-full bg-transparent">
          <div className="max-w-5xl mx-auto flex justify-center sm:justify-end px-4 sm:px-6 py-4">
            <div className="flex flex-row items-center gap-5">
              <a href="mailto:zaidanarrifqi@email.com" title="Email" className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-blue-600 transition">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="align-middle"><path d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17.5v-11z" stroke="currentColor" strokeWidth="1.5"/><path d="M3 7l8.293 6.293a1 1 0 001.414 0L21 7" stroke="currentColor" strokeWidth="1.5"/></svg>
              </a>
              <a href="https://github.com/shyrn0x" target="_blank" rel="noopener noreferrer" title="GitHub" className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-black transition">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="align-middle"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" fill="currentColor"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/zaidan-arrifqi" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-blue-700 transition">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="align-middle"><path d="M16.5 8A6.5 6.5 0 0123 14.5v4.25A2.25 2.25 0 0120.75 21H3.25A2.25 2.25 0 011 18.75V14.5A6.5 6.5 0 017.5 8h9z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>
              </a>
            </div>
          </div>
        </header>
  <main className="flex-1 flex flex-col w-full max-w-5xl mx-auto px-2 sm:px-6 md:px-8">{children}</main>
  <footer className="w-full py-6 text-gray-400 text-xs text-center bg-transparent">&copy; {new Date().getFullYear()} Zaidan Arrifqi. All rights reserved.</footer>
      </body>
    </html>
  );
}
