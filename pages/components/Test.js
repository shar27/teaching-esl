import React from 'react'
import Link from 'next/dist/client/link'

function Test() {
    return (
        <div className="container text-center">
            
           
           <p className="lead fw-bold text-primary"> Free English test here</p>
            <Link href= "https://app.tracktest.eu/registration?dh=teacheresl&embed=1"> 
            <a className="btn btn-primary">Click here</a>
            </Link>
    
        </div>
    )
}

export default Test
