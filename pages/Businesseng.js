import React from 'react'
import Nav from './components/Nav'
import Link from 'next/dist/client/link'
import Head from 'next/dist/shared/lib/head'
import Image from 'next/dist/client/image'
import Dropbox from './components/Dropbox'

function Businesseng() {
    return (
        <div>
            <Head>
        <title>Business English</title>
        </Head>
        <Nav/>
            
            <h1 className="text-center fw-bold text-primary">Business English</h1>
            <h3 className="text-center fw-bold text-primary">What does it mean?</h3>
            <div className="container">
            <h5 className="text-center text-primary fw-bold">Is Business English your weak point?</h5>
            <p className="lead text-center">Do you find yourself searching for words when sitting in meetings in English?
            or do you find yourself not being able to communicate clearly to your international clients. Do you
            struggle to understand idioms and phrasal verbs like "We need a winner" or "get by."
            if yes, then this is the course for you, we will follow a structured course that has an end point.</p>
            <p className="lead text-center">Recommended for B1+</p>
            </div>




            <div>
            <h3 className="fw-bold text-center ms-2 text-primary">How can I help?</h3>
            <p className="lead text-center ">Drop me an email and I will walk you through the steps</p>
            <div className="d-flex justify-content-center">
            <Link href="/#contact">
            <a className="btn btn-primary text-center">Contact me</a>
            </Link>
            </div>
            <p className="lead text-center">Upload any files
            you wish to discuss with me below.</p>
            <Dropbox/>
        </div>
        </div>
        
    )
}

export default Businesseng
