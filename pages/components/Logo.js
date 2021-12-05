import React from 'react'
import Image from 'next/image'

function Logo() {
    return (
        <div className="d-flex justify-content-center mt-4">
    <Image 
     src="/logo.png"
     width="220"
     height="150"
   />
        </div>
    )
}

export default Logo
