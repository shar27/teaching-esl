import React from 'react'
import Mailchimp from 'react-mailchimp-form'
import Logo from './components/Logo'
import Nav from './components/Nav'
import CookieConsent, { Cookies, resetCookieConsentValue } from "react-cookie-consent";

function ContactPage() {
    return (
        <div>
        <Logo/>

        <Nav/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,96L120,106.7C240,117,480,139,720,128C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,160L120,138.7C240,117,480,75,720,74.7C960,75,1200,117,1320,138.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>

        <div>
        <h1 className="display-5 text-center">Got a question?</h1>
        <h3 className="text-center">Enter your details below and i'll be in touch.</h3>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,96L120,106.7C240,117,480,139,720,128C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>

        </div>
    )
}

export default ContactPage
