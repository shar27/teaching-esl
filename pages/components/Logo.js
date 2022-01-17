import React from 'react'
import Image from 'next/image'

function Logo() {
    return (
        <div className="flex justify-center mb-4 mt-4 bg-none">
    <Image 
     src="/oldlogo.png"
     width="200"
     height="120"
   />
        </div>
    )
}

export default Logo
