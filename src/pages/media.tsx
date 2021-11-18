import Head from 'next/head'
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import Image from 'next/image'
import Galaxy from 'assets/explorer/galaxy.jpg'
import WorldMap from 'assets/explorer/worldmap.jpg'

function Page() {
  return (
    <div id="page-media">
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
  title: 'Media - Andromeda Metaverse',
  description: ''
}

function Main() {
  return (
    <main>
      <div className="h-full pb-96 mx-auto max-w-md py-[10vh] px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-6xl justify-center flex flex-col">
        <div className="mb-12">
          <h2 className="text-3xl">Media</h2>
        </div>
        <div className={'content'}>
          <ul>
            <li>
              <a className={'text-green-500'} href={'https://andverse.oss-cn-beijing.aliyuncs.com/Andverse.key'}>
                [Download] Andverse KeyNote
              </a>
            </li>
            <li>
              <a className={'text-green-500'} href={'https://andverse.oss-cn-beijing.aliyuncs.com/Andverse.pdf'}>
                [Download] Andverse PDF
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
