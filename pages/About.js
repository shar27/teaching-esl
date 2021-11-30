import React from 'react'
import Nav from './components/Nav'
import Logo from './components/Logo'
import Image from 'next/dist/client/image'
import Head from 'next/dist/shared/lib/head'

function About() {
    return (
        <div>
        <Head>
        <title>About me</title>
        <meta name="description" content="A little bit about me and what I offer" />
        <link rel="icon" href="/teachinglogo.png" />
        </Head>
        <Logo/>
            <Nav/>
            <div className="container">
        <Image
            className="rounded-circle col-sm-12"
            src ="/profile-warsaw.jpg"
            width="300"
            height="300%"
        />
        <h1 className="fw-bold display-5 col-sm-12 text-center">About me</h1>
        <p className="lead mt-4 text-center">Hello and welcome to my site. My name is Shar and I am from the UK. I was born and raised in a small
    town called High Wycombe. Currently I am based in Poznan, Poland. You see, I love traveling and I love exploring the unknown.
    If you already can't tell, a byproduct of traveling is learning a new language, a new way of thinking and an opportunity for growth.
    To date, I have visited 27 countries and I have lived in 3 of them.</p>
    <h1 className="text-center fw-bold">Experience</h1>
    <p className="lead text-center">I have taught over 1000 students and with this knowledge I am able to quickly identify any issues. Once identified I can make 
a plan to help you overcome this.</p>
            </div>
        </div>
    )
}

export default About
