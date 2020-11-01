import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>malrase dot com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="home">
        Michael Lintorn-Catlin is an engineering manager at Rent the Runway, where he enjoys building close and high-functioning teams. When he's not working, he likes making cocktails, watching horror movies, and reading. 
        He currently lives in New York City with his husband, <Link href="https://hcatlin.com">Hampton</Link>. 
      </main>
    </>
  )
}
