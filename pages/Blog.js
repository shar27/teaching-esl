import { createClient } from 'contentful'
import Posts from '../components/Posts'
import NavTwo from '../components/components/NavTwo'
import Logo from '../components/components/Logo'
import Head from 'next/head'


//prerender page at build time
export async function getStaticProps() {
//connect to cms
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
//get the data
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
  
    <div className=''>
    <Head>
        <title>Start learning to speak English today for free! - Learn to speak
          English with a British Native speaker.</title>
        <meta
        lang="en"
        name="google-site-verification" 
        content="width=device-width,initial-scale=1.0"
         description="Read for more best free tips to learn English, Learning by yourself can be tough so read on to learn."
        />
       <link rel="mainlogo" href="https:teacher-esl.com/Blog" />
 

      </Head>
   
    <Logo/>
    <NavTwo/>
    
    <h1 className='text-6xl font-serif font-bold  text-center mb-20 mt-20'>English learning tips 101</h1>
      <div className=" overscroll-y-none grid grid-rows-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4">
      {posts.map(post => (
        <Posts key={post.sys.id} post={post} />
      ))}
</div>
    
    </div>
  )
}