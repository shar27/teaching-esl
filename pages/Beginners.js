import React from 'react'
import Nav from './components/Nav'
import Link from 'next/dist/client/link'
import Head from 'next/dist/shared/lib/head'
import Image from 'next/dist/client/image'
import Dropbox from './components/Dropbox'

function Beginners() {
    return (
        <div>
        <Head>
        <title>Beginner course</title>
        <meta name="description" content="A beginners course for learning english." />
        <link rel="icon" href="/teachinglogo.png" />
        </Head>
        <Nav/>
             <h1 className="text-center fw-bold text-primary">Beginners English</h1>
            <h3 className="text-center fw-bold text-primary">What does it mean?</h3>
            <div className="container">
            <h5 className="text-center text-primary fw-bold">Is your English level really low?</h5>
            <p className="lead text-center">Do you find yourself understanding some things but often feeling confused and stressed?
            Did you learn in school but never practiced or have you never learnt any English but you want to try? Then this is the 
            course for you.</p>
            <p className="lead text-center">The lessons are fun, engaging and practical.</p>
            <p className="lead text-center">Recommended for only beginners</p>
            </div>
            <div>
            <h3 className="fw-bold text-center ms-2 text-primary">Want to know more?</h3>
            <p className="lead text-center ">Drop me an email and I will walk you through the steps.</p>
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

export default Beginners
