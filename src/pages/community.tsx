import Head from 'next/head'
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import Image from 'next/image'
import Galaxy from 'assets/explorer/galaxy.jpg'
import WorldMap from 'assets/explorer/worldmap.jpg'

function Page() {
  return (
    <div id="page-community">
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
  title: 'Community - Andromeda Metaverse',
  description: ''
}

function Main() {
  return (
    <main>
      <div className="mx-auto max-w-md py-[10vh] px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-6xl items-center justify-center flex flex-col">
        <h2>Wayfinding</h2>
        <text>The following are our most frequented and updated communication channels. You name it, we’ve got it!</text>
        <div className={"community-container"}>
          <div className={"item"}>
            <Image src={Galaxy} layout={'responsive'}/>
            <text>Telegram</text>
            <text> Members</text>
          </div>
          <div className={"item"}>
            <Image src={Galaxy} layout={'responsive'}/>
            <text>Telegram</text>
            <text> Members</text>
          </div>
          <div className={"item"}>
            <Image src={Galaxy} layout={'responsive'}/>
            <text>Telegram</text>
            <text> Members</text>
          </div>
          <div className={"item"}>
            <Image src={Galaxy} layout={'responsive'}/>
            <text>Telegram</text>
            <text> Members</text>
          </div>
          <div className={"item"}>
            <Image src={Galaxy} layout={'responsive'}/>
            <text>Telegram</text>
            <text> Members</text>
          </div>
        </div>
      </div>
    </main>
  )
}
