import './Chips.css'

export default function Chips({ items }) {
  return (
    <ul className="chips" aria-label="Stack">
      {items.map((s) => <li key={s}>{s}</li>)}
    </ul>
  )
}
