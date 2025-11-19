export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">Full-service Event Organizers</h1>
          <p className="mt-4 text-lg text-slate-300">From concept to curtain call, our media, event, and outreach teams deliver unforgettable experiences for weddings, corporate summits, concerts, launches, and everything in between.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white text-slate-900 hover:bg-slate-200">Get a Quote</a>
            <a href="#services" className="px-5 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-100">Explore Services</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-emerald-400" /> End-to-end planning</div>
            <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-emerald-400" /> In-house media</div>
            <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-emerald-400" /> Nationwide outreach</div>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop" alt="Event" className="rounded-xl shadow-2xl" />
          <div className="absolute -bottom-6 -left-6 bg-slate-900/80 backdrop-blur rounded-xl shadow p-4 w-56 border border-slate-700">
            <p className="font-semibold text-white">On-site coordination</p>
            <p className="text-sm text-slate-300">Experienced managers handling every detail</p>
          </div>
        </div>
      </div>
    </section>
  )
}
