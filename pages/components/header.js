import Link from "next/link";

export default function Header() {
  return (
    <header className="two-column-grid">
      <Link href="/">malrase dot com</Link>
      <div className="menu">
        <Link href="/currently-reading">Reading</Link> 
        <Link href="/posts">Blog</Link> 
        <Link href="/city-guides">Cities</Link>
      </div>
    </header>
  )
}
