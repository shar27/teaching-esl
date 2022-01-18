import React from 'react'
import Image from 'next/image'

function Logo() {
    return (
        <div className="flex justify-center mb-4 mt-4 bg-none">
    <Image
    alt="logo"
    className= 'rounded-3xl object-contain' 
     src="/head.png"
     width="200"
     height="200"
   />
 
        </div>
    )
}

export default Logo
