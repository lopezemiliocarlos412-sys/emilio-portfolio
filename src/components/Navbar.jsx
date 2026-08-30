import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../data/profile'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors ${isActive ? 'text-amber' : 'text-ink/70 hover:text-ink'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink font-mono text-sm font-semibold text-paper">
            {profile.shortName.charAt(0)}
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">{profile.shortName}</span>
        </NavLink>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <a href={profile.resumeUrl} download className="btn btn-sm hidden bg-ink text-paper hover:bg-ink-2 lg:inline-flex">
          Resume
        </a>

        <button
          type="button"
          className="btn btn-square btn-ghost lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="overflow-hidden border-t border-ink/10 bg-paper lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-ink text-paper' : 'text-ink/80 hover:bg-ink/5'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <a href={profile.resumeUrl} download className="btn btn-sm mt-2 bg-ink text-paper hover:bg-ink-2">
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
