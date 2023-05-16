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
        He likes <Link href="https://instagram.com/malrase">making cocktails</Link>, <Link href="https://letterboxd.com/malrase/">watching horror movies</Link>, and <Link href="https://www.goodreads.com/user/show/6233721-michael-lintorn-catlin">reading</Link>. By day, he works on the Appointments product at Square. By night, he visits bars. He lives in New York City with his husband, Hampton. 
      </main>
    </>
  )
}
