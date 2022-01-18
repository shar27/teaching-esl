import React from 'react'
import Link from 'next/link'
import Head from 'next/dist/shared/lib/head'
import Image from 'next/image'

function Nav() {
    return (
    <div>
  

<ul  className="nav flex justify-center text-black font-serif font-bold">
<li className="nav-item">
  <Link  href="/">
    <a  className="nav-link fw-bold m-2 p-1  pe-auto text-primary">Home</a>
    </Link>
  </li>
  <li className="nav-item">
  <Link  href="#About">
    <a  className="nav-link fw-bold m-2 p-1  pe-auto text-primary">About me</a>
    </Link>
  </li>
  <li className="nav-item">
  <Link href="/Blog"> 
    <a className="nav-link fw-bold m-2 p-1 text-primary">Blog</a>
  </Link>
  </li>
  <li className="nav-item">
  <Link href="/Pricing"> 
    <a className="nav-link fw-bold m-2 p-1 text-primary" >Pricing</a>
  </Link>
  </li>
  
  <li className="nav-item">
  <Link href="/ContactPage"> 
    <a className="nav-link fw-bold m-2 p-1  text-primary">Contact</a>
    </Link>
 </li>
</ul>

</div>
    )
}

export default Nav
