import React from 'react'
import Nav from './components/Nav'
import Link from 'next/dist/client/link'
import Head from 'next/dist/shared/lib/head'
import Image from 'next/dist/client/image'
import Dropbox from './components/Dropbox'

function Ielts() {
    return (
        <div>
        <Head>
        <title>Ielts</title>
        <meta name="description" content="Learn how to ace the IELTS" />
        <link rel="icon" href="/teachinglogo.png" />
        </Head>
        <Nav/>
            <h1 className="text-center fw-bold text-primary">IELTS</h1>
            <h3 className="text-center ms-2 fw-bold text-primary">What is IELTS?</h3>
            <div className="text-start">
        <p className="lead text-center">The International English Language Testing System (IELTS) <br/>
        is the world’s most popular English language proficiency test for higher education and global migration.</p>
        <div>
            <h3 className="fw-bold text-center ms-2 text-primary">Who can take it ?</h3>
            <h2 className="text-center ms-2">Anyone!</h2>
        </div>
        <div>
            <h3 className="fw-bold text-center ms-2 text-primary">Why should I take it ?</h3>
            <p className="lead text-center ">More than 11,000 organisations globally trust IELTS, so when you take the test you can be confident that it is recognised by educational institutions, employers, governments and professional bodies around the world.

As one of the pioneers of four skills English language testing 30 years ago, IELTS continues to set the standard for English language testing today. Governments in Australia, Canada, New Zealand and the United Kingdom use IELTS to process immigration applications.</p>
        </div>
        <div>
            <h3 className="fw-bold text-center ms-2 text-primary">How does it work ?</h3>
            <p className="lead text-center ">IELTS has been developed by some of the world’s leading language assessment experts 
            and will test the full range of English skills needed for success in your new job or study placement abroad.</p>

<h3 className="text-center fw-bold text-primary">You’ll be assessed on the following elements:</h3>
<ul className="text-center fw-bold list-unstyled">
<li>Listening</li>
<li>Reading</li>
<li>Writing</li>
<li>Speaking</li>
</ul>
        </div>
        <div>
            <h3 className="fw-bold text-center ms-2 text-primary">How can I help?</h3>
            <p className="lead text-center ">Drop me an email and I will walk you through the steps</p>
            <div className="d-flex justify-content-center">
            <Link href="/#contact">
            <a className="btn btn-primary text-center">Contact me</a>
            </Link>
            </div>
            </div>
            <p className="lead text-center">Upload any files
            you wish to discuss with me below.</p>
            <Dropbox/>
        </div>
        </div>
    )
}

export default Ielts
