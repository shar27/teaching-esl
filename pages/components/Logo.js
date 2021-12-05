import React from 'react'
import Image from 'next/image'

function Logo() {
    return (
        <div className="d-flex justify-content-center mt-4">
    <Image 
     src="/oldlogo.png"
     width="200"
     height="120"
   />
        </div>
    )
}

export default Logo
