import Link from "next/link";

export default function CurrentlyReadingIndex() {
  return (
    <main className="currently-reading two-column-grid">
      <h1>Currently Reading</h1>
      <div className="content">
      <p>Here's what I'm currently reading:</p>
      <ul>
        <li><a href='https://www.goodreads.com/book/show/23533039-ancillary-mercy'>Ancillary Mercy</a> - Ann Leckie</li>
      </ul>
      <p>Here are some books I've enjoyed recently:</p>
      <ul>
        <li>Fiction</li>
        <li><ul>
          <li><a href='https://www.goodreads.com/book/show/60784757-birnam-wood'>Birnam Wood</a> - Eleanor Catton</li>
          <li><a href='https://www.goodreads.com/book/show/4980.Breakfast_of_Champions'>Breakfast of Champions</a> - Kurt Vonnegut</li>
          <li><a href='https://www.goodreads.com/book/show/27071490-homegoing'>Homegoing</a> - Yaa Gyasi</li>
        </ul></li>
        <li>Non-Fiction</li>
        <li><ul>
          <li><a href='https://www.goodreads.com/book/show/75665931-the-maniac'>The MANIAC</a> - Benjamín Labatut</li>
          <li><a href='https://www.goodreads.com/book/show/65215321-blackouts'>Blackouts</a> - Justin Torres</li>
          <li><a href='https://www.goodreads.com/en/book/show/61714633'>The Wager: A Tale of Shipwreck, Mutiny, and Murder</a> - David Grann</li>
      </ul></li>
      </ul>
      </div>
    </main>
  );
}
