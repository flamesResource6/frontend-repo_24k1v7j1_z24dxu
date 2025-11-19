import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Team />
        <Contact />
        <footer className="py-10 border-t border-slate-800 text-center text-slate-400">
          © {new Date().getFullYear()} Flames Events • All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
