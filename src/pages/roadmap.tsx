import React, { useRef, Component } from 'react'
import Head from 'next/head'
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'

class Home extends Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.async = true
    script.src = '/assets/sf-init.js'
    document.body.appendChild(script)
  }

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
                <h3>2021 Q4</h3>
                <p>Andverse market launched</p>
                <p>Land Mint Round #1</p>
                <p>Build the 2D/3D map of Andverse Planet #3</p>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location"></div>
              <div className="cd-timeline-content">
                <h3>2022 Q1</h3>
                <p>World Environment & Buildings Development</p>
                <p>Lands-Estates Manager Launch</p>
                <p>New Andverse Map Generator</p>
                <p>3D Assets Market</p>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location"></div>
              <div className="cd-timeline-content">
                <h3>2022 Q2</h3>
                <p>Andverse World 3D Dev Preview</p>
                <p>Andverse World 1.0 Launch, with VR support</p>
                <p>3D Assets Manager</p>
                <p>Andverse 3D Buildings Growth</p>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location"></div>
              <div className="cd-timeline-content">
                <h3>2022 Q3</h3>
                <p>MMO Players Link Launch</p>
                <p>DID Standard</p>
                <p>Avatar Market Launch</p>
                <p>Custom Avatars</p>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location"></div>
              <div className="cd-timeline-content">
                <h3>2022 Q4</h3>
                <p>Andverse World API & SDK Release</p>
                <p>DAO Launch</p>
                <p>Andverse World Builder DApp</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
