import { useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'

const tagStyles: Record<string, string> = {
  green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  orange: 'bg-orange-50 text-orange-700 border-orange-200',
  purple: 'bg-purple-50 text-purple-700 border-purple-200',
  red: 'bg-red-50 text-red-700 border-red-200',
  teal: 'bg-teal-50 text-teal-700 border-teal-200',
}

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    background: 'transparent',
  })

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    const rx = -dy * 8
    const ry = dx * 8
    const mx = ((e.clientX - rect.left) / rect.width) * 100
    const my = ((e.clientY - rect.top) / rect.height) * 100
    setStyle({
      transform: `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`,
      background: `radial-gradient(circle at ${mx}% ${my}%, rgba(37,99,235,0.07) 0%, transparent 65%)`,
    })
  }

  const onMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      background: 'transparent',
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transform: style.transform, transition: 'transform 0.15s ease, box-shadow 0.15s ease' }}
      className={className}
    >
      {/* Spotlight overlay */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none z-10 transition-all duration-150"
        style={{ background: style.background }}
      />
      {children}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Applied Research</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink mt-2 tracking-tight">
            Research <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-ink-muted mt-4 max-w-xl mx-auto">
            End-to-end research systems — from experimental design through publication, across healthcare AI, neuroimaging, and data-driven policy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
              style={{ willChange: 'transform' }}
            >
              <TiltCard className="relative bg-cream rounded-3xl p-6 border border-border hover:border-accent/30 hover:shadow-2xl transition-shadow duration-200 flex flex-col h-full overflow-hidden cursor-default">
                {/* Colored top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl bg-gradient-to-r from-accent/60 via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Header */}
                <div className="flex items-start justify-between mb-4 relative z-20">
                  <span className="text-3xl">{project.icon}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tagStyles[project.tagColor]}`}>
                    {project.tag}
                  </span>
                </div>

                <h3 className="font-bold text-ink text-base mb-1 leading-snug relative z-20 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-ink-subtle font-medium mb-3 relative z-20">{project.period}</p>

                <p className="text-ink-muted text-sm leading-relaxed flex-1 mb-4 relative z-20">
                  {project.description}
                </p>

                {project.highlight && (
                  <div className="bg-accent-light text-accent text-xs font-semibold px-3 py-1.5 rounded-lg mb-4 border border-accent/20 relative z-20">
                    📍 {project.highlight}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mt-auto relative z-20">
                  {project.tech.map(t => (
                    <span key={t} className="bg-white text-ink-muted text-xs px-2.5 py-1 rounded-full border border-border font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
