import React from 'react'
import Image from 'next/image'

function Logo() {
    return (
        <div className="d-flex justify-content-center">
    <Image 
     src="/teachinglogo.png"
     width="225"
     height="225"
   />
        </div>
    )
}

export default Logo
