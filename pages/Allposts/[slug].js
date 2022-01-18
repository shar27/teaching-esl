import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import Nav from '../../components/components/Nav'
import Logo from '../../components/components/Logo'
import Head from 'next/head'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "posts" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'posts',
    'fields.slug': params.slug
  }) 

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    }
  }

  return {
    props: { post: items[0] },
    revalidate: 1
  }
}

export default function Allposts({ post }) {
  

  const { featuredImage, title, information } = post.fields

  return (
    <div>
    <Head>
        <title>post</title>
        <meta
        name="google-site-verification" 
        content="post"
         
        />
        <link rel="icon" href="/head.png" />
 

      </Head>
    <Logo/>
    <Nav/>
      <div className="banner">
        <Image 
        alt="something"
          src={'https:' + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
        <h2 className='text-4xl font-bold'>{ title }</h2>
      </div>

     
        
      <div className="method">
        <h3 className='text-4xl font-bold font-serif mb-20 text-center'>Method:</h3>
        <div className='container ml-10 text-2xl'>{documentToReactComponents(information)}</div>
      </div>

      <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
    </div>
  )
}