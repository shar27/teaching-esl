import React from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'
import Dropbox from './Dropbox'

function Intro() {
    return (
        <div className="container">
        <div className="row">
        <div className="col-sm-12 col-lg-4 p-2 border border-white shadow text-center ">
           <h1 className="text-center fw-bold text-dark ">Learn English online with a British native speaker</h1>
           <p className="text-center lead ">Learning with a native speaker is crucial to taking your understanding to the
           next level. Working with a native is far different as the only common language we have is English and that means you need to 
           really push yourself.</p> 
           
           <br/>
           <br/>
           <br/>
           <br/>
           <Link href="/Courses">
           <a className="btn btn-primary mt-4">Read more</a>
           </Link>
           </div>   
          
        <div className="col-sm-12 col-lg-4 border border-white shadow">
        
        <h2 className="text-center text-dark fw-bold ">Free proofreading from a British native speaker.</h2>
        <br/>
           
           <br/>
           <br/>
        <p className="lead text-muted text-center fw-bold">* Note: if you have something longer than a paragraph then please email me first. </p>
        <Dropbox/>
           </div> 
           <div className="col-sm-12 col-lg-4 border border-white shadow text-center">
           <h1 className="text-center text-dark fw-bold">Private lessons for children.</h1>
           <br/>
           <br/>
           <br/>
           <br/>
           <p className="text-center lead">Our education systems simply aren't designed to get the best out of our children 
           when it comes to learning a foreign language. That's why many of us left school barely able to speak what we had learnt 
           for a decade. It's best to get a head start now before it's too late.</p>
           <p className="lead text-muted text-center fw-bold">Check out my pricing page for more information.</p>
           
           <br/>
           
           
           
            <Link href="/Pricing">
           <a className="btn btn-primary">Learn more</a>
        </Link>
           
        </div>
        </div>
        </div>
    )
}

export default Intro
