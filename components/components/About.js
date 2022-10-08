import React from "react";
import Fade from "react-reveal/Fade";
import pdf from '/public/pdf/pdf3.png'
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white text-black font-serif">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0a253b"
          fill-opacity="1"
          d="M0,288L48,261.3C96,235,192,181,288,144C384,107,480,85,576,106.7C672,128,768,192,864,218.7C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <h2 className="text-4xl font-bold text-center font-serif mt-20">
        About me
      </h2>

      <div className="text-center mt-20">
        <p className="text-2xl font-bold text-black font-serif ">
          {" "}
          I’m Shariq Ahmed, the founder <br />
          of <br />
          Teacher-ESL.
          <br />
          <br />
          I have travelled around the world and I have taught 1000’s of foreign language
          speakers. This has made me an expert in Teaching! 
          <br /> <br />
         
          <span className="italic text-2xl font-bold">
            I still GET emails saying 
          </span>{" "}
          "You are the best teacher I ever had. Can I have another lesson with you"
          <span className="italic text-2xl font-bold">
            {" "}
            This is because I know what it takes to teach effectively. I have learnt all the Challenges, 
            I have made mistakes. TEFL never prepared me to TEACH for REAL! 
          </span>
          <br />
          <br /> It was through HARD WORK and genuine FEEDBACK where I improved. 
          <br />
          <p>
            <br />
            <br />
            <div className="bg-clip contents">
              <Fade left>
                <Image src="/slow.png" 
                width={500} height={500} alt="snail learning" title="snail placed learning is wrong" />
              </Fade>
            </div>
            <br />
            This got me thinking, it would be SELFISH of me to not share this information. 
            You DESERVE to be a competent teacher. 
          </p>
          <br />
          <p>
            The frustration and stress both I and countless other teachers
            experienced is the reason why I created my own course. A TRIED and
            TESTED course that is proven to help you from DAY 1  
            teaching confidently. If you don’t believe me, check
            out what my previous clients have had to say.
            <br />
          </p>
          
          <h3 className="text-6xl mt-2">Buy Now</h3>
          
          <section className="flex justify-center mt-5">
         
          <Image src={pdf} width={300} height={300} />
          
          
         
          </section>
          < section className="flex justify-center text-center">
          <a href="https://buy.stripe.com/14kdU4aZJaemgYUbIS">
          <button
              
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black 
              mt-5 
             md:mt-10 lg:mt-20 font-semibold 
              hover:text-white  px-4 border border-blue-500
               hover:border-transparent rounded-sm text-xl md:text-2xl lg:text-4xl"
            >
              Buy Now
            </button>
          </a>
         
          </section>
          
          <p className="p-20 text-4xl font-bold">197 PLN</p>
          <ul className="mt-20">
            <div className="grid grid-rows-1">
              <li className="mt-20">
                I will teach you to TEACH English Confidently to help you get
                better jobs, more students and build your reputation as the best!
              </li>

            
        
            </div>
          </ul>
        </p>
      </div>
      <Fade left>
        <div className="flex justify-center">
          <Image src="/prog.png" width={400} height={400} alt="learn quickly" title="learn quickly with my course" />
        </div>
      </Fade>
    </div>
  );
}
