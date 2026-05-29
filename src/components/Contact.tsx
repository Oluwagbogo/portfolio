import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, BookOpen, Send, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personal } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-ink relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Glow blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
            Let's <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">Collaborate</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Whether you're interested in research collaboration, speaking opportunities, or just want to connect — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
                { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
                { icon: MapPin, label: 'Location', value: 'Baltimore, Maryland, USA', href: null },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href || '#'}
                  className={`flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group ${!item.href ? 'cursor-default pointer-events-none' : ''}`}
                >
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">{item.label}</div>
                    <div className="text-white text-sm font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-slate-500 text-sm font-medium mb-4">Find me online</p>
              <div className="flex gap-3">
                {[
                  { icon: GithubIcon, href: personal.github, label: 'GitHub' },
                  { icon: LinkedinIcon, href: personal.linkedin, label: 'LinkedIn' },
                  { icon: BookOpen, href: personal.googleScholar, label: 'Scholar' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-accent hover:border-accent transition-all text-slate-400 hover:text-white min-w-[60px]"
                  >
                    <Icon size={18} />
                    <span className="text-xs font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-3xl border border-white/10 bg-white/5">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="text-xl font-bold text-white mb-2">Message Ready!</h3>
                <p className="text-slate-400 text-sm">Your email client has been opened with your message. Looking forward to connecting!</p>
                <button onClick={() => setSent(false)} className="mt-6 text-accent text-sm font-medium hover:underline">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="John Doe"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    placeholder="Research Collaboration / Speaking / Other"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me about your project, collaboration idea, or just say hello..."
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-accent text-white font-semibold py-3.5 rounded-xl hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/30"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
