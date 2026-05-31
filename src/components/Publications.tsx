import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, BookOpen, Presentation, FileText } from 'lucide-react'
import { publications } from '../data'

const typeConfig: Record<string, { icon: typeof BookOpen; color: string; bg: string }> = {
  Journal: { icon: BookOpen, color: 'text-blue-700 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700/40' },
  Conference: { icon: Presentation, color: 'text-purple-700 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700/40' },
  Thesis: { icon: FileText, color: 'text-amber-700 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700/40' },
}

const filters = ['All', 'Journal', 'Conference', 'Thesis']

const INITIAL_COUNT = 6

export default function Publications() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const filtered = activeFilter === 'All'
    ? publications
    : publications.filter(p => p.type === activeFilter)

  const handleFilterChange = (f: string) => { setActiveFilter(f); setShowAll(false) }

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT)
  const hiddenCount = filtered.length - INITIAL_COUNT

  return (
    <section id="publications" className="py-24 bg-cream dark:bg-gray-950 dot-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Peer-Reviewed Research</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink dark:text-white mt-2 tracking-tight">
            <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-ink-muted dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            10+ peer-reviewed publications in top-tier journals and IEEE conferences — spanning healthcare AI, algorithmic fairness, neuroimaging, and clinical decision support.
          </p>

          {/* Citation badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { label: 'Google Scholar Citations', value: '80+', color: 'bg-accent-light dark:bg-accent/15 text-accent border-accent/20' },
              { label: 'Peer-Reviewed Papers', value: '10+', color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-700/40' },
              { label: 'Journals & Conferences', value: 'IEEE · Elsevier · Springer', color: 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-700/40' },
            ].map(b => (
              <span key={b.label} className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border ${b.color}`}>
                <span className="font-extrabold">{b.value}</span>
                <span className="font-medium opacity-75">{b.label}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-10 flex-wrap"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === f
                  ? 'bg-accent text-white shadow-md shadow-accent/25'
                  : 'bg-white dark:bg-gray-800 text-ink-muted dark:text-gray-400 border border-border dark:border-gray-700/60 hover:border-accent hover:text-accent'
              }`}
            >
              {f}
              <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                activeFilter === f ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'
              }`}>
                {f === 'All' ? publications.length : publications.filter(p => p.type === f).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Publication list */}
        <AnimatePresence mode="popLayout">
          <div className="space-y-4">
            {visible.map((pub, i) => {
              const { icon: TypeIcon, color, bg } = typeConfig[pub.type] || typeConfig.Journal
              const link = (pub as { url?: string; doi?: string }).url || (pub as { doi?: string }).doi || null
              return (
                <motion.div
                  key={pub.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-border dark:border-gray-700/60 hover:border-accent/40 hover:shadow-md dark:hover:shadow-accent/5 hover:-translate-y-0.5 transition-all group"
                >
                  <div className="flex gap-4">
                    {/* Year badge */}
                    <div className="shrink-0 text-center">
                      <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center ${link ? 'bg-accent' : 'bg-ink dark:bg-gray-700'}`}>
                        <span className="text-white text-xs font-bold">{pub.year}</span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border ${bg} ${color}`}>
                          <TypeIcon size={10} />
                          {pub.type}
                        </span>
                        {link && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/40 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            Available online
                          </span>
                        )}
                      </div>

                      <h3 className={`font-bold text-ink dark:text-white text-sm leading-snug mb-1 transition-colors ${link ? 'group-hover:text-accent cursor-pointer' : ''}`}>
                        {link ? (
                          <a href={link} target="_blank" rel="noreferrer" className="hover:underline decoration-accent/40 underline-offset-2">
                            {pub.title}
                          </a>
                        ) : pub.title}
                      </h3>

                      <p className="text-ink-muted dark:text-gray-400 text-xs mb-1 leading-relaxed">
                        <span className="font-medium text-ink-subtle dark:text-gray-500">Authors: </span>
                        {pub.authors}
                      </p>

                      <p className="text-ink-subtle dark:text-gray-500 text-xs italic">{pub.venue}</p>
                    </div>

                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 self-center p-2 text-ink-subtle dark:text-gray-500 hover:text-accent hover:bg-accent-light dark:hover:bg-accent/15 rounded-lg transition-all"
                        title="Open publication"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </AnimatePresence>

        {/* Show more / Show less */}
        {hiddenCount > 0 || showAll ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => setShowAll(v => !v)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent text-accent font-semibold text-sm hover:bg-accent hover:text-white transition-all hover:shadow-md hover:shadow-accent/25"
            >
              {showAll ? 'Show less' : `Show all ${filtered.length} publications`}
              <motion.span
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                ↓
              </motion.span>
            </button>
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}
