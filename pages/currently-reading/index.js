import Link from "next/link";

export default function CurrentlyReadingIndex() {
  return (
    <main className="currently-reading two-column-grid">
      <h1>Currently Reading</h1>
      <div className="content">
      <p>Here's what I'm currently reading:</p>
      <ul>
        <li><a href='https://app.thestorygraph.com/books/a399b349-1cf7-44a0-9315-fb5329046ce2'>The Light Eaters</a> - Zoë Schlanger</li>
      </ul>
      <p>Here are some books I've enjoyed recently:</p>
      <ul>
        <li>Fiction</li>
        <ul>
          <li><a href='https://app.thestorygraph.com/books/990341aa-63cf-492b-81f2-e44deefe8863'>A Place of Greater Safety</a> - Hilary Mantel</li>
          <li><a href='https://app.thestorygraph.com/books/8bbc5559-96c3-4e6c-a9e1-e92333f9e3a3'>Mason & Dixon</a> - Thomas Pynchon</li>
          <li><a href='https://app.thestorygraph.com/books/e9b0c885-bc77-41f7-931f-b9988b545b73'>The Bee Sting</a> - Paul Murray</li>
          <li><a href='https://app.thestorygraph.com/books/bc052b9e-c14a-46ce-a17d-a38d2def8ae2'>Birnam Wood</a> - Eleanor Catton</li>
        </ul>
        <li>Non-Fiction</li>
        <ul>
          <li><a href='https://app.thestorygraph.com/books/f7e3106d-7f4f-4c91-9bf3-e894d9028986'>Careless People</a> - Sarah Wynn-Williams</li>
          <li><a href='https://app.thestorygraph.com/books/38cc13d4-0905-4a44-a974-9d89a4e31c79'>V13: Chronicle of a Trial</a> - Emmanuel Carrère</li>
          <li><a href='https://app.thestorygraph.com/books/482815ab-0759-46bc-8a5e-b5779bb33093'>The MANIAC</a> - Benjamín Labatut</li>
      </ul>
      </ul>
      </div>
    </main>
  );
}
