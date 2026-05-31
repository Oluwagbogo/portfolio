type Variant = 'white-to-cream' | 'cream-to-white' | 'any-to-ink'

const variants: Record<Variant, { wrap: string; fill: string }> = {
  'white-to-cream': {
    wrap: 'bg-white dark:bg-gray-900',
    fill: 'text-[#FAFAF8] dark:text-gray-950',
  },
  'cream-to-white': {
    wrap: 'bg-[#FAFAF8] dark:bg-gray-950',
    fill: 'text-white dark:text-gray-900',
  },
  'any-to-ink': {
    wrap: 'bg-[#FAFAF8] dark:bg-gray-950',
    fill: 'text-[#0F172A]',
  },
}

export default function WaveDivider({ variant, flip = false }: { variant: Variant; flip?: boolean }) {
  const { wrap, fill } = variants[variant]
  return (
    <div className={`w-full overflow-hidden leading-none -mb-px ${wrap}`}>
      <svg
        viewBox="0 0 1440 56"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`w-full h-14 fill-current ${fill} ${flip ? 'scale-x-[-1]' : ''}`}
      >
        <path d="M0,28 C180,56 360,0 540,28 C720,56 900,0 1080,28 C1260,56 1380,14 1440,28 L1440,56 L0,56 Z" />
      </svg>
    </div>
  )
}
