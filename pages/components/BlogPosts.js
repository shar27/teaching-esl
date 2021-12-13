import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'
import Logo from './Logo'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function BlogPosts({post }) {
   
   const {title, information,slug , thumbnail} = post.fields
   
    return (
        <div>
        
      
            <div className='container w-50 h-25 mt-4'>
                <Image
                    className='nav' 
                    src={'https:' + thumbnail.fields.file.url}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                />
            </div>
            <div>
                <div>
                    <h4 className=''>{title}</h4>
                    <Link href={'/contentslug/' + slug}>
                        <a className='btn btn-primary text-white'>Read more</a>
                    </Link>
                </div>
            
            </div>
        <style jsx>{`
        .nav {
          height: 100px;
         width: 100px;
        }
      `}</style>
          
        </div>
    )
}
