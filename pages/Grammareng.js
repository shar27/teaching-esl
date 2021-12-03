import React from 'react'
import Nav from './components/Nav'
import Link from 'next/dist/client/link'
import Head from 'next/dist/shared/lib/head'
import Image from 'next/dist/client/image'
import Dropbox from './components/Dropbox'

function Grammareng() {
    return (
        <div>
        <Head>
        <title>Grammar</title>
        <meta name="description" content="Learn the correct way to use English grammar." />
        <link rel="icon" href="/teachinglogo.png" />
        </Head>
        <Nav/>
        <h1 className="text-center fw-bold text-primary">Grammar</h1>
            <h3 className="text-center fw-bold text-primary">What does it mean?</h3>
            <div className="container">
            <h5 className="text-center text-primary fw-bold">Is Grammar your weak point?</h5>
            <p className="lead text-center">Do you find yourself using 'in' instead of 'on' when talking about days? Or do
            you find yourself using 'A/An/The' at the wrong times? Then this is the course for you. </p>
            <p className="lead text-center">Recommended for A2+</p>
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

export default Grammareng
