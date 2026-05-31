import { motion } from 'framer-motion'

const chapters = [
  {
    emoji: '📐',
    period: '2015 – 2019',
    location: 'University of Ilorin, Nigeria',
    title: 'An Economist Who Couldn\'t Stop Counting',
    story: `I started with Economics — but what captivated me wasn't markets or policy theory. It was data. The patterns buried in numbers, the decisions you could justify or challenge with a well-structured dataset. By the time I graduated, I knew my real interest lay at the intersection of quantitative reasoning and systems thinking.`,
    milestone: 'BSc Economics · GPA 3.51 / 4.0',
    side: 'left',
  },
  {
    emoji: '⚙️',
    period: '2019 – 2022',
    location: 'Nigeria',
    title: 'Building Systems That Actually Work',
    story: `Straight out of university, I joined Enterprise Business Info-Systems as a Data & Systems Engineer — and then took on a contract role with the Bank of Industry. I was building dashboards for government and enterprise clients, designing ETL pipelines, architecting deployment systems. The work was practical and high-stakes. I learned that data isn't useful until it reaches the right person, in the right form, at the right time.`,
    milestone: 'First deployment that cut analyst processing time by 60%',
    side: 'right',
  },
  {
    emoji: '✈️',
    period: '2022',
    location: 'Baltimore, MD, USA',
    title: 'The Leap Across the Atlantic',
    story: `In 2022, I packed up and moved to the United States to pursue a Master's in Advanced Computing at Morgan State University. It was a deliberate pivot — I wanted to go deeper, to contribute to research, not just ship products. I wanted to understand why models work, when they fail, and who they fail for.`,
    milestone: 'Enrolled in MSc Advanced Computing · Began AI research',
    side: 'left',
  },
  {
    emoji: '🧪',
    period: '2022 – 2023',
    location: 'Morgan State University',
    title: 'From Engineer to Researcher',
    story: `The MSc was transformative. I went from building systems to questioning them. My thesis — a hybrid transformer and XAI framework for mental disorder detection — became my first solo peer-reviewed publication in IEEE Access. I finished with a 4.0 GPA and, more importantly, a research identity: explainable, fair, clinically-grounded AI.`,
    milestone: 'MSc completed · First sole-author IEEE publication',
    side: 'right',
  },
  {
    emoji: '🔬',
    period: '2024 – Present',
    location: 'Morgan State University & Yale University',
    title: 'PhD, Publications, and a Broader Mission',
    story: `Now a PhD candidate in Computer and Electrical Systems Engineering, my work spans breast cancer diagnostics, neuroimaging-based psychiatric prediction, and transit equity — each project tied together by one question: how do we build AI that works fairly, for everyone? Collaborating with Yale researchers, publishing in journals like Biological Psychiatry, and presenting at IEEE conferences, I'm building a body of work I'm proud of — and a research career just getting started.`,
    milestone: '10+ publications · Yale collaboration · IEEE ICMI, CAI, BIBE',
    side: 'left',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-cream dark:bg-gray-950 dot-bg relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-16 right-12 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 left-12 w-64 h-64 bg-purple-100/20 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">My Story</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink dark:text-white mt-2 tracking-tight">
            The Road to <span className="gradient-text">Research</span>
          </h2>
          <p className="text-ink-muted dark:text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            From an economics classroom in Nigeria to AI research labs in the United States — this is how I got here.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center spine — hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent -translate-x-1/2" />

          <div className="space-y-16">
            {chapters.map((chapter, i) => {
              const isLeft = chapter.side === 'left'
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-border dark:border-gray-700/60 hover:border-accent/40 hover:shadow-lg dark:hover:shadow-accent/5 transition-all card-lift">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-3xl shrink-0">{chapter.emoji}</div>
                        <div>
                          <p className="text-xs text-accent font-bold uppercase tracking-widest mb-0.5">
                            Chapter {i + 1}
                          </p>
                          <h3 className="text-lg font-extrabold text-ink dark:text-white leading-snug">
                            {chapter.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-ink-muted dark:text-gray-400 text-sm leading-relaxed mb-4">
                        {chapter.story}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-border dark:border-gray-700/60">
                        <span className="text-xs bg-accent-light dark:bg-accent/15 text-accent font-semibold px-2.5 py-1 rounded-full border border-accent/20">
                          {chapter.period}
                        </span>
                        <span className="text-xs text-ink-muted dark:text-gray-500">
                          📍 {chapter.location}
                        </span>
                      </div>

                      <div className="mt-3 flex items-start gap-2">
                        <span className="text-accent mt-0.5">✦</span>
                        <p className="text-xs text-ink-muted dark:text-gray-400 italic">{chapter.milestone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white dark:bg-gray-800 border-2 border-accent rounded-full items-center justify-center shadow-md z-10">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </motion.div>
              )
            })}
          </div>

          {/* End node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex flex-col items-center mt-12"
          >
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg glow-ring">
              <span className="text-white text-lg">→</span>
            </div>
            <p className="text-ink-muted dark:text-gray-400 text-sm mt-3 font-medium">The story continues…</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
