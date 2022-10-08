import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { useState } from "react";
import Fade from "react-reveal/Fade";



function Bgimg() {
  
  return (
    <div className="w-full h-screen relative z-0  	">
      <Image  
      loading="eager"
      className=""
      src='/teachingbg.jpg'
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      />
      <Fade bottom>
        <div className="absolute 
        
        left-5 lg:left-96
        ml-0 lg:ml-40
          opacity-100 z-50
        top-5 md:top-28 lg:top-32 
        font-serif 
        bg-white
        p-10
        text-center
        w-1/2
        
        ">
          <section className="flex justify-center">
            <h2 className="text-black font-bold 
            text-4xl md:text-6xl lg:text-6xl
            opacity-100 
            ">Learn to Teach English today<br/>with confidence.</h2>
           </section>

           <section className="flex justify-center">
           <button
              
              type="submit"
              className="bg-cyan-400 hover:bg-blue-500 text-white 
               
              md:mt-10  lg:mt-20 font-semibold 
              hover:text-white   border border-blue-500
               hover:border-transparent rounded-sm text-sm md:text-2xl lg:text-4xl"
            >
              Have a question?
            </button>
            </section>
        </div>
      </Fade>
    </div>
  );
}

export default Bgimg;
