import React from 'react'
import Nav from './components/Nav'
import Image from 'next/dist/client/image'
import Link from 'next/link'
import Head from 'next/head'
import Logo from './components/Logo'

function Pricing() {
    return (


<div>
<Head>
<meta name="description" content="Pricing page for English lessons."/>
<title>Pricing</title>
</Head>
<Logo/>
           <Nav/>
<br/>
<br/>
<br/>
<h1 className="text-center fw-bold text-dark">Pay as you learn.</h1>
<h2 className="text-center fw-bold text-dark">Single lesson's can be booked through the calendar on the home page.</h2>
<div className="d-flex justify-content-center">
<Link href="/#contact">
<a className="btn btn-primary text-white fw-bold">Click here</a>
</Link>
</div>
<br/>
<div className="container d-flex justify-content-center mt-4  border border-white shadow ">
<div className="row">

<h1 className="text-center fw-bold text-dark mt-4 mb-4">Packages</h1>
<div className="card col-sm-12 col-lg-4  text-center border border-white shadow ">
<h5 className="card-title text-center fw-bold p-2">Single x 4</h5>
  <div className="card-body">
    <Image
        src="/phone.png"
        width = "200"
        height ="200"
    />
    <h6 className="card-subtitle mb-2 ms-4 text-muted text-center">30 minutes</h6>
    <ul className="list-unstyled">
        <li>World class teacher</li>
        <li>Flexible schedule</li>
        <li>Pay as you go</li>
        <li>Free cancellation within 24 hours</li>
        <Link href="https://buy.stripe.com/28o5ny7NxdqydMIdQY">
        <a className="btn btn-warning fw-bold text-white mt-4">Pay now</a>
        </Link>
    </ul>
  </div>
 </div>
 <div className="card col-sm-12 col-lg-4 text-center border border-white shadow">
<h5 className="card-title text-center fw-bold p-2">Single x 4</h5>
  <div className="card-body">
    <Image
        src="/singlecall.png"
        width = "200"
        height ="200"
    />
    <h6 className="card-subtitle mb-2 ms-4 text-muted text-center">60 minutes</h6>
    <ul className="list-unstyled">
        <li>World class teacher</li>
        <li>Flexible schedule</li>
        <li>Pay as you go</li>
        <li>Free cancellation within 24 hours</li>
        <Link href="https://buy.stripe.com/fZe6rC0l51HQfUQ007">
        <a className="btn btn-warning fw-bold text-white mt-4">Pay now</a>
        </Link>
    </ul>
  </div>
  
</div>
<div className="card col-sm-12 col-lg-4 text-center border border-white shadow">
<h5 className="card-title text-center fw-bold p-2">Group lesson x 4</h5>
  <div className="card-body">
    <Image
        src="/groupcall.png"
        width = "200"
        height ="200"
    />
    <h6 className="card-subtitle mb-2 ms-4 text-muted text-center">60 minutes</h6>
    <ul className="list-unstyled">
        <li>World class teacher</li>
        <li>Flexible schedule</li>
        <li>Pay as you go</li>
        <li>Free cancellation within 24 hours</li>
        <Link href="https://buy.stripe.com/00gg2cc3NeuC384aEN">
        <a className="btn btn-warning fw-bold text-white mt-4">Pay now</a>
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
