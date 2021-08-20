import Head from 'next/head'
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import Image from 'next/image'
import Galaxy from 'assets/explorer/galaxy.jpg'
import WorldMap from 'assets/explorer/worldmap.jpg'

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
  title: 'Explorer - Andromeda Metaverse',
  description: ''
}

function Main() {
  return (
    <main>
      <div className="mx-auto max-w-md py-[10vh] px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-6xl items-center justify-center flex flex-col">
        <div className="mb-12">
          <h2 className="text-3xl">Metaverse Explorer will be here soon!</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="max-w-md">
              <Image src={Galaxy} alt="" layout="intrinsic" className="rounded-full hover:animate-pulse" />
            </div>
            <h3 className="text-xl uppercase">Space Map</h3>
          </div>

          <div>
            <div className="max-w-md">
              <Image src={WorldMap} alt="" layout="intrinsic" className="rounded-full hover:animate-pulse" />
            </div>
            <h3 className="text-xl uppercase">Land Map</h3>
          </div>
        </div>

        <div className="flex">
          <p className="m-6 px-6 py-3 bg-gray-500 bg-opacity-25 rounded-xl">Images above are concept preview</p>
        </div>
      </div>
    </main>
  )
}
