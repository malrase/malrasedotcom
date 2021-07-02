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
        Michael Lintorn-Catlin loves discovering hidden parts of the world that other people haven’t noticed. He likes <Link href="https://instagram.com/malrase">making cocktails</Link>, <Link href="https://letterboxd.com/malrase/">watching horror movies</Link>, and <Link href="https://www.goodreads.com/user/show/6233721-michael-lintorn-catlin">reading</Link>. By day, he builds teams. By night, he visits bars (when there’s not a global pandemic going on). He lives in New York City with his husband, <Link href="https://hcatlin.com">Hampton</Link>. 
      </main>
    </>
  )
}
