import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      setStatus({ ok: true, id: data.id })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ ok: false })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get a Quote</h2>
          <p className="text-slate-300 mt-2">Tell us about your event and our team will get back within 24 hours.</p>
          <ul className="mt-6 space-y-2 text-slate-300">
            <li>• Custom packages for weddings, corporate, concerts, and more</li>
            <li>• In-house media production for photo, video, and live stream</li>
            <li>• Outreach, sponsors, and guest experience under one roof</li>
          </ul>
        </div>
        <form onSubmit={submit} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input name="name" required className="mt-1 w-full bg-slate-900 border border-slate-700 text-slate-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input name="email" type="email" required className="mt-1 w-full bg-slate-900 border border-slate-700 text-slate-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Phone</label>
              <input name="phone" className="mt-1 w-full bg-slate-900 border border-slate-700 text-slate-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Service</label>
              <input name="service" placeholder="e.g., Wedding, Corporate" className="mt-1 w-full bg-slate-900 border border-slate-700 text-slate-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Event Date</label>
              <input name="event_date" placeholder="YYYY-MM-DD" className="mt-1 w-full bg-slate-900 border border-slate-700 text-slate-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Budget Range</label>
              <input name="budget_range" placeholder="$2k - $5k" className="mt-1 w-full bg-slate-900 border border-slate-700 text-slate-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-300">Message</label>
              <textarea name="message" rows="4" className="mt-1 w-full bg-slate-900 border border-slate-700 text-slate-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600" />
            </div>
          </div>
          <button disabled={loading} className="mt-4 w-full bg-white text-slate-900 rounded px-4 py-2 hover:bg-slate-200 disabled:opacity-60">
            {loading ? 'Sending...' : 'Send Inquiry'}
          </button>
          {status && (
            <p className={`mt-3 text-sm ${status.ok ? 'text-emerald-400' : 'text-red-400'}`}>
              {status.ok ? 'Thanks! We received your request.' : 'Something went wrong. Please try again.'}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
