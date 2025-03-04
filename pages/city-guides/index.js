import Link from "next/link";

export default function CityGuidesIndex() {
  return (
    <main className="city-guides two-column-grid">
      <h1>City Guides</h1>
      <div className="content">
      <p>There are a few cities that I've become familiar with – through frequent travel or living there for a while. Through that, I've either written a number of blog posts or just know a few places I'd recommend. </p>

      <p>I decided to collate a lot of this information into city guides. Each guide acts as a collection of any blog posts as well as broad overall tips on the city, where I've enjoyed eating, and, most importantly, <b>good drinking spots</b>.</p>

      <p>Hopefully this list will grow as I spend more time in various cities.</p>
      <ul>
        <li><Link href={`./city-guides/london`}>London</Link></li>
        <li><Link href={`./city-guides/new-orleans`}>New Orleans</Link></li>
        <li><Link href={`./city-guides/new-york`}>New York</Link></li>
        <li><Link href={`./city-guides/paris`}>Paris</Link></li>
        <li><Link href={`./city-guides/prague`}>Prague</Link></li>
      </ul>
      </div>
    </main>
  );
}
