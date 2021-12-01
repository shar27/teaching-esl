import React from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'
import Dropbox from './Dropbox'
import styles from './styles/Intro.module.css'


function Intro() {
    return (
        <div className="container">
        <div className="row">
        <div className="col-sm-12 col-lg-12 p-2 border border-white shadow text-center bg-warning text-white ">
           <h1 className="text-center fw-bold text-white ">Learn English online with a British native speaker</h1>
           <p className="text-center lead ">Learning with a native speaker is crucial to taking your understanding to the
           next level. Working with a native is far different as the only common language we have is English and that means you need to 
           really push yourself.</p> 
           
           <br/>
           <br/>
           <br/>
           <br/>
           <Link href="/Courses">
           <a className="btn btn-primary  mb-4">Read more</a>
           </Link>
           
           
           </div>   
          
        <div className="col-sm-12 col-lg-12 border border-white shadow me-2 bg-primary">
        
        <h1 className="text-center text-dark mt-4 fw-bold text-white">Free proofreading from a British native speaker.</h1>
        <br/>
           
           <br/>
           <br/>
        <p className="lead text-center text-white fw-bold">* Note: if you have something longer than a paragraph then please email me first. </p>
        <Dropbox/>
           </div> 
           <div className="col-sm-12 col-lg-12  border border-white shadow text-center bg-warning">
           <h1 className="text-center text-light fw-bold mt-4">Private lessons for children.</h1>
           <br/>
           <br/>
           <br/>
           <br/>
           <p className="text-center lead text-light fw-bold">Our education systems simply aren't designed to get the best out of our children 
           when it comes to learning a foreign language. That's why many of us left school barely able to speak what we had learnt 
           for a decade. It's best to get a head start now before it's too late.</p>
           <p className="lead text-light text-center fw-bold">Check out my pricing page for more information.</p>
           
           <br/>
           
           
           
            <Link href="/Pricing">
           <a className="btn btn-primary mb-4">Learn more</a>
        </Link>
           
        </div>
        </div>
        </div>
    )
}

export default Intro
