import Head from 'next/head'
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import Image from 'next/image'
// import Galaxy from 'assets/explorer/galaxy.jpg'
// import WorldMap from 'assets/explorer/worldmap.jpg'
import Explorer010 from 'assets/explorer/explorer-0.1.0.jpg'

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
const panelStyle = {
  margin: "50px 0 0 0"
}

function Main() {
  return (
    <main>
      <div className="mx-auto max-w-md py-[10vh] px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-6xl items-center justify-center flex flex-col">
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <div>
            <div className="max-w-md">
              <Image src={Explorer010} alt="" layout="intrinsic" className="rounded-full hover:animate-pulse" />
            </div>
            <h3 className="text-xl uppercase"> &nbsp; </h3>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl">Andverse Explorer Testnet</h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
            <p className="text-left">Web: <a className={'text-green-500'}  href="https://play.testnet.andverse.org/">https://play.testnet.andverse.org/</a></p>
            <p className="text-left">Desktop Client: <a className={'text-green-500'}  href="https://github.com/andverse-core/explorer-desktop-launcher/releases/tag/v0.1.46">https://github.com/andverse-core/explorer-desktop-launcher/releases/tag/v0.1.46</a></p>
        </div>

        <div className="grid grid-cols-1 gap-6" style={panelStyle}>
            
            <div>
                <h2 className="text-3xl">Demo for NFT, VR</h2>
            </div>
            
            <div className="max-w-md">
                <a href={'https://sandbox.andverse.org/'}>
                    <p className="m-6 px-6 py-3 bg-green-400 rounded-xl text-white">3D demo with nft</p>
                </a>
                <a href={'https://demo.andverse.org'}>
                    <p className="m-6 px-6 py-3 bg-green-400 rounded-xl text-white">3D demo with VR</p>
                </a>
            </div>

            <div className="flex flex-col">
                <p className={'max-w-md'}>
                    (Currently supports oculus devices, if you have any problems with other devices, please give us feedback
                    through the{' '}
                    <a className={'text-green-500'} href={'/community'}>
                        community
                    </a>
                    .)
                </p>
            </div>
        </div>
      </div>
    </main>
  )
}
