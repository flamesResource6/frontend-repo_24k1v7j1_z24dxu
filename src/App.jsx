import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Team />
        <Contact />
        <footer className="py-10 border-t border-slate-200 text-center text-slate-600">
          © {new Date().getFullYear()} Flames Events • All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
