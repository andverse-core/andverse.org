import Head from 'next/head'
import { SITE_NAME, HOME_OG_IMAGE_URL } from 'lib/constants'

const Meta = () => {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <meta name="description" content={`${SITE_NAME}.`} />
    </Head>
  )
}

export default Meta
