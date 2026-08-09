import { NavLink } from 'react-router-dom'
import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <span className="font-display text-lg font-semibold">{profile.name}</span>
            <p className="mt-2 text-sm text-paper/60">{profile.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-teal-light">Site</p>
              <ul className="mt-3 space-y-2 text-sm text-paper/70">
                <li><NavLink to="/about" className="hover:text-paper">About</NavLink></li>
                <li><NavLink to="/projects" className="hover:text-paper">Projects</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-paper">Contact</NavLink></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-teal-light">Connect</p>
              <ul className="mt-3 space-y-2 text-sm text-paper/70">
                <li><a href={`mailto:${profile.email}`} className="hover:text-paper">Email</a></li>
                <li><a href={profile.socials.linkedin} className="hover:text-paper">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-paper/10 pt-6 text-xs text-paper/40 md:flex-row md:items-center">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-2 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            {profile.availability}
          </p>
        </div>
      </div>
    </footer>
  )
}
