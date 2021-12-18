import {createClient} from 'contentful'
import BlogPosts from './components/BlogPosts'
import Nav from './components/Nav'
import Logo from './components/Logo'


export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

const res = await client.getEntries({content_type: 'posts'})

return {
  props: {
    posts: res.items ,
    revalidate: 1
  }
}


}



export default function Home({posts}) {
 console.log(posts);
  
  return (
    
    <div>
     <Logo/> 
    <Nav/>
    <div className="container text-center display-5">
   {posts.map(post => (
    <BlogPosts key={post.sys.id} post={post}/>
           
   ))}

</div>
    </div>
  )
}





