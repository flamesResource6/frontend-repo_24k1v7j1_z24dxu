import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded bg-gradient-to-tr from-cyan-400 to-violet-600" />
          <span className="font-bold text-slate-100">Flames Events</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#team" className="hover:text-white">Team</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="/test" className="text-sm px-3 py-1 rounded bg-white/10 text-white hover:bg-white/20">System Test</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-white/10 text-slate-200" aria-label="Toggle Menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-slate-900/80">
          <a href="#services" className="block py-2 text-slate-200" onClick={() => setOpen(false)}>Services</a>
          <a href="#team" className="block py-2 text-slate-200" onClick={() => setOpen(false)}>Team</a>
          <a href="#contact" className="block py-2 text-slate-200" onClick={() => setOpen(false)}>Contact</a>
          <a href="/test" className="block py-2 text-slate-200">System Test</a>
        </div>
      )}
    </header>
  )
}
