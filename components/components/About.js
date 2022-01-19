import React from "react";
import Fade from "react-reveal/Fade";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white text-black font-serif">
      <h2 className="text-4xl font-bold text-center font-serif mt-20">
        About me
      </h2>

      <div className="text-center mt-20">
        <p className="text-2xl font-bold text-black font-serif ">
          {" "}
          I’m Shariq Ahmed, the owner <br />
          of <br />
          Teacher-ESL.
          <br />
          <br />
          I have travelled around the world and met 1000’s of foreign language
          speakers. During my travels I went to China and it was there where I
          met Mark. Mark was from France and spoke FLUENT Mandarin and FLUENT
          ENGLISH.
          <br /> <br />
          So, I asked Mark – how are you able to speak both languages so well? I
          said to him: I’ve been studying Chinese for 6 months and I still feel
          like I can’t have a conversation.
          <br />
          <br /> Mark was just one of many fluent foreign language speakers.
          They didn’t have a particular talent for learning languages, they just
          had a good solid strategy. And, that’s when I realised the method for
          learning English is broken.
          <br />
          <p>
            <br />
            <br />
            <div className="bg-clip contents">
              <Fade left>
                <Image src="/slow.png" width={500} height={500} alt="slow" />
              </Fade>
            </div>
            <br />
            Too much time is spent READING and WRITING with only simple
            conversational topics that leave you frustrated. I have met many
            students who have been learning English for years and still are
            unable to have a fluent conversation. They have all confirmed for me
            that the strategy is not right and it’s why when they get to real
            world situation they are always feeling CONFUSED and STRESSED.
          </p>
          <br />
          <p>
            It was that frustration and the stress both I and countless other
            students that I have met is why I created my own course. A TRIED and
            TESTED course that is proven to get you from ‘umming and ahing’ to
            speaking fluently and confidently. If you don’t believe me, check
            out what my previous clients have had to say.
            <br />
          </p>
          In fact, the course was so successful that I knew I had to spead the
          word. Now, I can help students everywhere in the world… and now it’s
          your turn.
          <ul className="mt-20">
            <div className="grid grid-rows-1">
              <li className="mt-20">
                I will teach you to speak English fluently to get better jobs,
                or to be involved in business meetings.
              </li>

              <li className="mt-20 flex  justify-center mb-20">
                I will help you make friends wherever you go with some of my
                best kept secrets.
                <li>
                  I will teach you how to spend time with familes at events.
                </li>
              </li>
            </div>
          </ul>
        </p>
      </div>
      <Fade left>
        <div className="flex justify-center">
          <Image src="/prog.png" width={400} height={400} alt="prog" />
        </div>
      </Fade>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,64L1440,288L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
