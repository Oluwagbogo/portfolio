import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data'
import { useInView } from '../hooks/useInView'

const categoryColors: Record<string, string> = {
  'Research Methods': 'accent',
  'AI & Machine Learning': 'purple',
  'Data Analysis & Visualization': 'teal',
  'Research Infrastructure': 'orange',
}

const barColors: Record<string, string> = {
  accent: 'bg-gradient-to-r from-accent to-blue-400',
  purple: 'bg-gradient-to-r from-purple-600 to-purple-400',
  teal: 'bg-gradient-to-r from-teal-600 to-teal-400',
  orange: 'bg-gradient-to-r from-orange-500 to-amber-400',
}

const dotColors: Record<string, string> = {
  accent: 'bg-accent',
  purple: 'bg-purple-600',
  teal: 'bg-teal-600',
  orange: 'bg-orange-500',
}

const techBadges = [
  { name: 'Python', emoji: '🐍' },
  { name: 'PyTorch', emoji: '🔥' },
  { name: 'TensorFlow', emoji: '⚡' },
  { name: 'Scikit-learn', emoji: '🤖' },
  { name: 'OpenCV', emoji: '👁️' },
  { name: 'Transformers', emoji: '🧠' },
  { name: 'SQL', emoji: '🗄️' },
  { name: 'NumPy / Pandas', emoji: '📐' },
  { name: 'Power BI', emoji: '📊' },
  { name: 'Tableau', emoji: '📈' },
  { name: 'Matplotlib', emoji: '📉' },
  { name: 'Git / GitHub', emoji: '🌿' },
  { name: 'Linux / HPC', emoji: '🖥️' },
  { name: 'IEEE Xplore', emoji: '📄' },
  { name: 'Statistical Modeling', emoji: '📏' },
  { name: 'XAI Methods', emoji: '🔬' },
]

function SkillBar({ name, level, color, animate }: { name: string; level: number; color: string; animate: boolean }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if (animate) {
      const t = setTimeout(() => setWidth(level), 100)
      return () => clearTimeout(t)
    }
  }, [animate, level])

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-ink dark:text-gray-200">{name}</span>
        <span className="text-xs text-ink-muted dark:text-gray-500 font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-gray-700/60 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${barColors[color] || barColors.accent} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView(0.2)

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Research Toolkit</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink dark:text-white mt-2 tracking-tight">
            Methods &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-ink-muted dark:text-gray-400 mt-4 max-w-xl mx-auto">
            A depth-first skill set built for rigorous research — from experimental design and statistical modeling to production-ready AI systems.
          </p>
        </motion.div>

        {/* Skill bars */}
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 gap-8 mb-16"
        >
          {Object.entries(skills).map(([category, items]) => {
            const colorKey = categoryColors[category] || 'accent'
            return (
              <div key={category} className="bg-cream dark:bg-gray-800 rounded-2xl p-6 border border-border dark:border-gray-700/60 hover:border-accent/30 hover:shadow-md dark:hover:shadow-accent/5 transition-all">
                <div className="flex items-center gap-2 mb-5">
                  <div className={`w-2.5 h-2.5 rounded-full ${dotColors[colorKey]}`} />
                  <h3 className="font-bold text-ink dark:text-white text-sm">{category}</h3>
                </div>
                {items.map(skill => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={colorKey}
                    animate={inView}
                  />
                ))}
              </div>
            )
          })}
        </motion.div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-sm font-bold text-ink-muted dark:text-gray-500 uppercase tracking-widest mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="inline-flex items-center gap-1.5 bg-cream dark:bg-gray-800 text-ink dark:text-gray-200 text-sm font-medium px-3.5 py-2 rounded-full border border-border dark:border-gray-700/60 hover:border-accent hover:text-accent hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default"
              >
                <span>{tech.emoji}</span>
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
