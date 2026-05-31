import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react'
import { experience, education } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-cream dark:bg-gray-950 dot-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Journey</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink dark:text-white mt-2 tracking-tight">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-white">Work Experience</h3>
            </div>

            <div className="relative">
              {experience.map((job, i) => (
                <motion.div
                  key={job.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-12 pb-10 last:pb-0"
                >
                  {i < experience.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-accent/40 to-transparent" />
                  )}

                  <div className="absolute left-0 top-1 w-10 h-10 bg-white dark:bg-gray-800 border-2 border-accent rounded-full flex items-center justify-center shadow-sm">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-border dark:border-gray-700/60 shadow-sm hover:shadow-md dark:hover:shadow-accent/5 hover:border-accent/30 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h4 className="font-bold text-ink dark:text-white">{job.role}</h4>
                        <p className="text-accent font-semibold text-sm">{job.org}</p>
                        <p className="text-ink-subtle dark:text-gray-500 text-xs">{job.location}</p>
                      </div>
                      <span className="text-xs text-ink-muted dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 border border-border dark:border-gray-600/60 px-2 py-1 rounded-full font-medium whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>

                    <div className="mt-3 mb-3">
                      <p className="text-xs text-ink-subtle dark:text-gray-500 font-mono">{job.stack}</p>
                    </div>

                    <ul className="space-y-1.5">
                      {job.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-2 text-sm text-ink-muted dark:text-gray-400 leading-snug">
                          <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap size={16} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-white">Education</h3>
            </div>

            <div className="relative">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-12 pb-10 last:pb-0"
                >
                  {i < education.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-purple-400/40 to-transparent" />
                  )}

                  <div className="absolute left-0 top-1 w-10 h-10 bg-white dark:bg-gray-800 border-2 border-purple-500 rounded-full flex items-center justify-center shadow-sm">
                    <div className="w-3 h-3 bg-purple-500 rounded-full" />
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-border dark:border-gray-700/60 shadow-sm hover:shadow-md dark:hover:shadow-purple-900/20 hover:border-purple-300/50 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h4 className="font-bold text-ink dark:text-white text-sm leading-snug">{edu.degree}</h4>
                        <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm">{edu.institution}</p>
                        <p className="text-ink-subtle dark:text-gray-500 text-xs">{edu.location}</p>
                      </div>
                      <span className="text-xs text-ink-muted dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 border border-border dark:border-gray-600/60 px-2 py-1 rounded-full font-medium whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-bold px-2.5 py-1 rounded-full border border-green-200 dark:border-green-700/40">
                        ⭐ GPA: {edu.gpa}
                      </span>
                      {edu.highlight && (
                        <span className="text-xs text-ink-muted dark:text-gray-400 italic">{edu.highlight}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
