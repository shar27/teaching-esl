import React from 'react'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

function Icons() {
    return (

<div className="flex justify-evenly bg-black ">
   
<Fade left>
   <Image
   className='border-rounded'
       alt="something"
       src="/device.png"
       height="200"
       width="200"
   />
   </Fade>

<div className="mt-4 ">
<Fade top>
<Image
       alt="something"
       src="/calendar.png"
       height="200"
       width="200"
   />
   </Fade>
   </div>
   
<Fade right>
<Image
       alt="something"
       src="/rating.png"
       height="200"
       width="200"
   />
   </Fade>


        </div>
    )
}

export default Icons
