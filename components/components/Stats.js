import React from "react";
import { zoomIn } from "react-animations";
import CountUp from "react-countup";
import Fade from "react-reveal/Fade";
import Image from 'next/image'
function Stats() {
  return (
    
    <div className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl bg-white text-black font-serif">
    <svg alt="shapes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#18181B" fill-opacity="1" d="M0,288L48,261.3C96,235,192,181,288,144C384,107,480,85,576,106.7C672,128,768,192,864,218.7C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <Fade bottom>
        <h1 className="font-bold text-center me-4  mb-4 text-4xl">
          My results
        </h1>
        <div className="grid grid-rows-2 gap-2">
          <h1 className="font-bold mt-4 text-center">1000+</h1>
          <p className="text-center font-bold ">
            Students that I have worked with.
          </p>
          <Fade right>
      <div className="flex justify-center">
      <Image    
            
              src="/loads.png"
              width={500}
              height={500}
              alt="person"
            />
            </div>
            </Fade>
            
        </div>
       
        <div>
          <h1 className=" font-bold mt-4 text-center">100% </h1>
          <p className=" text-center font-bold  ">
            Have said they felt progress after a couple of weeks.
          </p>
          <div className="mt-20 flex justify-center">
          <Fade left>
          <Image    
          
            src="/teach3.png"
            width={500}
            height={500}
            alt="person"
          />
          </Fade>
          </div>
        </div>

        <div>
          <h1 className=" font-bold mt-10 text-center">100%</h1>
          <p className=" text-center font-bold mt-5 ">Have referred me to others.</p>
          <div className="mt-10 flex justify-center">
          <Fade right>
          <Image    
          
            src="/ref.png"
            width={500}
            height={500}
            alt="person"
          />
          </Fade>
          </div>
        </div>
      </Fade>
      
    </div>
  );
}

export default Stats;
