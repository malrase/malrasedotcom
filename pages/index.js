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
        You have found the personal site for Michael Lintorn-Catlin.
        He likes <Link href="https://instagram.com/malrase">making cocktails</Link>, 
        <Link href="https://letterboxd.com/malrase/">watching horror movies</Link>, 
        and <Link href="https://app.thestorygraph.com/profile/malrase">reading</Link>. 
        By day, he works at Block as an engineering lead. By night, he reads and visits bars. 
        He splits his time between New York City and New Orleans with his husband, Hampton. 
      </main>
    </>
  )
}
