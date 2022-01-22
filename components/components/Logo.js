import React from 'react'
import Image from 'next/image'

function Logo() {
    return (
        <div className="flex justify-center mb-4 mt-4 bg-none">
    <Image
    alt="logo"
    title="learn english for free logo"
    className= 'rounded-3xl object-contain' 
     src="/mainlogo.png"
     width="200"
     height="200"
   />
 
        </div>
    )
}

export default Logo
