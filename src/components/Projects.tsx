import { useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'

const tagStyles: Record<string, string> = {
  green: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-700/40',
  blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-700/40',
  orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-700/40',
  purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-700/40',
  red: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-700/40',
  teal: 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 border-teal-200 dark:border-teal-700/40',
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
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Applied Research</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink dark:text-white mt-2 tracking-tight">
            Research <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-ink-muted dark:text-gray-400 mt-4 max-w-xl mx-auto">
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
              <TiltCard className="relative bg-cream dark:bg-gray-800 rounded-3xl p-6 border border-border dark:border-gray-700/60 hover:border-accent/40 hover:shadow-2xl dark:hover:shadow-accent/5 transition-shadow duration-200 flex flex-col h-full overflow-hidden cursor-default group">
                {/* Accent top border — reveals on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl bg-gradient-to-r from-accent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Header */}
                <div className="flex items-start justify-between mb-4 relative z-20">
                  <span className="text-3xl">{project.icon}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tagStyles[project.tagColor]}`}>
                    {project.tag}
                  </span>
                </div>

                <h3 className="font-bold text-ink dark:text-white text-base mb-1 leading-snug relative z-20 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-ink-subtle dark:text-gray-500 font-medium mb-3 relative z-20">{project.period}</p>

                <p className="text-ink-muted dark:text-gray-400 text-sm leading-relaxed flex-1 mb-4 relative z-20">
                  {project.description}
                </p>

                {project.highlight && (
                  <div className="bg-accent-light dark:bg-accent/10 text-accent text-xs font-semibold px-3 py-1.5 rounded-lg mb-4 border border-accent/20 relative z-20">
                    📍 {project.highlight}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mt-auto relative z-20">
                  {project.tech.map(t => (
                    <span key={t} className="bg-white dark:bg-gray-700/60 text-ink-muted dark:text-gray-400 text-xs px-2.5 py-1 rounded-full border border-border dark:border-gray-600/60 font-medium">
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
