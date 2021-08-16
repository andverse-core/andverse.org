import Head from 'next/head'
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'

function Market() {
  return (
    <div id="market">
      <Head>
        <title>{pageSettings.title}</title>
        <meta name="description" content={pageSettings.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Market

const pageSettings = {
  title: 'Market - Andromeda Metavers',
  description: ''
}

function Main() {
  return (
    <main>
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-6xl items-center justify-center flex flex-col">
        <div className="my-[30vh]">
          <h3 className="text-3xl">Marketplace will be here soon!</h3>
        </div>
      </div>
    </main>
  )
}
