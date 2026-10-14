import SectionHead from '../ui/SectionHead.jsx'
import { education } from '../../data'
import './Education.css'

export default function Education() {
  return (
    <section id="education" aria-labelledby="edu-h">
      <SectionHead id="edu-h" title="Education" label="Kerala" />
      <div className="edu">
        {education.map((e) => (
          <div key={e.title}>
            <h3>{e.title}</h3>
            <p>{e.place}<br />{e.dates}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
