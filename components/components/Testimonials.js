import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Fade from 'react-reveal/Fade';


const slideImages = [
    
    {
      url: '/class.png',
      caption: '"Shar is a competent teacher who conducts classes in a professional manner.  Lessons are conducted in a way that uses online learning opportunities, thanks to which the student effectively improves his language skills.Shar to kompetentny nauczyciel, który w profesjonalny sposób prowadzi zajęcia. Lekcje prowadzone są w sposób wykorzystujący możliwości nauki online, dzięki czemu uczeń skutecznie podnosi swoje umiejętności językowe."',
      source: 'Marcin, from Poznan.',
      rating: '⭐⭐⭐⭐⭐'
    },  {
      url: '/class.png',
      caption: '"Great to work with"',
      source: 'Agnieszka, from Poznan.',
      rating: '⭐⭐⭐⭐⭐'
    },  {
      url: '/class.png',
      caption: '"Shar has taught me a lot and it is because of him why I was able to pass Googles digital marketing course"',
      source: 'Stas, from Poznan.',
      rating: '⭐⭐⭐⭐⭐'
    },  {
      url: '/class.png',
      caption: '"Each lesson is just a big pleasure.I really like your ideas for interesting work and all material which you usually choose to work with. I got to know that I can speak in English for every topic and I can see a huge progress in my language abilities and speking confidence what is priceless for me."',
      source: 'Joanna, from Poznan.',
      rating: '⭐⭐⭐⭐⭐'
    },  
    
    {
      url: '/class.png',
      caption: '"In such a short time I have learnt a lot."',
      source: 'Mikolaj, from Poznan.',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      url: '/class.png',
      caption: '"very satisfy，excellent"',
      source: 'Sullen, from Suzhou.',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      url: '/class.png',
      caption: '"Thank you for helping me with my confidence and pronunciation"',
      source: 'Rafael, from Sao Paulo.',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      url: '/class.png',
      caption: '"I really enjoyed talking with you! Thank you very much for your patience in teaching me this."',
      source: 'Kota, from Tokyo.',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      url: '/class.png',
      caption: '" it was an amazing session. Nice to meet you dude 🤘"',
      source: 'Madhav, from Mumbai.',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      url: '/class.png',
      caption: '"Thank you for teaching me today. I appreciate that I enjoyed talking with you and it made me relax."',
      source: 'Emi, from Kyoto.',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      url: '/class.png',
      caption: '"I enjoyed Shars class a lot!!!"',
      source: 'Marvin, from Shenzhen.',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      url: '/class.png',
      caption: '"I am satisfied with this class. Thank you so much for your teaching."',
      source: 'Mandy, from Wuhan.',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      url: '/class.png',
      caption: '"Great class!"',
      source: 'Pan, from Chengdu.',
      rating: '⭐⭐⭐⭐⭐'
    }
 
  ];
  
  const Testimonials = () => {
      return (
        <div className="slide-container text-center text-dark mb-4 bg-black ">
        <h1 className='text-6xl text-white font-bold font-serif mt-20'>Testimonials</h1>
        <Fade right>
 
           {slideImages.map((slideImage, index)=> (
              <div className="each-slide mt-4" key={index}>
                <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <br/>
                <br/>
                
                  <span className="lead font-serif text-2xl font-bold text-white">{slideImage.caption}</span>
                  <p className="lead font-serif text-2xl font-bold text-white">{slideImage.source}</p>
                  <p>{slideImage.rating}</p>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </div>
              </div>
            ))} 
            </Fade>
        </div>
      )
  }
export default Testimonials
