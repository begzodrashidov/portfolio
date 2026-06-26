import useReveal from '../hooks/useReveal'

const STACK = ['React', 'Vite', 'Tailwind', 'SCSS', 'JavaScript', 'Git', 'Figma']

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <div ref={ref} className="fade-section grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-teal mb-4">
            About
          </p>
          <h3 className="font-display text-3xl text-text-primary mb-6">
            A bit about me
          </h3>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            I'm a frontend developer based in Tashkent, currently studying at I-Modul.
            I focus on building clean, component-based interfaces with React and
            Tailwind CSS, paying close attention to detail, responsiveness, and
            real-world usability.
          </p>
          <p className="font-body text-text-muted leading-relaxed">
            Outside of code, I run a creative editing account and I'm always
            experimenting with new layouts, animations, and small interactive
            details that make an interface feel alive.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-purple mb-4">
            Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {STACK.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-lg border border-borderc bg-bg-surface font-mono text-xs text-text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
