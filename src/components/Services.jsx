import { useEffect, useState } from 'react'

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/services`)
        const data = await res.json()
        setServices(data)
      } catch (e) {
        setServices([
          { id: '1', title: 'Wedding Planning', description: 'End-to-end planning, decor, and coordination', category: 'Events'},
          { id: '2', title: 'Corporate Events', description: 'Conferences, offsites, award nights, and summits', category: 'Events'},
          { id: '3', title: 'Media Production', description: 'Photo, video, live streaming, aftermovies', category: 'Media'},
          { id: '4', title: 'Outreach & Marketing', description: 'Influencers, sponsorships, and community programs', category: 'Outreach'},
        ])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="services" className="py-16 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Services</h2>
            <p className="text-slate-300 mt-2">Everything you need to bring your event to life</p>
          </div>
        </div>
        {loading ? (
          <p className="text-slate-400">Loading services...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.id || s._id} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:shadow-lg hover:shadow-slate-900/40 transition-shadow">
                <div className="w-10 h-10 rounded bg-gradient-to-tr from-cyan-400 to-violet-600 mb-4" />
                <h3 className="font-semibold text-white">{s.title}</h3>
                <p className="text-sm text-slate-300 mt-1">{s.description}</p>
                <span className="inline-block mt-3 text-xs px-2 py-1 bg-slate-800 text-slate-200 rounded">{s.category}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
