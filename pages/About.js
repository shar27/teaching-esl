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
            <div className="col-sm-12 container   d-flex justify-content-center ">
        <Image
            className="rounded-circle"
            src ="/profile-warsaw.jpg"
            width="300"
            height="300"
            
            
        />
        <div className="bg-warning">

        </div>
        </div>
        <div className="container border border-white shadow">
        <div className="row">
        <div className="col-12">
        <h1 className="fw-bold display-5 col-sm-12 text-center mt-4">About me</h1>
        <p className="lead mt-4 text-center">Hello and welcome to my site. My name is Shar and I am from the UK. I was born and raised in a small
    town called High Wycombe. Currently I am based in Poznan, Poland. You see, I love traveling and I love exploring the unknown.
    If you already can't tell, a byproduct of traveling is learning a new language, a new way of thinking and an opportunity for growth.
    To date, I have visited 27 countries and I have lived in 3 of them.</p>

    </div>
  

    <div className="col-6">
    <h1 className="text-center fw-bold mt-4">Methods</h1>
    <p className="lead text-center">When teaching children I like to include TPR, props such as flashcards as well as fun and rewarding games to ensure the child/children are engaged. With adults, the focus is always on conversation practice, 
    I like to use a variety of techniques such as guided reading, videos and interesting topics.  </p>
</div>
<div className="col-6">
    <h1 className="text-center fw-bold mt-4">Qualifications</h1>
    <p className="lead text-center">I have a Bachelor's in Journalism which gives me an excellent command of the English Language, a 140 TEFL certificate completed with I-to-I and this year I will begin my level 5 diploma in education and training. 
    Upon it’s completion I’ll then have the QTLS.  </p>
</div>


    </div>
            </div>
        </div>
    )
}

export default About
