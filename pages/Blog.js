import {ApolloClient, InMemoryCache, gql} from '@apollo/client';


export default function Blog({posts}) {
    console.log('posts', posts);
    return (
        <div>
           {posts.map(post => {
               <p>{post.heading}</p>
           })}

           
        </div>
    )
}


export const getStaticProps =  async () => {

    

    const client = new ApolloClient({
        url: 'http://localhost:1337/graphql/',
        cache: new InMemoryCache()
    });
    
  const { data } = await client.query ({
      query: gql `
      
      query GetPosts {
        posts{
        data{
        attributes {
            heading
        }
        }
      }
    }
    
      
      `
  });

    return {
        props: {
            posts: data.posts(1)
        }
    }
}