import Link from "next/link";

export default function CurrentlyReadingIndex() {
  return (
    <main className="currently-reading two-column-grid">
      <h1>Currently Reading</h1>
      <div className="content">
      <p>Here's what I'm currently reading:</p>
      <ul>
        <li><a href='https://www.goodreads.com/book/show/61190770-chain-gang-all-stars'>Chain-Gang All-Stars</a> - Nana Kwame Adjei-Brenyah</li>
        <li><a href='https://www.goodreads.com/book/show/187020.Empire_Falls'>Empire Falls</a> - Richard Russo</li>
      <li><a href='https://www.goodreads.com/book/show/61358638-poverty-by-america'>Poverty, by America</a> - Matthew Desmond</li>
      </ul>
      <p>Here are some books I've enjoyed recently:</p>
      <ul>
                <li><a href='https://www.goodreads.com/en/book/show/61714633'>The Wager: A Tale of Shipwreck, Mutiny, and Murder</a> - David Grann</li>
        <li><a href='https://www.goodreads.com/book/show/55457493-the-man-who-died-twice'>The Man Who Died Twice</a> - Richard Osman</li>
        <li><a href='https://www.goodreads.com/book/show/58437521-the-candy-house'>The Candy House</a> - Jennifer Egan</li>
        <li><a href='https://www.goodreads.com/en/book/show/60471573'>Liberation Day</a> - George Saunders</li>
      </ul>
      </div>
    </main>
  );
}
