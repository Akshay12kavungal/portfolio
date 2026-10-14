import { useEffect, useRef } from 'react'
import './RouteMap.css'

// Illustration of the AVLS stop tracker: a bus moving along a route with passed, current, next and upcoming stops.
export default function RouteMap() {
  const pathRef = useRef(null)
  const busRef = useRef(null)

  useEffect(() => {
    const path = pathRef.current
    const bus = busRef.current
    const len = path.getTotalLength()
    const place = (t) => {
      const p = path.getPointAtLength(t * len)
      const q = path.getPointAtLength(Math.min(len, t * len + 1))
      const a = (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI
      bus.setAttribute('transform', `translate(${p.x} ${p.y}) rotate(${a})`)
    }
    place(0.5)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf
    let start = null
    const frame = (ts) => {
      if (start === null) start = ts
      place((0.5 + (ts - start) / 16000) % 1)
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <figure className="map" style={{ margin: 0 }}>
      <svg viewBox="0 0 400 260" role="img" aria-label="Illustration of a bus route with passed, current, next and upcoming stops">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="var(--line)" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="400" height="260" fill="url(#grid)" />
        <path ref={pathRef} d="M30 220 C 90 220, 90 150, 150 140 S 230 60, 290 80 S 360 120, 370 40" fill="none" stroke="var(--route)" strokeWidth="6" strokeLinecap="round" />
        <path d="M150 140 C 180 150, 200 190, 240 200" fill="none" stroke="var(--led)" strokeWidth="2.5" strokeDasharray="5 5" />
        <circle cx="30" cy="220" r="7" fill="var(--muted)" />
        <circle cx="104" cy="178" r="7" fill="var(--muted)" />
        <circle cx="214" cy="96" r="8" fill="var(--led)" stroke="var(--ink)" strokeWidth="2" />
        <circle cx="290" cy="80" r="7" fill="var(--surface)" stroke="var(--route)" strokeWidth="3" />
        <circle cx="370" cy="40" r="7" fill="var(--surface)" stroke="var(--line)" strokeWidth="3" />
        <g ref={busRef}>
          <rect x="-9" y="-6" width="18" height="12" rx="3" fill="var(--ink)" />
          <rect x="-6" y="-3" width="12" height="4" rx="1" fill="var(--led)" />
        </g>
        <text x="246" y="216" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="var(--led-ink)">off-route</text>
        <text x="222" y="120" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="var(--ink)">ETA 4 min</text>
      </svg>
      <figcaption className="legend">
        <span><i style={{ background: 'var(--muted)' }}></i>passed</span>
        <span><i style={{ background: 'var(--led)' }}></i>current</span>
        <span><i style={{ background: 'var(--surface)', boxShadow: 'inset 0 0 0 2px var(--route)' }}></i>next</span>
        <span><i style={{ background: 'var(--surface)', boxShadow: 'inset 0 0 0 2px var(--line)' }}></i>upcoming</span>
      </figcaption>
    </figure>
  )
}
