import React from 'react'
import Link from 'next/dist/client/link'
import Logo from '../components/components/Logo'
import Nav from '../components//components/Nav'
import Contact from '../components/components/Contact'


function Refunds() {
    return (
            
      <div>
      <Logo/>
      <Nav/>
      <div className="container text-center">
      <h1 className="display-5 text-center">Refund policy</h1>
   
      <h2 className="text-center">Single lessons</h2>
        <h3 className="text-center">No refunds for lessons that have been cancelled within 24 hours of the class start time.</h3>

        <h1>Packages</h1>
        <h2>Refunds will be issued on a case by case basis.</h2>
        <h3>For more information contact me below.</h3>
        <Contact/>
        </div>
        </div>
    )
}

export default Refunds
