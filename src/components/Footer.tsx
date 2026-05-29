import { BookOpen, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personal } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <a href="#hero" className="text-white font-extrabold text-xl tracking-tight">
            JA<span className="text-accent">.</span>
          </a>
          <p className="text-slate-500 text-xs mt-1">AI Researcher · PhD Candidate · Morgan State University</p>
        </div>

        <div className="flex gap-3">
          {[
            { icon: GithubIcon, href: personal.github },
            { icon: LinkedinIcon, href: personal.linkedin },
            { icon: BookOpen, href: personal.googleScholar },
            { icon: Mail, href: `mailto:${personal.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-slate-600 text-xs">
          © {year} Joseph Aina. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
