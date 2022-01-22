import { createClient } from 'contentful'
import Posts from '../components/Posts'
import Nav from '../components/components/Nav'
import Logo from '../components/components/Logo'
import Head from 'next/head'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const res = await client.getEntries({ content_type: "posts" })

  return {
    props: {
      posts: res.items,
    },
    revalidate: 1
  }
}

export default function Blogs({ posts }) {
  console.log(posts)

  return (
  
    <div className='overscroll-contain'>
    <Head>
        <title>Start learning to speak English today for free! - Learn to speak
          English with a British Native speaker.</title>
        <meta
        lang="en"
        name="google-site-verification" 
        content="blog page for learning english"
         description="Read for more best free tips to learn English, Learning by yourself can be tough so read on to learn."
        />
        <link rel="icon" href="/head.png" />
 

      </Head>
    <Logo/>
    <Nav/>
    <h1 className='text-6xl font-serf font-bold  text-center mb-20 mt-20'>English learning tips 101</h1>
      <div className="grid grid-rows-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {posts.map(post => (
        <Posts key={post.sys.id} post={post} />
      ))}
</div>
     
    </div>
  )
}