import Container from 'docs-comps/container'
import MoreStories from 'docs-comps/more-stories'
import Layout from 'docs-comps/layout'
import { getAllPosts } from 'lib/api'
import Head from 'next/head'
import { SITE_NAME } from 'lib/constants'
import Post from 'types/post'

type Props = {
  allPosts: Post[]
}

const DocsHome = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(0)
  return (
    <>
      <Layout>
        <Head>
          <title>Documentation | {SITE_NAME}</title>
        </Head>
        <Container>
          <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">Documentation</h1>
          </section>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default DocsHome

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return {
    props: { allPosts }
  }
}
