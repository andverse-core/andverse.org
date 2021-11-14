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
          <div className={"item"}>
            <a href={"https://discord.gg/6GrtYCvY"}>
              <svg width="116" height="116" viewBox="0 0 116 116" fill="#515151" xmlns="http://www.w3.org/2000/svg">
                <path d="M58 116C90.0325 116 116 90.0325 116 58C116 25.9675 90.0325 0 58 0C25.9675 0 0 25.9675 0 58C0 90.0325 25.9675 116 58 116Z" fill="url(#paint0_linear)"/>
                <path d="M82.258 35.3934C77.7964 33.3599 73.012 31.8617 68.0097 31.0036C67.9186 30.987 67.8276 31.0284 67.7807 31.1112C67.1654 32.1983 66.4838 33.6165 66.0065 34.7312C60.6262 33.931 55.2735 33.931 50.0034 34.7312C49.5261 33.5917 48.8197 32.1983 48.2017 31.1112C48.1547 31.0312 48.0637 30.9898 47.9726 31.0036C42.9731 31.8589 38.1887 33.3571 33.7244 35.3934C33.6857 35.41 33.6526 35.4376 33.6306 35.4734C24.5557 48.9408 22.0697 62.0772 23.2893 75.0507C23.2948 75.1142 23.3307 75.1749 23.3803 75.2135C29.3677 79.5812 35.1675 82.2328 40.8596 83.9903C40.9507 84.018 41.0472 83.9849 41.1052 83.9103C42.4516 82.0838 43.6519 80.158 44.681 78.1327C44.7417 78.0141 44.6837 77.8733 44.5596 77.8264C42.6558 77.109 40.843 76.2344 39.0992 75.2411C38.9613 75.1611 38.9502 74.9652 39.0771 74.8713C39.4441 74.5982 39.8111 74.314 40.1615 74.027C40.2249 73.9746 40.3133 73.9636 40.3878 73.9967C51.8437 79.1922 64.2462 79.1922 75.5669 73.9967C75.6415 73.9608 75.7298 73.9719 75.796 74.0243C76.1465 74.3112 76.5134 74.5982 76.8831 74.8713C77.01 74.9652 77.0017 75.1611 76.8638 75.2411C75.12 76.2537 73.3072 77.109 71.4007 77.8237C71.2765 77.8706 71.2213 78.0141 71.2821 78.1327C72.3332 80.1551 73.5335 82.081 74.8551 83.9076C74.9103 83.9849 75.0096 84.018 75.1007 83.9903C80.8204 82.2328 86.6201 79.5812 92.6075 75.2135C92.66 75.1749 92.6931 75.117 92.6986 75.0535C94.1582 60.0547 90.2539 47.026 82.349 35.4762C82.3296 35.4376 82.2966 35.41 82.258 35.3934ZM46.3917 67.1512C42.9427 67.1512 40.1008 64.0059 40.1008 60.143C40.1008 56.2802 42.8876 53.1348 46.3917 53.1348C49.9234 53.1348 52.7378 56.3078 52.6826 60.143C52.6826 64.0059 49.8958 67.1512 46.3917 67.1512ZM69.6514 67.1512C66.2024 67.1512 63.3605 64.0059 63.3605 60.143C63.3605 56.2802 66.1472 53.1348 69.6514 53.1348C73.1831 53.1348 75.9974 56.3078 75.9423 60.143C75.9423 64.0059 73.1831 67.1512 69.6514 67.1512Z" fill="white"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="53.4249" y1="33.9942" x2="103.547" y2="162.175" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#515151"/>
                    <stop offset="1" stopColor="#515151"/>
                  </linearGradient>
                </defs>
              </svg>
              <text>Discard</text>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
