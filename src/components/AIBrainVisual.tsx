import { useEffect, useRef } from 'react'

const NODES = [
  // Inner ring (6 nodes)
  { x: 110, y: 44,  r: 5,  delay: 0 },
  { x: 166, y: 77,  r: 4,  delay: 0.4 },
  { x: 166, y: 143, r: 6,  delay: 0.8 },
  { x: 110, y: 176, r: 4,  delay: 1.2 },
  { x: 54,  y: 143, r: 5,  delay: 1.6 },
  { x: 54,  y: 77,  r: 4,  delay: 2.0 },
  // Outer ring (6 nodes)
  { x: 110, y: 5,   r: 3,  delay: 0.2 },
  { x: 196, y: 52,  r: 3.5, delay: 0.6 },
  { x: 196, y: 168, r: 3,  delay: 1.0 },
  { x: 110, y: 215, r: 3.5, delay: 1.4 },
  { x: 24,  y: 168, r: 3,  delay: 1.8 },
  { x: 24,  y: 52,  r: 3,  delay: 2.2 },
]

const CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  [0, 6], [1, 7], [2, 8], [3, 9], [4, 10], [5, 11],
  [0, 2], [1, 3], [2, 4], [3, 5], [4, 0], [5, 1],
  [6, 7], [7, 8], [9, 10], [10, 11],
]

export default function AIBrainVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame: number
    let t = 0

    const draw = () => {
      t += 0.012
      ctx.clearRect(0, 0, 220, 220)

      // Draw connections with animated opacity
      CONNECTIONS.forEach(([a, b]) => {
        const na = NODES[a], nb = NODES[b]
        const pulse = 0.15 + 0.1 * Math.sin(t + a * 0.5)
        ctx.beginPath()
        ctx.moveTo(na.x, na.y)
        ctx.lineTo(nb.x, nb.y)
        ctx.strokeStyle = `rgba(37, 99, 235, ${pulse})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Draw nodes
      NODES.forEach((n) => {
        const pulse = 0.6 + 0.4 * Math.sin(t * 1.2 + n.delay * 1.5)
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3)
        glow.addColorStop(0, `rgba(37, 99, 235, ${0.5 * pulse})`)
        glow.addColorStop(1, 'rgba(37, 99, 235, 0)')
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(37, 99, 235, ${pulse})`
        ctx.fill()
      })

      // Center core pulse
      const coreGlow = 18 + 4 * Math.sin(t * 2)
      const grad = ctx.createRadialGradient(110, 110, 0, 110, 110, coreGlow * 2.5)
      grad.addColorStop(0, 'rgba(37, 99, 235, 0.35)')
      grad.addColorStop(0.5, 'rgba(124, 58, 237, 0.15)')
      grad.addColorStop(1, 'rgba(37, 99, 235, 0)')
      ctx.beginPath()
      ctx.arc(110, 110, coreGlow * 2.5, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()

      ctx.beginPath()
      ctx.arc(110, 110, coreGlow, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(37, 99, 235, 0.9)'
      ctx.fill()
      ctx.beginPath()
      ctx.arc(110, 110, coreGlow - 4, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.9)'
      ctx.fill()

      frame = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="relative w-56 h-56 mx-auto">
      {/* Outer ambient glow rings */}
      <div className="absolute inset-0 rounded-full" style={{
        background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
        animation: 'pulse 3s ease-in-out infinite',
      }} />
      <div className="absolute inset-[-12px] rounded-full border border-accent/10" style={{
        animation: 'spin 20s linear infinite',
        borderStyle: 'dashed',
      }} />
      <div className="absolute inset-[-24px] rounded-full border border-purple-400/10" style={{
        animation: 'spin 30s linear infinite reverse',
        borderStyle: 'dashed',
      }} />

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={220}
        height={220}
        className="relative z-10 w-full h-full"
      />

      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="text-center">
          <div className="text-[10px] font-bold text-accent tracking-[0.25em] uppercase">AI</div>
          <div className="text-[10px] font-bold text-ink tracking-[0.2em] uppercase">Research</div>
        </div>
      </div>
    </div>
  )
}
