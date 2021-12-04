import React from 'react'
import Link from 'next/dist/client/link'
import FadeIn from 'react-fade-in';
import Head from 'next/head'

function Test() {
    return (
        <>
        <Head>
        <link
        href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
        rel="stylesheet"
      />
      </Head>
      
        <div className="container text-center  mb-4">
            
           <FadeIn delay="50">
           <p className="lead fw-bold text-white"> Free English test here</p>
           <p className="lead fw-bold text-white mt-4">A quick free 10 minute test that will help you determine your English level. </p>
            <Link href= "https://app.tracktest.eu/registration?dh=teacheresl&embed=1"> 
            <a className="btn btn-primary mb-4">Click here</a>
            </Link>
    </FadeIn>
        </div>
        </>
    )
}

export default Test
