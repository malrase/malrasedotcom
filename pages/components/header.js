import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">malrase dot com</Link>
      <Link href="/posts">Blog</Link> 
      <Link href="/city-guides">City Guides</Link>
    </header>
  )
}