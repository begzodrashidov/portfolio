import useReveal from '../hooks/useReveal'

const GROUPS = [
  { title: 'Frontend', color: 'text-accent-purple', items: ['React', 'JavaScript', 'HTML / CSS'] },
  { title: 'Styling', color: 'text-accent-teal', items: ['Tailwind CSS', 'SCSS'] },
  { title: 'Tools', color: 'text-accent-purple', items: ['Git', 'Figma', 'Vite'] },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto">
      <div ref={ref} className="fade-section">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-teal mb-4 text-center">
          Skills
        </p>
        <h3 className="font-display text-3xl text-text-primary mb-14 text-center">
          What I work with
        </h3>

        <div className="grid sm:grid-cols-3 gap-6">
          {GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-borderc bg-bg-surface p-6 hover:-translate-y-1 hover:border-accent-teal/40 transition-all duration-300"
            >
              <h4 className={`font-display text-sm mb-5 ${group.color}`}>{group.title}</h4>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="font-mono text-sm text-text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
