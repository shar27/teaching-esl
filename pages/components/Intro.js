import React from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'
import Dropbox from './Dropbox'





function Intro() {
    return (
        <div className="container">
        <div className="row">
        <div className="col-sm-12 col-lg-6 p-2 border border-white shadow text-center d-flex justify-content-start ">
        <h1 className="text-start fw-bold  ">Learn English online with a British native speaker</h1>
        
           <Image
           
            src="/lesson.jpg"
            width="900"
            height="900"  
            
           />
           
           </div>   
          
      <div className="col-lg-6 col-sm-12">
      <br/>
      <br/>
      <br/>
      <br/>
      <p className="text-start lead col-sm-12">Learning with a native speaker is crucial to taking your understanding to the
           next level. Working with a native is far different as the only common language we have is English and that means you need to 
           really push yourself.</p> 
      <div className="bg-info border border-5 w-100 h-100 rounded-circle">
      
      </div>
      </div>

        <div className="col-sm-12 col-lg-12 border border-white shadow me-2 ">
        
        <h1 className="text-center mt-4 "><span class="badge bg-danger">New </span>Free proofreading from a British native speaker.</h1>
        
           
           <br/>
           <br/>
        <p className="lead text-center  fw-bold">* Note: if you have something longer than a paragraph then please email me first. </p>
        <Dropbox/>
        <div className="bg-warning w-100 h-100 rounded-circle border border-5">
      
      </div>
           </div> 
           
        
     
 
 <div className="col-sm-12 col-lg-6 border border-white shadow d-flex justify-content-end ">
 <h1 className="fw-bold mt-2">Private lessons for children.</h1>            
           <Image
              src="/kidlearning.jpg"
              width= "900"
              height= "800"
           />

           
        </div>        
<div className="col-lg-6 col-sm- 4 text-center  ">
<br/>
<br/>
<br/>
<br/>
<p className="lead p-2 col-sm-12  ">Our education systems simply aren't designed to get the best out of our children 
   when it comes to learning a foreign language. That's why many of us left school barely able to speak what we had learnt 
   for a decade. It's best to get a head start now before it's too late.</p>
</div>

        </div>
        </div>
    )
}

export default Intro
