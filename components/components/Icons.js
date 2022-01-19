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
       src="/phonecall.png"
       height="250"
       width="250"
   />
   </Fade>

<div className="mt-4 ">
<Fade top>
<Image
       alt="something"
       src="/newcal.png"
       height="250"
       width="250"
   />
   </Fade>
   </div>
   
<Fade right>
<Image
       alt="something"
       src="/ranking.png"
       height="250"
       width="250"
   />
   </Fade>


        </div>
    )
}

export default Icons
