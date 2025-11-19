import { useEffect, useState } from 'react'

export default function Team() {
  const [team, setTeam] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/team`)
        const data = await res.json()
        setTeam(data)
      } catch (e) {
        setTeam([
          { id: '1', name: 'Aisha Khan', role: 'Head of Events', team: 'Events' },
          { id: '2', name: 'Rohit Verma', role: 'Media Director', team: 'Media' },
          { id: '3', name: 'Sara Lee', role: 'Outreach Lead', team: 'Outreach' },
          { id: '4', name: 'David Chen', role: 'Operations Manager', team: 'Operations' },
        ])
      }
    }
    load()
  }, [])

  return (
    <section id="team" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Meet the Team</h2>
        <p className="text-slate-300 mt-2 mb-8">Specialists across media, event management, and outreach</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.id || m._id} className="border border-slate-800 rounded-xl p-5 bg-slate-900/60">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 to-violet-600 mb-4" />
              <p className="font-semibold text-white">{m.name}</p>
              <p className="text-sm text-slate-300">{m.role}</p>
              <span className="inline-block mt-2 text-xs px-2 py-1 bg-slate-800 text-slate-200 rounded">{m.team}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
