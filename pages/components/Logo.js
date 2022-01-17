import React from 'react'
import Image from 'next/image'

function Logo() {
    return (
        <div className="flex justify-center mb-4 mt-4 bg-none">
    <Image
    className='bg-red-500 rounded-3xl' 
     src="/headphones.png"
     width="100"
     height="100"
   />
        </div>
    )
}

export default Logo
