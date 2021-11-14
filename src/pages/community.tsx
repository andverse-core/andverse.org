import Head from 'next/head'
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import Telegram from 'assets/community/telegram.png'
import Github from 'assets/community/github.png'
import Medium from 'assets/community/medium.png'
import Twitter from 'assets/community/twitter.png'

import Image from 'next/image'

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
        <h2 className={"text-3xl"}>Community</h2>
        <div className={"community-container"}>
          <div className={"item"}>
            <a href={"https://t.me/andromedametaverse"}>
              <Image src={Telegram} width={50} height={50} className={"icon"}/>
              <text>Telegram Channel</text>
            </a>
          </div>
          <div className={"item"}>
            <a href={"https://t.me/andverseGlobal"}>
              <Image src={Telegram} width={50} height={50} className={"icon"}/>
              <text>Telegram Group</text>
            </a>
          </div>
          <div className={"item"}>
            <a href={"https://github.com/andverse-core"}>
              <Image src={Github} width={50} height={50}  className={"icon"}/>
              <text>Github</text>
            </a>
          </div>
          <div className={"item"}>
            <a href={"https://twitter.com/andverseoffical"}>
              <Image src={Twitter} width={50} height={50} className={"icon"}/>
              <text>Twitter</text>
            </a>
          </div>
          <div className={"item"}>
            <a href={"https://medium.com/@andverse"}>
              <Image src={Medium} width={50} height={50}  className={"icon"}/>
              <text>Medium</text>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
