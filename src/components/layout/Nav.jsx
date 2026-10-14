import { profile } from '../data.js'

const links = [
  ['#experience', 'Experience'],
  ['#projects', 'Projects'],
  ['#skills', 'Skills'],
  ['#contact', 'Contact'],
]

export default function Nav() {
  return (
    <nav aria-label="Main">
      <span className="brand">{profile.name.toUpperCase()}</span>
      <ul>
        {links.map(([href, label]) => (
          <li key={href}><a href={href}>{label}</a></li>
        ))}
      </ul>
    </nav>
  )
}
