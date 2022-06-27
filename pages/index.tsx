import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Yunus' Reddit Clone</title>
      </Head>

      {/* PostBox */}
      <PostBox />

      <div>{/* Feed */}</div>


    </div>
  )
}

export default Home
