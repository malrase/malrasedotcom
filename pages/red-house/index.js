import Link from "next/link";

export default function RedHouseIndex() {
  return (
    <main className="red-house two-column-grid">
      <h1>Red House</h1>
      <div className="content">
      <p>Welcome to New York! We're happy to have you here.</p>
      <p>
        We've put together this quick guide to help you navigate the
        neighbourhood, make some recommendations, and give you details
        on the apartment.
      </p>

      <h2>The Apartment</h2>
      <ul>
        <li>
          <b>Access</b>: We will have messaged you a code for the building entrance
          and the front door.
        </li>
        <li>
          <b>AC</b>: The units are by the windows. They're set in Celcius! The
          bedroom cools itself in the evening, the living room does not. We can
          change any settings, just let us know.
        </li>
        <li>
          <b>Shower</b>: Sometimes the shower backs up when you first turn it on - it's
          just the drain has a weird seal. Use the metal doohickey on the shelf to
          open the drain cover, then replace it - it'll start draining normally.
        </li>
        <li>
          <b>Trash</b>: Trash is to the right of the elevator. Separate out recycling
          into the blue bin, and trash goes in the chute. Composting is in the
          basement - the brown bin to the right as you leave the elevator. Green
          compost bags are under the sink.
        </li>
        <li>
          <b>Washer/Dryer</b>: Detergent is on the left of the unit. The washer
          sometimes clicks when it's about halfway through its cycle - it's
          something to do with the lid locking after the pre-soak. If it sounds
          like the lid isn't locking, just push the lid down a touch and hit the
          start button again, it should work.
        </li>
      </ul>

      <h2>The Neighbourhood</h2>
      <p>
        Some local spots that we enjoy:
        <ul>
          <li>
            Coffee shops:
          </li>
          <ul>
            <li>
              <a href='https://maps.app.goo.gl/RNqEhV93kcQv9T3n8'>Gotham Coffee Roasters</a>
            </li>
          </ul>
          <li>
            Restaurants:
          </li>
          <ul>
            <li>
              <a href='https://maps.app.goo.gl/3XFPAgpLvR4nsGh48'>FYC</a> - just across the street, a great restaurant with an excellent wine selection
            </li>
            <li>
              <a href='https://maps.app.goo.gl/iSNRHQNSVcaovNrA8'>LenLen</a> - a great Thai restaurant with amazing cocktails
            </li>
            <li>
              <a href='https://maps.app.goo.gl/AWYHUeLRTdLzXHZx5'>Union Square Cafe</a> - a neighbourhood classic
            </li>
          </ul>
        </ul>
      </p>

      <h2>Other Recommendations</h2>
      <p>
      </p>
      </div>
    </main>
  );
}
