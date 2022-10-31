import Head from 'next/head'
import Header from '../components/header'
import SideNav from '../components/sidenav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Header />
      <div className="flex overflow-hidden pt-12">
        <SideNav />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
