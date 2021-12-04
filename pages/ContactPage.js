import React from 'react'
import Mailchimp from 'react-mailchimp-form'
import Logo from './components/Logo'
import Nav from './components/Nav'

function ContactPage() {
    return (
        <div>
        <Logo/>

        <Nav/>
        <div className="d-flex justify-content-center border border-white mt-4 col-12 col-sm-12 col-lg-12 input-group">
        <Mailchimp
        action={`https://${process.env.MAILCHIMP_PUBLIC_USERNAME}
        .${process.env.MAILCHIMP_PUBLIC_DOMAIN}
        .list-manage.com/subscribe/post?u=${process.env.MAILCHIMP_PUBLIC_POST};
        id=${process.env.MAILCHIMP_PUBLIC_ID}`}
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
            
        ]}
        messages = {
    {
      sending: "Sending...",
      success: "Thank you for subscribing!",
      error: "An unexpected internal error has occurred.",
      empty: "You must write an e-mail.",
      duplicate: "Too many subscribe attempts for this email address",
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
