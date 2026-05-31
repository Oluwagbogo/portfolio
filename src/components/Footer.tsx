import { BookOpen, Mail, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personal } from '../data'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: GithubIcon, href: personal.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: personal.linkedin, label: 'LinkedIn' },
  { icon: BookOpen, href: personal.googleScholar, label: 'Scholar' },
  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink border-t border-white/5">
      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand + tagline */}
          <div>
            <a href="#hero" className="inline-block text-white font-extrabold text-2xl tracking-tight mb-3">
              JA<span className="text-accent">.</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              AI Research Scientist building explainable, fair, and clinically-grounded machine learning systems.
            </p>
            <p className="text-slate-600 text-xs italic">
              "Designing AI that works for everyone — not just the majority."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-accent transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-3 h-px bg-slate-700 group-hover:bg-accent group-hover:w-5 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + socials */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Connect</h4>
            <div className="space-y-3 mb-6">
              <a href={`mailto:${personal.email}`} className="flex items-center gap-2 text-slate-400 text-sm hover:text-accent transition-colors">
                <Mail size={14} className="shrink-0" />
                {personal.email}
              </a>
              <p className="flex items-center gap-2 text-slate-500 text-sm">
                <span className="text-base">📍</span>
                Baltimore, Maryland, USA
              </p>
              <p className="flex items-center gap-2 text-slate-500 text-sm">
                <span className="text-base">🎓</span>
                Morgan State University
              </p>
            </div>

            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 hover:bg-accent hover:border-accent flex items-center justify-center text-slate-400 hover:text-white transition-all hover:-translate-y-0.5"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {year} Joseph Oluwagbogo Aina. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#hero"
              className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-accent hover:border-accent flex items-center justify-center text-slate-500 hover:text-white transition-all hover:-translate-y-0.5"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
