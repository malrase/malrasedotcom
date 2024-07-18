import Link from "next/link";

export default function CurrentlyReadingIndex() {
  return (
    <main className="currently-reading two-column-grid">
      <h1>Currently Reading</h1>
      <div className="content">
      <p>Here's what I'm currently reading:</p>
      <ul>
        <li><a href='https://www.goodreads.com/book/show/3711.White_Teeth'>White Teeth</a> - Zadie Smith</li>
      </ul>
      <p>Here are some books I've enjoyed recently:</p>
      <ul>
        <li>Fiction</li>
        <ul>
          <li><a href='https://www.goodreads.com/book/show/62039166-the-bee-sting'>The Bee Sting</a> - Paul Murray</li>
          <li><a href='https://www.goodreads.com/book/show/60784757-birnam-wood'>Birnam Wood</a> - Eleanor Catton</li>
          <li><a href='https://www.goodreads.com/book/show/11761.Underworlds'>Underworld</a> - Don Delillo</li>
          <li><a href='https://www.goodreads.com/book/show/27071490-homegoing'>Homegoing</a> - Yaa Gyasi</li>
        </ul>
        <li>Non-Fiction</li>
        <ul>
          <li><a href='https://www.goodreads.com/book/show/59808605-strangers-to-ourselves'>Strangers to Ourselves</a> - Rachel Aviv</li>
          <li><a href='https://www.goodreads.com/book/show/75665931-the-maniac'>The MANIAC</a> - Benjamín Labatut</li>
          <li><a href='https://www.goodreads.com/book/show/65215321-blackouts'>Blackouts</a> - Justin Torres</li>
      </ul>
      </ul>
      </div>
    </main>
  );
}
