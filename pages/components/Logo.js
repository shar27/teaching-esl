import React from 'react'
import Image from 'next/image'

function Logo() {
    return (
        <div className="d-flex justify-content-center">
    <Image 
     src="/teachinglogo.png"
     width="200"
     height="200"
   />
        </div>
    )
}

export default Logo
