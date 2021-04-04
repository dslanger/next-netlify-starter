import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/7c6af98b79.js" crossorigin="anonymous"></script>
        <link
            rel="preload"
            href="/fonts/metropolis/Metropolis-Regular.woff"
            as="font"
            crossOrigin=""
          />
      </Head>

      <main>
        <Header />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
