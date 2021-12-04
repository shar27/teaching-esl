import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

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
    },  {
      url: '/class.png',
      caption: '"In such a short time I have learnt a lot."',
      source: 'Mikolaj, from Poznan.',
      rating: '⭐⭐⭐⭐⭐'
    }
 
  ];
  
  const Testimonials = () => {
      return (
        <div className="slide-container container text-center text-dark mb-4 ">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div className="each-slide mt-4" key={index}>
                <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <br/>
                <br/>
                  <span className="lead fw-bold">{slideImage.caption}</span>
                  <p className="lead fw-bold">{slideImage.source}</p>
                  <p>{slideImage.rating}</p>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      )
  }
export default Testimonials
