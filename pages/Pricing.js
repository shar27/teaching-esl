import React from 'react'
import Nav from './components/Nav'
import Image from 'next/dist/client/image'
import Link from 'next/link'

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
<h5 className="card-title text-center fw-bold p-2">Individual</h5>
  <div className="card-body">
  <Image
        src="/singlecallnew.png"
        width = "200"
        height ="200"
    />
    <h6 className="card-subtitle mb-2 text-muted">30 minutes</h6>
    <ul className="list-unstyled">
        <li>World class teacher</li>
        <li>Flexible schedule</li>
        <li>Pay as you go</li>
        <li>Free cancelation within 24 hours</li>
        <Link href="https://buy.stripe.com/eVa3fqc3N72adMI146">
        <a className="btn btn-warning fw-bold text-white">Pay now</a>
        </Link>
    </ul>
  </div>
</div>
<div className="card col ms-4 text-center">
<h5 className="card-title text-center fw-bold p-2">Individual</h5>
  <div className="card-body">
  <Image
        src="/singlecallnew.png"
        width = "200"
        height ="200"
    />
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
<h5 className="card-title text-center fw-bold p-2">Group lesson</h5>
  <div className="card-body">
    <Image
        src="/groupcall.png"
        width = "200"
        height ="200"
    />
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
