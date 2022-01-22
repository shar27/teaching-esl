import React from 'react'
import Link from 'next/dist/client/link'
import Logo from '../components/components/Logo'
import NavTwo from '../components//components/NavTwo'
import Contact from '../components/components/Contact'
import Head from 'next/head'

function Refunds() {
    return (
            
      <div>
      <Head>
      <title>Start learning to speak English today for free! - Learn to speak
          English with a British Native speaker.</title>
        <meta
        name="google-site-verification" 
        content="width=device-width,initial-scale=1.0"
        description="Not happy with your purchase? get in touch and i'll do my best to help you."
        />
         <link rel="icon" href="https:teacher-esl.com/Refunds" />
        </Head>
     
      <Logo/>
      <NavTwo/>
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
