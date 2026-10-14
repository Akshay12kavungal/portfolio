import SectionHead from './SectionHead.jsx'
import Chips from './Chips.jsx'
import RouteMap from './RouteMap.jsx'
import { featuredProject, projects } from '../data.js'

function ProjectTop({ p }) {
  return (
    <div className="proj-top">
      <div>
        <span className="label">{p.kind}</span>
        <h3>{p.title}</h3>
      </div>
      <span className="code" aria-hidden="true">{p.code}</span>
    </div>
  )
}

function ProjectBody({ p }) {
  return (
    <>
      <ProjectTop p={p} />
      <p>{p.text}</p>
      {p.points && <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>}
      <Chips items={p.stack} />
    </>
  )
}

export default function Projects() {
  const total = projects.length + 1
  return (
    <section id="projects" aria-labelledby="proj-h">
      <SectionHead id="proj-h" title="Projects" label={`${total} routes in service`} />
      <div className="projects">
        <article className="proj feature">
          <div className="text"><ProjectBody p={featuredProject} /></div>
          <RouteMap />
        </article>
        {projects.map((p) => (
          <article key={p.code} className="proj" style={p.wide ? { gridColumn: '1 / -1' } : undefined}>
            <ProjectBody p={p} />
          </article>
        ))}
      </div>
    </section>
  )
}
