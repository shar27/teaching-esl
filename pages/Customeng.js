import React from 'react'
import Nav from './components/Nav'
import Link from 'next/dist/client/link'
import Head from 'next/dist/shared/lib/head'
import Image from 'next/dist/client/image'
import Dropbox from './components/Dropbox'

function Customeng() {
    return (
        <div>
          <Head>
        <title>IELTS</title>
        <meta name="description" content="Learn how to pass the IELTS." />
        <link rel="icon" href="/teachinglogo.png" />
        </Head>
        <Nav/>
            <h1 className="text-center fw-bold text-primary">Custom English</h1>
            <h3 className="text-center fw-bold text-primary">What does it mean?</h3>
            <div className="container">
            <h5 className="text-center text-primary fw-bold">Are you interested in learning the english for something specific?</h5>
            <p className="lead text-center">Perhaps there is a topic that you are interested for example: 'Emotional intelligence', 
            'Science' or 'IT'. Then this is the course for you, you pick the topic and you bring your topic to the lesson and we our way through it.
           </p>
            <p className="lead text-center">Recommended for B2+ students</p>
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

export default Customeng
