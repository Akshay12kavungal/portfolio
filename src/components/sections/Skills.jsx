import SectionHead from '../ui/SectionHead.jsx'
import { skills } from '../../data'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="sk-h">
      <SectionHead id="sk-h" title="Skills" label="Toolbox" />
      <div className="skills">
        {skills.map(([group, list]) => (
          <div key={group}><h3>{group}</h3><p>{list}</p></div>
        ))}
      </div>
    </section>
  )
}
