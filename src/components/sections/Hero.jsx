import { profile } from '../../data'
import './Hero.css'

export default function Hero() {
  return (
    <header className="hero">
      <div className="board" role="img" aria-label={`Destination board: ${profile.name}, Software Engineer, via Python, Django and React`}>
        <div className="board-row">
          <span className="route-no">SE</span>
          <span className="dest">{profile.name}</span>
        </div>
        <div className="via ticker">
          {/* Two copies so the loop is seamless; the second is hidden from screen readers. */}
          <div className="ticker-track">
            <span>{profile.ticker}</span>
            <span aria-hidden="true">{profile.ticker}</span>
          </div>
        </div>
      </div>

      <div className="intro">
        <div>
          <p className="lead">{profile.lead}</p>
          <p>{profile.summary}</p>
          <div className="cta">
            <a className="btn primary" href="#contact">Get in touch</a>
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <dl className="facts">
          {profile.facts.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </div>
    </header>
  )
}
