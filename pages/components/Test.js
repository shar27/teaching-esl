import React from 'react'
import Link from 'next/dist/client/link'
import FadeIn from 'react-fade-in';


function Test() {
    return (
        <div className="container text-center border border-white shadow mb-4">
            
           <FadeIn delay="50">
           <p className="lead fw-bold text-primary"> Free English test here</p>
           <p className="lead fw-bold text-primary">A quick free 10 minute test that will help you determine your English level. </p>
            <Link href= "https://app.tracktest.eu/registration?dh=teacheresl&embed=1"> 
            <a className="btn btn-primary mb-4">Click here</a>
            </Link>
    </FadeIn>
        </div>
    )
}

export default Test
