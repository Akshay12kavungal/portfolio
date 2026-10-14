import { profile } from '../../data'
import './Footer.css'

export default function Footer() {
  return <footer>© {new Date().getFullYear()} {profile.name} · Bangalore</footer>
}
