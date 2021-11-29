import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
      url: 'class.jpg',
      caption: '"Great to work with"',
      source: 'Marcin, from Poznan.',
      rating: '⭐⭐⭐⭐⭐'
      
    },
    {
      url: '/class.png',
      caption: '"Great to work with"',
      source: 'Marcin, from Poznan.',
      rating: '⭐⭐⭐⭐⭐'
    },  {
      url: '/class.png',
      caption: '"Great to work with"',
      source: 'Agnieszka, from Poznan.',
      rating: '⭐⭐⭐⭐⭐'
    },  {
      url: '/class.png',
      caption: '"Great to work with"',
      source: 'Stas, from Poznan.',
      rating: '⭐⭐⭐⭐⭐'
    },  {
      url: '/class.png',
      caption: '"Great to work with"',
      source: 'Joanna, from Poznan.',
      rating: '⭐⭐⭐⭐⭐'
    },  {
      url: '/class.png',
      caption: '"Great to work with"',
      source: 'Mikolaj, from Poznan.',
      rating: '⭐⭐⭐⭐⭐'
    }
 
  ];
  
  const Testimonials = () => {
      return (
        <div className="slide-container container text-center mb-4">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div className="each-slide" key={index}>
                <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                  <span>{slideImage.caption}</span>
                  <p>{slideImage.source}</p>
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
