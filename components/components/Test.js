import React from 'react'
import Link from 'next/dist/client/link'
import Fade from 'react-reveal/Fade';
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
      
        <div className="container text-center p-4 border-2 ">
            
           <Fade top>
           <p className="text-4xl font-bold text-white"> Free English test here</p>
           <p className="text-4xl font-bold text-white mt-4 mb-4">A quick free 10 minute test that will help you determine your English level. </p>
            <p className='text-2xl font-bold mb-10'>Don't forget to upload your results.</p>
            <Link href= "https://app.tracktest.eu/registration?dh=teacheresl&embed=1"> 
            <a className="rounded-md bg-blue-500 text-white p-2 font-bold mt-6">Click here</a>
            </Link>
    </Fade>
        </div>
        </>
    )
}

export default Test
