import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Mail, ArrowDown, Award } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import AIBrainVisual from './AIBrainVisual'
import { personal } from '../data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

const ROLES = [
  'a Data Analyst Intern',
  'an AI/ML Researcher',
  'a Healthcare AI Specialist',
  'an IEEE-Published Author',
  'a PhD Candidate · GPA 4.0/4.0',
]

function Typewriter({ texts }: { texts: string[] }) {
  const [displayed, setDisplayed] = useState('')
  const [idx, setIdx] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing')

  useEffect(() => {
    const current = texts[idx]
    let t: ReturnType<typeof setTimeout>

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55)
      } else {
        t = setTimeout(() => setPhase('pausing'), 2000)
      }
    } else if (phase === 'pausing') {
      t = setTimeout(() => setPhase('deleting'), 200)
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 28)
      } else {
        setIdx(i => (i + 1) % texts.length)
        setPhase('typing')
      }
    }
    return () => clearTimeout(t)
  }, [displayed, phase, idx, texts])

  return (
    <span className="text-accent font-semibold">
      {displayed}
      <span className="cursor ml-0.5 border-r-2 border-accent">&nbsp;</span>
    </span>
  )
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    window.addEventListener('resize', onResize)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 2 + 0.5, alpha: Math.random() * 0.3 + 0.05,
    }))

    let frame: number
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(37, 99, 235, ${p.alpha})`; ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.06 * (1 - dist / 100)})`
            ctx.lineWidth = 0.6; ctx.stroke()
          }
        }
      }
      frame = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-cream dark:bg-gray-950">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Ambient blobs */}
      <div className="absolute top-24 right-16 w-[420px] h-[420px] bg-blue-100/35 rounded-full blur-3xl pointer-events-none float" />
      <div className="absolute bottom-24 left-16 w-80 h-80 bg-purple-100/25 rounded-full blur-3xl pointer-events-none" style={{ animation: 'float 9s ease-in-out infinite 2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 bg-accent-light border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            Open to Research Scientist &amp; AI Research Roles
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-6xl lg:text-[68px] font-extrabold text-ink dark:text-white leading-[1.02] tracking-tight mb-4">
            Joseph<br />
            <span className="gradient-text">Oluwagbogo</span><br />
            Aina
          </motion.h1>

          {/* Typewriter role line */}
          <motion.div {...fadeUp(0.32)} className="h-8 mb-2 flex items-center">
            <span className="text-ink-muted font-medium text-lg mr-2">I'm</span>
            <Typewriter texts={ROLES} />
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="inline-flex items-center gap-1.5 bg-gold/10 text-gold text-xs font-bold px-3 py-1 rounded-full mb-6 border border-gold/20">
            <Award size={12} />
            {personal.title}
          </motion.div>

          <motion.p {...fadeUp(0.45)} className="text-ink-muted dark:text-gray-400 leading-relaxed mb-8 max-w-lg">
            {personal.bio}
          </motion.p>

          <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-3 mb-10">
            <a
              href="#publications"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-full hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              View Publications
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-ink dark:text-white font-semibold px-6 py-3 rounded-full border border-border dark:border-gray-700 hover:border-accent hover:text-accent transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <Mail size={16} />
              Get in Touch
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.65)} className="flex items-center gap-4">
            <a href={personal.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-border dark:border-gray-700 text-ink-muted dark:text-gray-400 hover:text-accent hover:border-accent hover:shadow-md transition-all hover:-translate-y-0.5">
              <GithubIcon size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-border dark:border-gray-700 text-ink-muted dark:text-gray-400 hover:text-accent hover:border-accent hover:shadow-md transition-all hover:-translate-y-0.5">
              <LinkedinIcon size={18} />
            </a>
            <a href={personal.googleScholar} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-border dark:border-gray-700 text-ink-muted dark:text-gray-400 hover:text-accent hover:border-accent hover:shadow-md transition-all hover:-translate-y-0.5">
              <BookOpen size={18} />
            </a>
            <span className="h-px w-8 bg-border dark:bg-gray-700" />
            <span className="text-xs text-ink-subtle dark:text-gray-500 font-medium">Morgan State University</span>
          </motion.div>
        </div>

        {/* Right: AI Brain Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="hidden md:flex flex-col items-center gap-6"
        >
          {/* Main visual with floating badges */}
          <div className="relative">
            {/* Badge: top-left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute -top-5 -left-8 bg-white rounded-2xl shadow-lg px-3.5 py-2.5 flex items-center gap-2 border border-border z-20"
              style={{ animation: 'float 5s ease-in-out infinite 1s' }}
            >
              <span className="text-xl">📄</span>
              <div>
                <div className="text-[10px] text-ink-muted font-medium leading-none mb-0.5">Publications</div>
                <div className="text-xs font-extrabold text-ink">10+ Papers</div>
              </div>
            </motion.div>

            {/* Badge: bottom-right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute -bottom-5 -right-8 bg-white rounded-2xl shadow-lg px-3.5 py-2.5 flex items-center gap-2 border border-border z-20"
              style={{ animation: 'float 6s ease-in-out infinite 0.5s' }}
            >
              <span className="text-xl">🎓</span>
              <div>
                <div className="text-[10px] text-ink-muted font-medium leading-none mb-0.5">PhD Candidate</div>
                <div className="text-xs font-extrabold text-ink">GPA 4.0 / 4.0</div>
              </div>
            </motion.div>

            {/* Badge: top-right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="absolute -top-3 -right-10 bg-white rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 border border-border z-20"
              style={{ animation: 'float 7s ease-in-out infinite 2s' }}
            >
              <span className="text-base">🏛️</span>
              <div className="text-[10px] font-bold text-ink leading-tight">Yale · MSU<br /><span className="font-normal text-ink-muted">Collaboration</span></div>
            </motion.div>

            <AIBrainVisual />
          </div>

          {/* Stats row below visual */}
          <div className="grid grid-cols-3 gap-3 w-full">
            {[
              { label: 'Citations', value: '80+', color: 'from-blue-500 to-blue-600' },
              { label: 'Publications', value: '10+', color: 'from-purple-500 to-purple-600' },
              { label: 'Years Research', value: '4+', color: 'from-teal-500 to-teal-600' },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-2xl p-3 border border-border text-center shadow-sm hover:shadow-md transition-shadow">
                <div className={`text-xl font-extrabold bg-gradient-to-br ${s.color} bg-clip-text text-transparent`}>{s.value}</div>
                <div className="text-[10px] text-ink-muted font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-subtle hover:text-accent transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  )
}
