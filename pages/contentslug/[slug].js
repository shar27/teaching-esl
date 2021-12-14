import Image from  'next/image'
import {createClient} from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link'


const client = createClient({
  space: 'jxldfokvm8mx',
  accessToken: '5hp4V3bBnRAZlG-v_CfuQzvMUlvekhUhX6R8Cx4FdKI',
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

export async function getStaticProps({params}) {
  const {items} = await client.getEntries({
      content_type: 'posts',
      'fields.slug': params.slug
  })

return {
  props: {posts: items[0]},
  revalidate: 1
}

}



export default function BlogPosts({ posts}) {

    const {featuredImage, title , information } = posts.fields

    return (
        <div className="container">

        <div className="container w-50 mt-4 mb-4">
            <Image
                src={'https:' + featuredImage.fields.file.url}
                width={featuredImage.fields.file.details.image.width}
                height={featuredImage.fields.file.details.image.height}
            />
        </div>
        <div className='text-start container lead'>
            {documentToReactComponents(information)}
            <div className='container  text-center mb-5'>
              <Link href="/Posts">
                <a className='btn btn-primary fw-bold text-white'>Go back</a>
              </Link>
            </div>
        </div>
        </div>
    )
}




