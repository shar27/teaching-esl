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
<br/>
<div className="container d-flex justify-content-center mt-4 border border-white shadow ">
<div className="row">
<div className="card col-sm-12 col-lg-4 text-center border border-white shadow">
<h5 className="card-title text-center fw-bold p-2 col-sm-12">Single</h5>
  <div className="card-body">
  <Image
        className="mt-4"
        src="/phone.png"
        width = "300"
        height ="200"
    />
    <h6 className="card-subtitle  text-muted">30 minutes</h6>
    <ul className="list-unstyled col-xs-12">
        <li>World class teacher</li>
        <li>Flexible schedule</li>
        <li>Pay as you go</li>
        <li>Free cancelation within 24 hours</li>
        <br/>
        <Link href="https://buy.stripe.com/eVa3fqc3N72adMI146">
        <a className="btn btn-warning fw-bold text-white mt-3">Pay now</a>
        </Link>
    </ul>
  </div>
</div>
<div className="card col-sm-12 col-lg-4 text-center border border-white shadow ">
<h5 className="card-title text-center fw-bold p-2 ">Single</h5>
  <div className="card-body">
  <Image
        src="/singlecallnew.png"
        width = "200"
        height ="200"
    />
    <h6 className="card-subtitle  text-muted">60 minutes</h6>
    <ul className="list-unstyled">
        <li>World class teacher</li>
        <li>Flexible schedule</li>
        <li>Pay as you go</li>
        <li>Free cancelation within 24 hours</li>
       <br/>
        <Link href="https://buy.stripe.com/6oE8zKc3N1HQ6kg8wx">
               <a className="btn btn-warning fw-bold text-white mt-3">Pay now</a>
        </Link>
    </ul>
  </div>
</div>

<div className="card col-sm-12 col-lg-4 text-center border border-white shadow ">
<h5 className="card-title text-center fw-bold p-2">Group lesson</h5>
  <div className="card-body">
    <Image
        src="/groupcall.png"
        width = "200"
        height ="200"
    />
    <h6 className="card-subtitle mb- ms-4 text-muted">60 minutes</h6>
    <ul className="list-unstyled">
        <li>World class teacher</li>
        <li>Flexible schedule</li>
        <li>Pay as you go</li>
        <li>Free cancelation within 24 hours</li>
        <br/>
        <Link href="https://buy.stripe.com/fZe4juc3NcmucIEeV0">
        <a className="btn btn-warning fw-bold text-white mt-3">Pay now</a>
        </Link>
    </ul>
  </div>
  
</div>

<h1 className="text-center fw-bold text-dark mt-4 mb-4">Packages</h1>
<div className="card col-sm-12 col-lg-4 text-center border border-white shadow ">
<h5 className="card-title text-center fw-bold p-2">Single x 4</h5>
  <div className="card-body">
    <Image
        src="/phone.png"
        width = "300"
        height ="220"
    />
    <h6 className="card-subtitle mb-2 ms-4 text-muted">30 minutes</h6>
    <ul className="list-unstyled">
        <li>World class teacher</li>
        <li>Flexible schedule</li>
        <li>Pay as you go</li>
        <li>Free cancelation within 24 hours</li>
        <Link href="https://buy.stripe.com/5kAcQ0aZJfyGaAwaEH">
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
    <h6 className="card-subtitle mb-2 ms-4 text-muted">60 minutes</h6>
    <ul className="list-unstyled">
        <li>World class teacher</li>
        <li>Flexible schedule</li>
        <li>Pay as you go</li>
        <li>Free cancelation within 24 hours</li>
        <Link href="https://buy.stripe.com/fZecQ05Fp0DM6kgfZ3">
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
    <h6 className="card-subtitle mb-2 ms-4 text-muted">60 minutes</h6>
    <ul className="list-unstyled">
        <li>World class teacher</li>
        <li>Flexible schedule</li>
        <li>Pay as you go</li>
        <li>Free cancelation within 24 hours</li>
        <Link href="https://buy.stripe.com/28o3fq0l5euCeQMdQU">
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
