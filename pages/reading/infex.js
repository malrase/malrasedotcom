import Link from "next/link";

export default function CurrentlyReadingIndex() {
  return (
    <main className="currently-reading two-column-grid">
      <h1>Currently Reading</h1>
      <div className="content">
      <p>Here's what I'm currently reading:</p>
      <ul>
        <li>Code Breaker - Walter Issacson</li>
        <li>The Idiot - Fyodor Dostoevsky</li>
      </ul>
      <p>Here are some books I've enjoyed recently:</p>
      <ul>
        <li></li>
      </ul>
      </div>
    </main>
  );
}
