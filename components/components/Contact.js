import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs () {
  const form = useRef();

  const [text, setText] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_39bg1xq', 'template_p2m0anq', form.current, '_zvfCNAUf1DOGw6zi')
      .then((result) => {
          console.log(result.text);
        setText('Your email has been received, we will be in touch soon!')          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className=' w-full lg:w-2/5 border border-2 border-black h-xxl5 bg-white text-black p-5' ref={form} onSubmit={sendEmail}>
      <p className='text-red-500 font-bold text-center text-2xl'>{text}</p>
      <div>
      <label className='font-bold p-5'>Name</label>
      <input className='w-80 border-2 border-black mb-2' type="text" name="user_name" />
      </div>
      <div>
      <label className='font-bold p-5'>Email</label>
      <input className='w-80 border-2 border-black mb-2' type="email" name="user_email" />
      </div>
      <div>
      <label className='font-bold p-5'>Message</label>
      <textarea className='w-72 h-60 border border-2 border-black' name="message" />
      </div>
      <div className='text-center'>
      <input className='bg-cyan-400 p-8 h-20 cursor-pointer w-44 font-bold text-white text-xl rounded-md ' 
      type="submit" value="Send" />
      </div>
    </form>
  );
};