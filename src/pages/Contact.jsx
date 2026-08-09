import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your store"
          description="Share a bit about what you need — I typically reply within a day."
        />
      </Reveal>

      <Reveal delay={0.1} className="mt-12 grid gap-12 lg:grid-cols-5">
        <form onSubmit={handleSubmit} className="space-y-5 lg:col-span-3">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="input input-bordered w-full rounded-field border-ink/15 bg-paper-2 transition-colors focus:border-teal"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="input input-bordered w-full rounded-field border-ink/15 bg-paper-2 transition-colors focus:border-teal"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="textarea textarea-bordered w-full rounded-field border-ink/15 bg-paper-2 transition-colors focus:border-teal"
              placeholder="Tell me about your store and what you need help with."
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="btn rounded-field border-0 bg-ink text-paper hover:bg-ink-2"
          >
            Send message
          </motion.button>

          <AnimatePresence>
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-sm text-teal"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Opening your email client...
              </motion.p>
            )}
          </AnimatePresence>
        </form>

        <aside className="space-y-4 lg:col-span-2">
          <div className="rounded-box border border-ink/10 bg-paper-2 p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-teal">Direct</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="text-ink/70 hover:text-ink">
                  {profile.email}
                </a>
              </li>
              <li className="text-ink/70">{profile.phone}</li>
              <li className="text-ink/70">{profile.location}</li>
            </ul>
          </div>

          <div className="rounded-box border border-ink/10 bg-paper-2 p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-amber">Elsewhere</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={profile.socials.linkedin} className="text-ink/70 hover:text-ink">LinkedIn</a>
              </li>
            </ul>
          </div>
        </aside>
      </Reveal>
    </section>
  )
}
