import Head from 'next/head'
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import Image from 'next/image'
import Galaxy from 'assets/licensed/galaxy.png'

function Page() {
  return (
    <div id="explorer">
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

export default Page

const pageSettings = {
  title: 'Explorer - Andromeda Metavers',
  description: ''
}

function Main() {
  return (
    <main>
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-6xl items-center justify-center flex flex-col">
        <div className="my-[10vh]">
          <Image src={Galaxy} alt="" layout="responsive" className="home-spin" />
          <h3 className="text-3xl">Metaverse Explorer will be here soon!</h3>
        </div>
      </div>
    </main>
  )
}
