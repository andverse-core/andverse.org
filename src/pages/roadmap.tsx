import React, { useRef, Component } from 'react'
import Head from 'next/head'
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'

class Home extends Component {
  render() {
    return (
      <div id="page-roadmap">
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
}

export default Home

const pageSettings = {
  title: 'RoadMap - Andromeda Metaverse',
  description: ''
}

const CheckIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="green">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function Main() {
  const ref = useRef()
  return (
    <main>
      <div id="starfield-focus"></div>
      <canvas id="starfield"></canvas>
      <div className="container">
        <Roadmap />
      </div>
    </main>
  )
}

function Roadmap() {
  return (
    <div className="roadmap">
      <div>
        <h2>Roadmap</h2>
        <div className="content">
            <section id="cd-timeline" className="cd-container">
                
                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-location"></div>
                    <div className="cd-timeline-content">
                        <h3>2021</h3>
                        <p>
                            1. Planet #3 Map launched <CheckIcon />
                        </p>
                        <p>
                            2. Land Mint Round #1 <CheckIcon />
                        </p>
                        <p>
                            3. Lands-Estates Manager Launched <CheckIcon />
                        </p>
                    </div>
                </div>

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-location"></div>
                    <div className="cd-timeline-content">
                        <h3>2022</h3>
                        <p>
                            1. Andverse Explorer-Web v0.1.0 Testnet launched <CheckIcon />
                        </p>
                        <p>
                            2. Andverse Explorer-Desktop(Windows/MacOS) v0.1.0 Testnet launched <CheckIcon />
                        </p>
                    </div>
                </div>

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-location"></div>
                    <div className="cd-timeline-content">
                        <h3>2023</h3>
                        <p>Focus on andverse civilization I</p>
                        <p>1. DID Standard</p>
                        <p>2. Explorer-Web Mainnet launch</p>
                        <p>3. Andverse Explorer-Desktop(Windows/MacOS)  Mainnet launch</p>
                        <p>4. Market Launch</p>
                        <p>5. Andverse SDK Release</p>
                        <p>6. DAO Launch</p>
                        <p>7. Andverse Studio Release</p>

                        <p>8. Build brand/IP metaverse</p>
                        <p>9. Accerate the trade of digital assets</p>
                        <p>10. Content Building such as AV, Live Streaming</p>
                        
                    </div>
                </div>


                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-location"></div>
                    <div className="cd-timeline-content">
                        <h3>2024</h3>
                        <p>1. Explorer-Mobile(iOS/Android) Release</p>
                        <p>2. Explorer-VR Release</p>
                        <p>3. Game Engine Release</p>
                        <p>4. AI/ML Support</p>
                    </div>
                </div>



          </section>
        </div>
      </div>
    </div>
  )
}
