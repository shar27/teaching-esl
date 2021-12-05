import React from 'react'
import Mailchimp from 'react-mailchimp-form'
import Logo from './components/Logo'
import Nav from './components/Nav'

function ContactPage() {
    return (
        <div>
        <Logo/>

        <Nav/>
        <div>
        <h1 className="display-5 text-center">Got a question?</h1>
        <h3 className="text-center">Enter your details below and i'll be in touch.</h3>
        </div>
        <div className="d-flex justify-content-center border border-white mt-4 col-12 col-sm-12 col-lg-12 input-group">
        
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
            name: 'First name',
            placeholder: 'First name',
            type: 'text',
            required: true
            },
            {
            name: 'Last name',
            placeholder: 'Last name',
            type: 'text',
            required: true
            },
            {
            name: 'text',
            placeholder: 'write your text here',
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
        </div>
        </div>
    )
}

export default ContactPage
