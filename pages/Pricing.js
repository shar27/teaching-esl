import React from 'react'
import Nav from './components/Nav'
import Image from 'next/dist/client/image'
import {FcReadingEbook} from 'react-icons/Fc'
import Link from 'next/link'
import {FcConferenceCall} from 'react-icons/Fc'
function Pricing() {
    return (
        <div>
           <Nav/>
<br/>
<br/>
<br/>
<br/>
<div className="container d-flex justify-content-center mt-4">
<div className="row">
<div className="card col text-center">
<h5 className="card-title text-center fw-bold">Individual</h5>
  <div className="card-body">
    <FcReadingEbook size={96}/>
    <h6 className="card-subtitle mb-2 text-muted">60 minutes</h6>
    <ul className="list-unstyled">
        <li>World class teacher</li>
        <li>Flexible schedule</li>
        <li>Pay as you go</li>
        <li>Free cancelation within 24 hours</li>
        <Link href="https://buy.stripe.com/6oE8zKc3N1HQ6kg8wx">
        <a className="btn btn-warning fw-bold text-white">Pay now</a>
        </Link>
    </ul>
  </div>
</div>
<div className="card col ms-4 text-center">
<h5 className="card-title text-center fw-bold">Group lesson</h5>
  <div className="card-body">
    <FcConferenceCall size={96}/>
    <h6 className="card-subtitle mb-2 ms-4 text-muted">60 minutes</h6>
    <ul className="list-unstyled">
        <li>World class teacher</li>
        <li>Flexible schedule</li>
        <li>Pay as you go</li>
        <li>Free cancelation within 24 hours</li>
        <Link href="https://buy.stripe.com/9AQ6rCd7R0DMeQMaEE">
        <a className="btn btn-warning fw-bold text-white">Pay now</a>
        </Link>
    </ul>
  </div>
</div>

</div>
</div>  
</div>
    )
}

export default Pricing
