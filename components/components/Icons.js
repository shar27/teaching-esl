import React from 'react'
import Image from 'next/image'


function Icons() {
    return (

<div className="flex justify-evenly ">
   

   <Image
   className='border-rounded'
       src="/device.png"
       height="200"
       width="200"
   />

<div className="mt-4 ">

<Image
       src="/calendar.png"
       height="200"
       width="200"
   />
   </div>
   

<Image
       src="/rating.png"
       height="200"
       width="200"
   />



        </div>
    )
}

export default Icons
