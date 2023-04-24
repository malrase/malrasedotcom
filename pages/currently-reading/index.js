import Link from "next/link";

export default function CurrentlyReadingIndex() {
  return (
    <main className="currently-reading two-column-grid">
      <h1>Currently Reading</h1>
      <div className="content">
      <p>Here's what I'm currently reading:</p>
      <ul>
        <li><a href='https://www.goodreads.com/book/show/60092581-lessons'>Lessons</a> - Ian McEwan</li>
        <li><a href='https://www.goodreads.com/book/show/58312013-other-terrors'>Other Terrors: An Inclusive Anthology</a> - Vince A. Liaguno, et al.</li>
      </ul>
      <p>Here are some books I've enjoyed recently:</p>
      <ul>
        <li><a href='https://www.goodreads.com/book/show/58437521-the-candy-house'>The Candy House</a> - Jennifer Egan</li>
        <li>Liberation Day - George Saunders</li>
        <li>Cloud Cuckoo Land - Anthony Doerr</li>
      </ul>
      </div>
    </main>
  );
}
