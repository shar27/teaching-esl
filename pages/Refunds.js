import React from 'react'
import Link from 'next/dist/client/link'
import Nav from '../components/components/Nav'
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
     <Nav/>
      
      <div className="container text-center">
      <h1 className="display-5 text-center">Refund policy</h1>
   
      <h2 className="text-center">PDF Course</h2>
        
        
        <h2>Refunds will be issued on a case by case basis.</h2>
        <h3>For more information contact me below.</h3>
        <Contact/>
        </div>
        </div>
    )
}

export default Refunds
