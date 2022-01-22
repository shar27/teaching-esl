import React from 'react'
import Mailchimp from 'react-mailchimp-form'
import FacebookIcon from '@mui/icons-material/Facebook';
import Logo from '../components/components/Logo'
import NavTwo from '../components/components/NavTwo'
import CookieConsent, { Cookies, resetCookieConsentValue } from "react-cookie-consent";
import { useForm } from '@formspree/react';
import Head from 'next/head'
import {useState} from 'react'

function ContactPage() {
  
  
  
  return (
        <div>
        <Head>
        <title>Contact me</title>
        <meta
        lang='en'
        name="google-site-verification" 
        content="width=device-width,initial-scale=1.0"
         description="Got questions, you can send me an email below and I will do my best to answer your questions."
        />
        <link rel="icon" href="https:teacher-esl.com/ContactPage" />
 

      </Head>

        <Logo/>

        <NavTwo/>
    
        <div>

            <h1 className="text-4xl text-center mt-20 font-bold">Got a question?</h1>
        <h3 className="text-center font-bold text-2xl">Enter your details below and i'll be in touch.</h3>
        </div>
        <div id= "#my-hubspot-form">
        
        <Mailchimp
        
        action={`https://${process.env.NEXT_PUBLIC_MAILCHIMP_PUBLIC_USERNAME}.${process.env.NEXT_PUBLIC_MAILCHIMP_PUBLIC_DOMAIN}.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_PUBLIC_POST}&amp;id=${process.env.NEXT_PUBLIC_MAILCHIMP_PUBLIC_ID}`}
        fields={[
          
            {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          },
          {
            name: 'FIRSTNAME',
            placeholder: 'First Name',
            type: 'text',
            required: true
          },
          {
            name: 'LASTNAME',
            placeholder: 'Last Name',
            type: 'text',
            required: true
          },

          {
            name: 'TEXTBOX',
            placeholder: 'Write your message here.',
            type: 'text',
            required: true
          },
          
            
        ]}
        messages = {
    {
      sending: "Sending...",
      success: "Thank you for your email, I'll be in touch soon!",
      error: "An unexpected internal error has occurred.",
      empty: "You must write an e-mail.",
      
      button: "Send!"
    }
  }
  className="contactform"
        />
        <p className="lead text-center">By hitting send you consent to me using your information for direct marketing purposes.<br/>Note: Your information will never be shared with anyone else.</p>
        <CookieConsent




location="bottom"
buttonText="Sure man!!"
cookieName="myAwesomeCookieName2"
style={{ background: "#2B373B" }}
buttonStyle={{ color: "white", fontSize: "13px", backgroundColor: "blue" }}
expires={150}
>
In compliance with GDPR do you accept my terms and privacy policy? And, do you accept that I may email you for marketing purposes?{" "}

</CookieConsent>

        </div>

        </div>
    )
}

export default ContactPage
