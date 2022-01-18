import React from "react";
import { zoomIn } from "react-animations";
import CountUp from "react-countup";
import Fade from "react-reveal/Fade";
import Image from 'next/image'
function Stats() {
  return (
    <div className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl bg-black text-white">
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
      <Image    
            
              src="/118.png"
              width={500}
              height={500}
              alt="person"
            />
            </Fade>
        </div>
       
        <div>
          <h1 className=" font-bold mt-4 text-center">100% </h1>
          <p className=" text-center font-bold  ">
            Have said they felt progress after a couple of weeks.
          </p>
          <Fade left>
          <Image    
            
            src="/118.png"
            width={500}
            height={500}
            alt="person"
          />
          </Fade>
        </div>

        <div>
          <h1 className=" font-bold mt-4 text-center">100%</h1>
          <p className=" text-center font-bold ">Have referred me to others.</p>
        </div>
      </Fade>
      
    </div>
  );
}

export default Stats;
