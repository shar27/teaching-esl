import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
      url: 'class.jpg',
      caption: '"Great to work with"',
      rating: '⭐⭐⭐⭐⭐'
      
    },
    {
      url: '/single.png',
      caption: '"Great to work with"',
      rating: '⭐⭐⭐⭐⭐'
    },  {
      url: '/single.png',
      caption: '"Great to work with"',
      rating: '⭐⭐⭐⭐⭐'
    },  {
      url: '/single.png',
      caption: '"Great to work with"',
      rating: '⭐⭐⭐⭐⭐'
    },  {
      url: '/single.png',
      caption: '"Great to work with"',
      rating: '⭐⭐⭐⭐⭐'
    },  {
      url: '/single.png',
      caption: '"Great to work with"',
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
                  <span>{slideImage.rating}</span>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      )
  }
export default Testimonials
