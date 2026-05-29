import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, BookOpen, Presentation, FileText } from 'lucide-react'
import { publications } from '../data'

const typeConfig: Record<string, { icon: typeof BookOpen; color: string; bg: string }> = {
  Journal: { icon: BookOpen, color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200' },
  Conference: { icon: Presentation, color: 'text-purple-700', bg: 'bg-purple-50 border-purple-200' },
  Thesis: { icon: FileText, color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200' },
}

const filters = ['All', 'Journal', 'Conference', 'Thesis']

export default function Publications() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? publications
    : publications.filter(p => p.type === activeFilter)

  return (
    <section id="publications" className="py-24 bg-cream dot-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Peer-Reviewed Research</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink mt-2 tracking-tight">
            <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-ink-muted mt-4 max-w-2xl mx-auto">
            10+ peer-reviewed publications in top-tier journals and IEEE conferences — spanning healthcare AI, algorithmic fairness, neuroimaging, and clinical decision support.
          </p>

          {/* Citation badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { label: 'Google Scholar Citations', value: '80+', color: 'bg-accent-light text-accent border-accent/20' },
              { label: 'Peer-Reviewed Papers', value: '10+', color: 'bg-purple-50 text-purple-700 border-purple-200' },
              { label: 'Journals & Conferences', value: 'IEEE · Elsevier · Springer', color: 'bg-amber-50 text-amber-700 border-amber-200' },
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
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === f
                  ? 'bg-accent text-white shadow-md shadow-accent/25'
                  : 'bg-white text-ink-muted border border-border hover:border-accent hover:text-accent'
              }`}
            >
              {f}
              <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                activeFilter === f ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                {f === 'All' ? publications.length : publications.filter(p => p.type === f).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Publication list */}
        <AnimatePresence mode="popLayout">
          <div className="space-y-4">
            {filtered.map((pub, i) => {
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
                  className="bg-white rounded-2xl p-5 border border-border hover:border-accent/30 hover:shadow-md transition-all group"
                >
                  <div className="flex gap-4">
                    {/* Year badge */}
                    <div className="shrink-0 text-center">
                      <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center ${link ? 'bg-accent' : 'bg-ink'}`}>
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
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            Available online
                          </span>
                        )}
                      </div>

                      <h3 className={`font-bold text-ink text-sm leading-snug mb-1 transition-colors ${link ? 'group-hover:text-accent cursor-pointer' : ''}`}>
                        {link ? (
                          <a href={link} target="_blank" rel="noreferrer" className="hover:underline decoration-accent/40 underline-offset-2">
                            {pub.title}
                          </a>
                        ) : pub.title}
                      </h3>

                      <p className="text-ink-muted text-xs mb-1 leading-relaxed">
                        <span className="font-medium text-ink-subtle">Authors: </span>
                        {pub.authors}
                      </p>

                      <p className="text-ink-subtle text-xs italic">{pub.venue}</p>
                    </div>

                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 self-center p-2 text-ink-subtle hover:text-accent hover:bg-accent-light rounded-lg transition-all"
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
      </div>
    </section>
  )
}
