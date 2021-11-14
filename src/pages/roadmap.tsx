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
                <p>1. Andverse market launched</p>
                <p>2. Land Mint Round #1</p>
                <p>3. Build the 2D/3D map of Andverse Planet #3</p>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location"></div>
              <div className="cd-timeline-content">
                <h3>2022 Q1</h3>
                <p>1. World Environment & Buildings Development</p>
                <p>2. Lands-Estates Manager Launch</p>
                <p>3. New Andverse Map Generator</p>
                <p>4. 3D Assets Market</p>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location"></div>
              <div className="cd-timeline-content">
                <h3>2022 Q2</h3>
                <p>1. Andverse World 3D Dev Preview</p>
                <p>2. Andverse World 1.0 Launch, with VR support</p>
                <p>3. 3D Assets Manager</p>
                <p>4. Andverse 3D Buildings Growth</p>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location"></div>
              <div className="cd-timeline-content">
                <h3>2022 Q3</h3>
                <p>1. MMO Players Link Launch</p>
                <p>2. DID Standard</p>
                <p>3. Avatar Market Launch</p>
                <p>4. Custom Avatars</p>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location"></div>
              <div className="cd-timeline-content">
                <h3>2022 Q4</h3>
                <p>1. Andverse World API & SDK Release</p>
                <p>2. DAO Launch</p>
                <p>3. Andverse World Builder DApp</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
