import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-primary/90 backdrop-blur-md border-b border-borderc' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display text-sm text-text-primary tracking-wide">
          begzod<span className="text-accent-purple">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs text-text-muted">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-accent-teal transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 font-mono text-sm text-text-muted bg-bg-primary/95 backdrop-blur-md">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="hover:text-accent-teal">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
