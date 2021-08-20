import Head from 'next/head'
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import Image from 'next/image'
import Shop from 'assets/licensed/shop.png'

function Page() {
  return (
    <div id="Page">
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
  title: 'Market - Andromeda Metaverse',
  description: ''
}

function Main() {
  return (
    <main>
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-6xl items-center justify-center flex flex-col">
        <div className="my-[10vh]">
          <h2 className="text-3xl">Marketplace will be here soon!</h2>
          <Image src={Shop} alt="" layout="responsive" />
          <p className="px-6 py-3 bg-gray-500 bg-opacity-25 rounded-xl">Images above are concept preview</p>
        </div>
      </div>
    </main>
  )
}
