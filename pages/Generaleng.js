import React from 'react'
import Nav from './components/Nav'
import Link from 'next/dist/client/link'
import Head from 'next/dist/shared/lib/head'
import Image from 'next/dist/client/image'
import Dropbox from './components/Dropbox'
function Generaleng() {
    return (
        <div>
            <Head>
        <title>General English</title>
        <meta name="description" content="A general English course." />
        <link rel="icon" href="/teachinglogo.png" />
        </Head>
        <Nav/>
            <h1 className="text-center fw-bold text-primary">General English</h1>
            <h3 className="text-center fw-bold text-primary">What does it mean?</h3>
            <div className="container">
            <h5 className="text-center text-primary fw-bold">Is conversation your weak point?</h5>
            <p className="lead text-center">Do you find yourself searching for words when having a conversation in English?
            Or do you find yourself not being able to understand idioms, phrasal verbs like "off the top of my head" or "Add an insult to injury"?
            If yes, then this is the course for you. There are no limits to topics and there is no course end date.</p>
            <p className="lead text-center">Recommended for B1+</p>
            </div>



            <div>
            <h3 className="fw-bold text-center ms-2 text-primary">Want to know more?</h3>
            <p className="lead text-center ">Drop me an email and I will walk you through the steps.</p>
            <p className="lead text-center">Upload any files
            you wish to discuss with me below.</p>
            <div className="d-flex justify-content-center">
            <Link href="/#contact">
            <a className="btn btn-primary text-center">Contact me</a>
            </Link>
            </div>
            <Dropbox/>
        </div>
        </div>
    )
}

export default Generaleng
