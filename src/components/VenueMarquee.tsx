const venues = [
  '📰 IEEE Access',
  '🧬 Biomedical Signal Processing & Control',
  '🧠 Biological Psychiatry',
  '🎓 Journal of Adolescent Health',
  '🖥️ IEEE ICMI 2025',
  '⚙️ IEEE CAI 2023',
  '🔬 IEEE BIBE 2023',
  '📊 Computer Methods & Programs in Biomedicine',
  '🏛️ Collaboration with Yale University',
  '🏆 CAIE™ Certified AI Engineer',
]

export default function VenueMarquee() {
  const doubled = [...venues, ...venues]

  return (
    <div className="bg-ink/[0.03] border-y border-border overflow-hidden py-3 select-none">
      <div className="marquee-track">
        {doubled.map((v, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted px-8 whitespace-nowrap"
          >
            {v}
            <span className="text-border mx-2">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
