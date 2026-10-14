import { useRef, useState } from 'react'
import { profile } from '../../data'
import './Contact.css'

function CopyRow({ label, value }) {
  const ref = useRef(null)
  const [status, setStatus] = useState('Copy')

  const flash = (text) => {
    setStatus(text)
    setTimeout(() => setStatus('Copy'), 1600)
  }
  const selectText = () => {
    const range = document.createRange()
    range.selectNodeContents(ref.current)
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
    flash('Selected')
  }
  const copy = () => {
    try {
      navigator.clipboard.writeText(value).then(() => flash('Copied'), selectText)
    } catch {
      selectText()
    }
  }

  return (
    <div className="crow">
      <span className="k">{label}</span>
      <span className="v" ref={ref}>{value}</span>
      <button className="copy" type="button" onClick={copy}>{status}</button>
    </div>
  )
}

function LinkRow({ label, href }) {
  return (
    <div className="crow">
      <span className="k">{label}</span>
      <span className="v">
        <a href={href} target="_blank" rel="noopener noreferrer">{href.replace(/^https:\/\//, '')}</a>
      </span>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="ct-h">
      <h2 id="ct-h">Next stop: your team</h2>
      <p>I'm open to backend and full-stack roles working with Python, Django and React. Email is the fastest way to reach me.</p>
      <div className="rows">
        <CopyRow label="Email" value={profile.email} />
        <CopyRow label="Phone" value={profile.phone} />
        <LinkRow label="LinkedIn" href={profile.linkedin} />
        <LinkRow label="GitHub" href={profile.github} />
      </div>
    </section>
  )
}
