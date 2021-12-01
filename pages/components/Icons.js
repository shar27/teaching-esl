import React from 'react'
import Image from 'next/image'


function Icons() {
    return (

<div className="d-flex justify-content-evenly col-sm-12 col-md-12">
   

   <Image
       src="/multidevice.png"
       height="300"
       width="300"
   />

<div className="mt-4 ">

<Image
       src="/freetime.png"
       height="300"
       width="300"
   />
   </div>
   

<Image
       src="/thumbs.png"
       height="300"
       width="300"
   />



        </div>
    )
}

export default Icons
