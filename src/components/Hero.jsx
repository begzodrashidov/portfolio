import { useState, useEffect } from 'react'

const TAGLINE = 'Building interfaces with React, Vite & Tailwind'

export default function Hero() {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTyped(TAGLINE.slice(0, i))
      if (i >= TAGLINE.length) clearInterval(interval)
    }, 35)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      <div className="glow-blob w-[480px] h-[480px] bg-accent-purple/25 -top-40 -left-20" />
      <div className="glow-blob w-[420px] h-[420px] bg-accent-teal/20 bottom-0 right-0" />

      <div className="relative z-10 max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-teal mb-6">
          Hi, I'm
        </p>
        <h1 className="font-display text-5xl sm:text-7xl font-bold text-text-primary mb-4">
          Begzod
        </h1>
        <h2 className="font-display text-xl sm:text-2xl text-accent-purple mb-8">
          Frontend Developer
        </h2>
        <p className="font-mono text-sm sm:text-base text-text-muted h-6 mb-12">
          {typed}
          <span className="border-r-2 border-accent-teal ml-0.5 animate-blink" />
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-7 py-3 rounded-lg bg-accent-purple text-bg-primary font-body font-medium text-sm hover:bg-accent-purple/90 transition-colors duration-200"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-lg border border-borderc text-text-primary font-body font-medium text-sm hover:border-accent-teal hover:text-accent-teal transition-colors duration-200"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  )
}
