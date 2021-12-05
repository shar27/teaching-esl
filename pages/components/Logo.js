import React from 'react'
import Image from 'next/image'

function Logo() {
    return (
        <div className="d-flex justify-content-center mt-4">
    <Image 
     src="/logo.png"
     width="200"
     height="100"
   />
        </div>
    )
}

export default Logo
