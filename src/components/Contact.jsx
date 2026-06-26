import useReveal from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="py-28 px-6 max-w-3xl mx-auto text-center">
      <div ref={ref} className="fade-section">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-purple mb-4">
          Contact
        </p>
        <h3 className="font-display text-3xl sm:text-4xl text-text-primary mb-6">
          Let's talk about your project
        </h3>
        <p className="font-body text-text-muted mb-10">
          Open to freelance work, collaborations, and interesting frontend problems.
        </p>

        <a
          href="mailto:your.email@example.com"
          className="inline-block px-8 py-3 rounded-lg bg-accent-purple text-bg-primary font-body font-medium text-sm hover:bg-accent-purple/90 transition-colors duration-200 mb-10"
        >
          your.email@example.com
        </a>

        <div className="flex items-center justify-center gap-8 font-mono text-xs text-text-muted">
          <a href="https://github.com/begzodrashidov" className="hover:text-accent-teal transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-accent-teal transition-colors">
            LinkedIn
          </a>
          <a href="https://instagram.com/yourusername" className="hover:text-accent-teal transition-colors">
            Instagram
          </a>
        </div>
      </div>

      <footer className="mt-20 font-mono text-[11px] text-text-muted/60">
        © {new Date().getFullYear()} Begzod. Built with React & Tailwind.
      </footer>
    </section>
  )
}
