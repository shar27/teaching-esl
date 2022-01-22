import React from "react";
import Fade from "react-reveal/Fade";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white text-black font-serif">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#18181B"
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
          I have travelled around the world and met 1000’s of foreign language
          speakers. During my travels, I went to China and it was there where I
          met Mark. Mark was from Poland and he spoke FLUENT ENGLISH and FLUENT
          Mandarin.
          <br /> <br />
          So, I asked Mark –{" "}
          <span className="italic text-2xl font-bold">
            "how are you able to speak both languages so well?"
          </span>{" "}
          I said to him:
          <span className="italic text-2xl font-bold">
            {" "}
            "I’ve been studying Chinese for 6 months and I still feel like I
            can’t have a conversation."
          </span>
          <br />
          <br /> Mark was just one of many fluent foreign language speakers who
          had I met. They didn’t have a particular talent for learning
          languages,but they all had one thing in common: they had a good solid
          learning strategy. That’s when I realised the method for learning
          English is broken.
          <br />
          <p>
            <br />
            <br />
            <div className="bg-clip contents">
              <Fade left>
                <Image src="/slow.png" width={500} height={500} alt="snail learning" title="snail placed learning is wrong" />
              </Fade>
            </div>
            <br />
            Too much time is spent READING and WRITING with only simple
            conversational topics that leave you frustrated. I have met many
            students who have been learning English for years and are still
            unable to have a fluent conversation. They have all confirmed to me
            that the learning strategy is not effective and it’s why when they
            get to real world situations they are always feeling CONFUSED and
            STRESSED.
          </p>
          <br />
          <p>
            The frustration and stress both I and countless other students
            experienced is the reason why I created my own course. A TRIED and
            TESTED course that is proven to get you from ‘umming and ahing’ to
            speaking fluently and confidently. If you don’t believe me, check
            out what my previous clients have had to say.
            <br />
          </p>
          In fact, the course was so successful that I knew I had to spread the
          word. Now, I can help students everywhere in the world… and now it’s
          your turn.
          <ul className="mt-20">
            <div className="grid grid-rows-1">
              <li className="mt-20">
                I will teach you to speak English fluently to help you get
                better jobs, or to be more involved in business meetings.
              </li>

              <li className="mt-20 flex  justify-center mb-20">
                I will help you make friends wherever you go with some of my
                best kept secrets.
                <li>
                  I will teach you how to spend time with families at events.
                </li>
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
