import Link from "next/link";

export default function CurrentlyReadingIndex() {
  return (
    <main className="currently-reading two-column-grid">
      <h1>Currently Reading</h1>
      <div className="content">
      <p>Here's what I'm currently reading:</p>
      <ul>
        <li><a href='https://app.thestorygraph.com/books/470474cb-e378-497f-aef7-70854c395526'>Anna Karenina</a> - Leo Tolstoy</li>
      </ul>
      <p>Here are some books I've enjoyed recently - check out <a href="https://app.thestorygraph.com/profile/malrase">my profile on Storygraph</a> for a full list. </p>
      <ul>
        <li>Fiction</li>
        <ul>
          <li><a href='https://app.thestorygraph.com/books/daef0f5c-332e-4f1d-b8a9-f9b45b8bebba'>The Director</a> - Daniel Kehlmann</li>
          <li><a href='https://app.thestorygraph.com/books/cc7dbd7b-1ae4-464f-996e-634c979dabeb'>What We Can Know</a> - Ian McEwan</li>
          <li><a href='https://app.thestorygraph.com/books/527858bf-900d-45f4-b3eb-c158b7602411'>On the Calculation of Volume I</a> - Solvej Balle</li>
        </ul>
        <li>Non-Fiction</li>
        <ul>
          <li><a href='https://app.thestorygraph.com/books/89caf934-241a-4757-aef5-4de8b30395bc'>Murderland</a> - Caroline Fraser</li>
          <li><a href='https://app.thestorygraph.com/books/38cc13d4-0905-4a44-a974-9d89a4e31c79'>V13: Chronicle of a Trial</a> - Emmanuel Carrère</li>
          <li><a href='https://app.thestorygraph.com/books/482815ab-0759-46bc-8a5e-b5779bb33093'>The MANIAC</a> - Benjamín Labatut</li>
      </ul>
      </ul>
      </div>
    </main>
  );
}
