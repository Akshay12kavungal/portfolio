import SectionHead from './SectionHead.jsx'
import Chips from './Chips.jsx'
import { experience, stateLabel } from '../data.js'

function Stop({ job }) {
  const cls = job.state === 'passed' ? 'stop' : `stop ${job.state}`
  return (
    <li className={cls}>
      <span className="dot" aria-hidden="true"></span>
      <div className="stop-body">
        <div className="stop-head">
          <div className="stop-meta">
            <span className="state">{stateLabel[job.state]}</span>
            <span className="dates">{job.dates}</span>
          </div>
          <h3>{job.title}</h3>
          <p className="org">{job.org}</p>
        </div>
        {job.points && (
          <ul className="points">{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
        )}
        {job.text && <p className="stop-text">{job.text}</p>}
        {job.stack && <Chips items={job.stack} />}
      </div>
    </li>
  )
}

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-h">
      <SectionHead id="exp-h" title="Route history" label="Stops: passed · current" />
      <ol className="route" reversed>
        {experience.map((job) => <Stop key={job.dates} job={job} />)}
      </ol>
    </section>
  )
}
