import React from 'react'
import Nav from './components/Nav'
import Logo from './components/Logo'
import Image from 'next/dist/client/image'
import Head from 'next/dist/shared/lib/head'
import styles from "../styles/Home.module.scss";


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
            
        
      
        
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,96L120,106.7C240,117,480,139,720,128C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,160L120,138.7C240,117,480,75,720,74.7C960,75,1200,117,1320,138.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    
    <div className="container">
        <div className="row">
        <h1 className="fw-bold display-5 col-sm-12 text-center mt-4">About me</h1>
        <p className="lead mt-4 text-center">Hello and welcome to my site. My name is Shar and I am from the UK. I was born and raised in a small
    town called High Wycombe. Currently I am based in Poznan, Poland. You see, I love travelling and I love exploring the unknown.
    a byproduct of travelling is learning a new language, a new way of thinking and an opportunity for growth.
    To date, I have visited 27 countries and I have lived in 3 of them.</p>

    
 
    <div className="col-6">
    <h1 className="text-center fw-bold mt-4">Methods</h1>
    <p className="lead text-center">When teaching children I like to include TPR, props such as flashcards as well as fun and rewarding games to ensure the child/children are engaged. With adults, the focus is always on conversation practice, 
    I like to use a variety of techniques such as guided reading, videos and interesting topics.  </p>
</div>
<div className="col-6">
    <h1 className="text-center fw-bold mt-4">Qualifications</h1>
    <p className="lead text-center">I have a Bachelor's in Journalism which gives me an excellent command of the English Language, a 140-hour TEFL certificate completed with I-to-I and over 1000 hours of teaching as well as a top tutor rating on a few of the big platforms.</p>
</div>



</div>

    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,96L120,106.7C240,117,480,139,720,128C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>

    </div>

    )
}

export default About
