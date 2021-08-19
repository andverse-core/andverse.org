import React, { Suspense, useRef, Component } from 'react'
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
      <div id="page-home">
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
  title: '404 - Andromeda Metaverse',
  description: ''
}

function Main() {
  const ref = useRef()
  return (
    <main>
      <div id="starfield-focus"></div>
      <canvas id="starfield"></canvas>

      <div className="hero h-[75vh]">
        <div className="my-[25vh]">
          <h3>404 Not Found</h3>
        </div>
      </div>
    </main>
  )
}
