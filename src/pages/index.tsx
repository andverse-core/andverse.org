import React, { Suspense, useRef, Component } from 'react'
import Head from 'next/head'
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'

import Image from 'next/image'
import Planet from 'assets/licensed/planet.png'
import Land from 'assets/licensed/lands.png'
import Buildings from 'assets/licensed/buildings.png'
import Avatars from 'assets/licensed/avatars.png'
import Galaxy from 'assets/licensed/galaxy.png'
import Shop from 'assets/licensed/shop.png'
import { SiteLogo } from 'icons'

import {
  SwitchHorizontalIcon,
  EyeOffIcon,
  StarIcon,
  UserIcon,
  ChipIcon,
  ScaleIcon,
  ShieldCheckIcon
} from '@heroicons/react/outline'

class Page extends Component {
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

export default Page

const pageSettings = {
  title: 'Andromeda Metaverse',
  description: ''
}

const featuresItems = [
  {
    name: 'Metaverse',
    icon: Galaxy,
    description:
      'Andromeda Metaverse(Andverse) brings new expericence to the next blockchain world to embrace a fully decentralized digital life.',
    animation: 'home-spin'
  },
  {
    name: 'Planet #3',
    icon: Planet,
    description:
      'Planets exist in the Andromeda Metaverse to be exploered. Planet #3 will be the first planet we are developing.'
  },
  {
    name: 'Lands',
    icon: Land,
    description:
      'Own lands and transform to a lake, build your own disctrict, create a park or build a museum on top of it.'
  },
  {
    name: 'Buildings',
    icon: Buildings,
    description:
      'Design your dream building, show it to others, display your collectibles inside, or rent a space to others to decorate their own.'
  },
  {
    name: 'Own A Shop',
    icon: Shop,
    description:
      'Your own shop to sell lands, buildings, avatars in the metaverse. Mint your own NFTs display and sell in the shop you owned.'
  },
  {
    name: 'DID & Avatars',
    icon: Avatars,
    description: 'Dencentralized Identity with customable avatar to create your own apperance in the next gen world.'
  }
]

const protocolsItems = {
  assets: [
    {
      name: 'Black Box NFT',
      description:
        'Blind box trading is a way to play around with avoiding trade matchmaking, increasing liquidity, and how to discover valuable NFTs. With the Andromeda Blind Box Protocol, a batch of NFTs can be sold against a batch of NFTs, and the user will not know the contents of the specific NFTs purchased until after the batch is sold.',
      icon: EyeOffIcon
    },
    {
      name: 'NFT Combinator',
      description:
        'Synthetic commodities are a combination of multiple NFTs to create a new NFT, which allows the NFT holder to program, recreate, and add some useful functionality to the NFT digital assets they hold. It can be used in the field of digital artwork signature, business contract signing, etc. The NFT holder licenses its NFT to a specific contract and locks it, inviting other NFT holders to recreate the NFT, casting a NFT digital asset with new characteristics.',
      icon: ChipIcon
    },
    {
      name: 'General Points',
      description:
        'Trading nodes can simply and quickly issue digital assets on the Andromeda Client side and maintain their own fan base through points operation. The reasonable release and application of points will drive the growth of the fan base and can maximize the interests of all parties.',
      icon: StarIcon
    }
  ],
  trading: [
    {
      name: 'Pricing & Trading',
      description:
        'The Pricing and Trading Protocol is an on-chain protocol that progressively discovers the value of NFTs and can provide the ability to trade NFTs between users, which consists of a combination of contracts.',
      icon: SwitchHorizontalIcon
    },
    {
      name: 'Proxy Trading',
      description:
        'Valuable assets on the chain make your inventory available to the world, allowing social resources to operate more transparently and efficiently. Upstream channel operators authorize their inventory NFT to a designated smart contract, and downstream distributors can access the inventory of that asset from the chain in real time.',
      icon: UserIcon
    },
    {
      name: 'Liquidity',
      description:
        'The NFT liquidity protocol is a protocol for converting low liquidity non-homogeneous tokens (NFT) into high liquidity homogeneous tokens (FT) through pooling (Pooling).',
      icon: ScaleIcon
    },
    {
      name: 'Decentralized Trust',
      description:
        'Instant Credit Protocol is an on-chain real-time credit enhancement protocol that enables physical point-to-point transactions by pledging digital assets to a smart contract at the beginning of the transaction for credit enhancement, and can also be used for reliable promissory notes for convertible NFTs.',
      icon: ShieldCheckIcon
    }
  ]
}

// function Loader() {
//   const { progress } = useProgress()
//   return <Html center>{progress}%</Html>
// }

function Main() {
  const ref = useRef()
  return (
    <main>
      <canvas id="starfield"></canvas>

      <div className="hero">
        <div className="my-[10vh]">
          {/* <SiteLogo className="w-40 text-white home-spin mb-8" /> */}
          <h3 className="" id="starfield-focus">
            Andverse<br/> is a decentralized <br/>multi Galaxy metaverse
          </h3>
        </div>
      </div>

      <Features />
      <Protocols />
      {/*<Roadmap />*/}
      {/* <Brands /> */}
    </main>
  )
}

function Features() {
  return (
    <div className="features">
      <div>
        <h2>
          Andromeda <span>Metaverse</span>
        </h2>
        <div className="content">
          {featuresItems.map(feature => (
            <div key={feature.name}>
              <div>
                <div>
                  <Image
                    src={feature.icon}
                    alt=""
                    layout="responsive"
                    className={feature.animation ? feature.animation : ''}
                  />
                </div>
                <h3>{feature.name}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Protocols() {
  return (
    <div className="protocols">
      <div>
        <div className="header">
          <h2>
            Andromeda <span>Protocols</span>
          </h2>
          <p>
            The Andromeda Metaverse commercial protocol has an unparalleled openness that facilitates trading and
            interoperability with various metaverse games and ecologies.
          </p>
        </div>

        <div className="content">
          <div>
            <h3>Assets Protocols</h3>
            <dl>
              {protocolsItems.assets.map(item => (
                <div key={item.name}>
                  <dt>
                    <div className="iconbox">
                      <item.icon className="icon" aria-hidden="true" />
                    </div>
                    <h4>{item.name}</h4>
                  </dt>
                  <dd>{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3>Trading Protocols</h3>
            <dl>
              {protocolsItems.trading.map(item => (
                <div key={item.name}>
                  <dt>
                    <div className="iconbox">
                      <item.icon className="icon" aria-hidden="true" />
                    </div>
                    <h4>{item.name}</h4>
                  </dt>
                  <dd>{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
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
                <p>Land Mint (Mint Round: #1)</p>
                <p>Protocols Development</p>
                <p>Andverse World Infrastructure Development</p>
                <p>3D Assets Open Co-operation</p>
                <p>Andverse Resource Mining</p>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location"></div>
              <div className="cd-timeline-content">
                <h3>2022 Q1</h3>
                <p>Land Mint (Mint Round: #2)</p>
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
                <p>Multi-Network Support</p>
                <p>MMO Players Link Launch</p>
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

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location"></div>
              <div className="cd-timeline-content">
                <h3>2023</h3>
                <p>Programmable Assets Protocols</p>
                <p>Interactive Protocols</p>
                <p>Gaming Experience</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

// function Brands() {
//   return (
//     <div>
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
//         <p className="text-center text-3xl sm:text-4xl font-semibold uppercase text-white tracking-wider">Partners</p>
//         <div className="mt-6 grid grid-cols-4 gap-1 md:grid-cols-8 lg:mt-8">
//           <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"></div>
//           <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"></div>
//           <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"></div>
//           <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"></div>
//           <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"></div>
//           <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"></div>
//           <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"></div>
//           <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"></div>
//         </div>
//       </div>
//     </div>
//   )
// }
