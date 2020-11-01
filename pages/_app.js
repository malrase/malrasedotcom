import "../styles/global.scss";
import Footer from "./components/footer";
import Head from "next/head";
import Header from "./components/header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto" />
      </Head>
      <Header/>
      <Component {...pageProps}/>
      <Footer/>
    </>
  )
}