import React from "react";
import { zoomIn } from "react-animations";
import CountUp from "react-countup";
import Fade from "react-reveal/Fade";
import Image from 'next/image'
function Stats() {
  return (
    
    <div className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl bg-white text-black font-serif">
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
          
            src="/teaching.png"
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
