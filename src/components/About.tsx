import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, Cpu, Users } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const stats = [
  { icon: BookOpen, label: 'Peer-reviewed papers', value: 10, suffix: '+' },
  { icon: Award, label: 'Google Scholar citations', value: 80, suffix: '+' },
  { icon: Users, label: 'Research collaborators', value: 20, suffix: '+' },
  { icon: Cpu, label: 'Years of experience', value: 7, suffix: '+' },
]

function Counter({ to, suffix, decimals = 0, animate }: { to: number; suffix: string; decimals?: number; animate: boolean }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!animate) return
    let start = 0
    const step = to / 60
    const timer = setInterval(() => {
      start += step
      if (start >= to) { setVal(to); clearInterval(timer) }
      else setVal(start)
    }, 20)
    return () => clearInterval(timer)
  }, [animate, to])
  return <span>{decimals ? val.toFixed(decimals) : Math.floor(val)}{suffix}</span>
}

export default function About() {
  const { ref, inView } = useInView()

  const interests = [
    'Explainable AI (XAI)', 'Healthcare AI & Diagnostics', 'Algorithmic Fairness & Bias Mitigation',
    'Neuroimaging & Brain-Behavior Modeling', 'Clinical Decision Support', 'Transfer Learning',
    'Human-Centered AI', 'Large-Scale Observational Studies',
    'Transportation AI & Equity', 'Public Infrastructure Analytics',
  ]

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink dark:text-white mt-2 tracking-tight">
            Research That Drives <span className="gradient-text">Real Impact</span>
          </h2>
          <p className="text-ink-muted dark:text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            I design AI systems at the intersection of healthcare, fairness, and explainability — publishing rigorous research and translating findings into tools that clinicians, policymakers, and communities can trust.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map(({ icon: Icon, label, value, suffix }) => (
            <div key={label} className="bg-cream dark:bg-gray-800 rounded-2xl p-6 text-center border border-border dark:border-gray-700/60 hover:border-accent/30 hover:shadow-md transition-all card-lift glow-ring">
              <div className="w-10 h-10 bg-accent-light dark:bg-accent/15 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon size={20} className="text-accent" />
              </div>
              <div className="text-3xl font-extrabold text-ink dark:text-white mb-1">
                <Counter to={value} suffix={suffix} animate={inView} decimals={value % 1 !== 0 ? 1 : 0} />
              </div>
              <div className="text-xs text-ink-muted dark:text-gray-400 font-medium">{label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio with photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-ink dark:text-white mb-6">
              Research Scientist. Published Author. Collaborator.
            </h3>

            <div className="space-y-4 text-ink-muted dark:text-gray-400 leading-relaxed">
              <p>
                I'm an AI Research Scientist and PhD candidate at <strong className="text-ink dark:text-white">Morgan State University</strong> with a focus on healthcare AI, explainability, and algorithmic fairness. My work involves designing, validating, and communicating novel machine learning methods — from hypothesis to peer-reviewed publication.
              </p>
              <p>
                With <strong className="text-ink dark:text-white">10+ publications</strong> in journals including <strong className="text-ink dark:text-white">IEEE Access</strong>, <strong className="text-ink dark:text-white">Biomedical Signal Processing & Control</strong>, and <strong className="text-ink dark:text-white">Biological Psychiatry</strong>, I bring a track record of independent and collaborative research across healthcare, neuroimaging, transportation equity, and public infrastructure domains.
              </p>
              <p>
                I collaborate across disciplines — partnering with <strong className="text-ink dark:text-white">Yale University</strong> on neuroimaging studies and co-authoring with clinical radiologists and psychiatrists — translating complex AI findings into insights that matter to practitioners and decision-makers.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#publications"
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
              >
                View all publications <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Research interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-ink dark:text-white mb-4">Research Domains</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {interests.map(interest => (
                <span
                  key={interest}
                  className="bg-accent-light dark:bg-accent/10 text-accent text-sm font-medium px-3 py-1.5 rounded-full border border-accent/20 hover:bg-accent hover:text-white transition-colors cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* Certification badge */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200/50 dark:border-amber-700/30 rounded-2xl p-5 flex items-start gap-4">
              <div className="text-3xl">🏅</div>
              <div>
                <div className="font-bold text-ink dark:text-white text-sm">Certified Artificial Intelligence Engineer</div>
                <div className="text-ink-muted dark:text-gray-400 text-sm">CAIE™ — United States AI Institute (USAII)</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
