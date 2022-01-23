import React from 'react'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

function Icons() {
    return (

<div className="flex justify-evenly bg-regal-blue ">
   
<Fade left>
   <Image
   className='border-rounded'
       alt="call me now for a lesson"
       title="learn english online for free"
       src="/phonecall.png"
       height="250"
       width="250"
   />
   </Fade>

<div className="mt-4 ">
<Fade top>
<Image
       alt="flexible schedule"
       title="flexible learnings"
       src="/newcal.png"
       height="250"
       width="250"
   />
   </Fade>
   </div>
   
<Fade right>
<Image
       alt="learn english with your phone"
       title="learn english with your phone"
       src="/ranking.png"
       height="250"
       width="250"
   />
   </Fade>


        </div>
    )
}

export default Icons
