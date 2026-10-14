import './SectionHead.css'

export default function SectionHead({ id, title, label }) {
  return (
    <div className="sec-head">
      <h2 id={id}>{title}</h2>
      <span className="label">{label}</span>
    </div>
  )
}
