import Link from "next/link";

export default function BlueHouseIndex() {
  return (
    <main className="blue-house two-column-grid">
      <h1>Blue House</h1>
      <div className="content">
      <p>Welcome to New Orleans! We're happy to have you here.</p>
      <p>
        We've put together this quick guide to help you navigate the
        neighbourhood, make some recommendations, and give you details
        on the house.
      </p>
      <h2>The House</h2>
      <ul>
        <li>
          <b>AC</b>: There are two controls, upstairs and downstairs. They're set in Celcius! 
          26ºC is a nice warm daytime temperature, and 20ºC is a nice cool sleeping
          temperature.
        </li>
        <li><b>Alarm</b>: For the actual security system, we don't use it when we're in town.
          If you're interested in having a full security system, let us know and we
          can provide instructions. The internal cameras will be disabled during 
          your stay, however the external cameras will still be active for everyone'security.
        </li>
        <li><b>Coffee machine</b>: Filters and coffee are in the pantry.</li>
        <li>
          <b>Front door</b>: We will have messaged you a code to access the house. To lock
          and unlock the door, enter the code and press the checkbox.
        </li>
        <li>
          <b>Neighbours</b>: Parties are not allowed - please be respectful of the neighbours.
        </li>
        <li>
          <b>Safety</b>: Before going to bed and when you leave, make sure to lock the doors.
          Packages left on the stoop are at risk of being stolen, so make sure to 
          bring them inside!
        </li>
        <li>
          <b>Trash</b>: Trash is collected on Friday morning. Please take the trash out
          on Thursday night.
        </li>
        <li>
          <b>Washer/dryer</b>: The washer has its detergent pre-filled in the drawer on 
          the middle left. It will auto-dispense the detergent when you start the
          cycle.
        </li>
      </ul>

      <h2>Navigating New Orleans</h2>
      <p>
        The geography of New Orleans is tied to the Mississippi. The city snakes along
        the bend of the river, which lends itself to a unique way of describing locations.
        We don't tend to use words like "east" or "west"—instead we use the Mississippi
        as a reference point.
      </p>
      <p>
        We use the terms "upriver" and "downriver" for moving along the river. We
        use "riverside" and "lakeside" for closer to the Mississippi or Lake Pontchartrain.
        If you step outside the front door, you're facing downriver. Your left is
        lakeside, and to your right is riverside.
      </p>

      <h2>The Neighbourhood</h2>
      <p>
        We purposefully chose this home because it's equidistant to our favourite
        areas of the city. If you go downriver, you'll be in the Bywater. It's a 
        fun, old neighbourhood with a lot of character. If you go upriver, you'll walk
        through the rest of the Marigny, and then you'll be in the French Quarter.
      </p>

      <p>
        If you're walking into the French Quarter, we recommend walking along
        Royal St, Bourbon, or Dauphine. Some local spots that we enjoy (all of these
        should be within 10 minutes walking distance):
        <ul>
          <li>
            Coffee shops:
          </li>
          <ul>
            <li>
              <a href='https://maps.app.goo.gl/jdpSky4tZzB1u7o68'>Petit Clouet</a> - towards the Bywater, local classic spot
            </li>
            <li>
              <a href='https://maps.app.goo.gl/pfJEoNk71BkitNTR9'>Orange Couch</a> - heading towards the French Quarter
            </li>
            <li>
              <a href='https://maps.app.goo.gl/t67DrmBTa4Ad4r4L9'>Honey's</a> - heading lakeside, a great spot for breakfast
            </li>
          </ul>
          <li>
            Restaurants:
          </li>
          <ul>
            <li>
              <a href='https://maps.app.goo.gl/WyA3jExMoR4zKXy89'>Acamaya</a> - Mexican, was on the <a href='https://www.nytimes.com/interactive/2024/dining/best-restaurants-america.html#acamaya'>NYTimes list of best restaurants in America for 2024</a>
            </li>
            <li>
              <a href='https://maps.app.goo.gl/hZ2Qf4wGPbDHoJK59'>N7</a> - French-Japanese fusion in a beautiful outdoor setting
            </li>
            <li>
              <a href='https://maps.app.goo.gl/QbBBTZWgn9CKjjXG9'>St Roch Market</a> - food hall with a number of local vendors
            </li>
            <li>
              <a href='https://maps.app.goo.gl/CgJ7t4EhvCKQDzMM7'>Bratz Y'all</a> - German beergarden
            </li>

          </ul>
          <li>
            Bars:
          </li>
          <ul>
            <li>
              <a href='https://maps.app.goo.gl/wzheXRYLkVsbhShz7'>Pepp's Pub</a> - dog-friendly bar with a great whiskey selection
            </li>
            <li>
              <a href='https://maps.app.goo.gl/aPzSWcwcvey2Ps5z9'>Anna's</a> - high-diving hipster bar
            </li>
            <li>
              <a href='https://maps.app.goo.gl/DY54Ld3tPfj9BpuX8'>Nightbloom</a> - Bywater bar with a great selection of cocktails
            </li>
          </ul>
          <li>
            Stores:
          </li>
          <ul>
            <li>
              <a href='https://maps.app.goo.gl/s3ZgNgs2xHos3YMZA'>Grand Krewe</a> - wine store
            </li>
            <li>
              <a href='https://maps.app.goo.gl/GN2SSZzwU8qUs8PR6'>Robert's</a> - larger grocery store
            </li>
            <li>
              <a href='https://maps.app.goo.gl/7tC9hn4wjHj3Vp459'>Co-op</a> - community-owned grocery store with intentionally-sourced products
            </li>
          </ul>
        </ul>
      </p>


      <h2>Other Recommendations</h2>
      <p>
        The above are all within 5-10 minutes walking distance. There are, of course,
        many other great spots in the city. You can find more recommendations 
        <Link href="/city-guides/new-orleans">on the New Orleans page</Link>. 
      </p>
      </div>
    </main>
  );
}
