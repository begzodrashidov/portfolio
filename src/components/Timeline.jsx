import useReveal from '../hooks/useReveal'

const STEPS = [
  {
    date: '2025',
    title: 'Started learning React at I-Modul',
    description: 'Began structured frontend coursework — JavaScript fundamentals, React basics, and component-driven thinking.',
  },
  {
    date: '2025 — 2026',
    title: 'Built real-world practice projects',
    description: 'CRUD apps with API integration, custom hooks, Redux Toolkit, and form validation with React Hook Form + Zod.',
  },
  {
    date: '2026',
    title: 'Focused on portfolio building',
    description: 'Designed and shipped landing pages (Meridian Estates, Tut Kafe) and started building APIForge.',
  },
]

export default function Timeline() {
  const ref = useReveal()

  return (
    <section id="journey" className="py-28 px-6 max-w-4xl mx-auto">
      <div ref={ref} className="fade-section">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-teal mb-4 text-center">
          Journey
        </p>
        <h3 className="font-display text-3xl text-text-primary mb-14 text-center">
          Learning journey
        </h3>

        <div className="relative pl-8 border-l border-borderc space-y-12">
          {STEPS.map((step) => (
            <div key={step.title} className="relative">
              <span className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-accent-purple border-2 border-bg-primary" />
              <p className="font-mono text-xs text-accent-teal mb-2">{step.date}</p>
              <h4 className="font-display text-base text-text-primary mb-2">{step.title}</h4>
              <p className="font-body text-sm text-text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
