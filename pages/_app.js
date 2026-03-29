import "../styles/global.scss";
import Footer from "./components/footer";
import Head from "next/head";
import Header from "./components/header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
        <script defer src="https://analytics.lin.cat/script.js" data-website-id="91e1f7a9-1907-4ba5-9faa-b38dbcb0b9d4"></script>
      </Head>
      <Header/>
      <Component {...pageProps}/>
      <Footer/>
    </>
  )
}