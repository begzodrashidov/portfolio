import useReveal from '../hooks/useReveal'

const PROJECTS = [
  {
    title: 'APIForge',
    description: 'An API testing tool built for trying out endpoints quickly during development.',
    tags: ['React', 'Vite', 'Tailwind', 'SCSS'],
    demo: 'https://apiforge.vercel.app/',
    github: 'https://github.com/begzodrashidov/apiforge',
  },
  {
    title: 'Meridian Estates',
    description: 'A real estate landing page with a clean, component-based structure.',
    tags: ['React', 'Vite', 'Tailwind'],
    demo: 'https://realestate-landing-ruby.vercel.app/',
    github: 'https://github.com/begzodrashidov/realestate-landing',
  },
  {
    title: 'Tut Kafe',
    description: 'A café concept landing page built from a Figma reference design.',
    tags: ['React', 'Vite', 'Tailwind'],
    demo: 'https://cafe-landing-xi.vercel.app/',
    github: 'https://github.com/begzodrashidov/cafe-landing',
  },
]

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <div ref={ref} className="fade-section">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-purple mb-4 text-center">
          Projects
        </p>
        <h3 className="font-display text-3xl text-text-primary mb-14 text-center">
          Things I've built
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl border border-borderc bg-bg-surface overflow-hidden hover:-translate-y-1.5 hover:border-accent-purple/50 transition-all duration-300"
            >
              <div className="h-40 bg-gradient-to-br from-accent-purple/20 to-accent-teal/20 flex items-center justify-center">
                <span className="font-display text-lg text-text-muted">{p.title}</span>
              </div>

              <div className="p-6">
                <h4 className="font-display text-base text-text-primary mb-2">{p.title}</h4>
                <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2 py-1 rounded-md bg-bg-primary border border-borderc text-accent-teal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 font-mono text-xs">
                  <a href={p.demo} className="text-accent-purple hover:underline">
                    Live demo →
                  </a>
                  <a href={p.github} className="text-text-muted hover:text-text-primary">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
