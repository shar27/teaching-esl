import React from "react";

import ReactPlayer from "react-player";
import { useState } from "react";
import Fade from "react-reveal/Fade";



function Bgimg() {
  const [isPlaying, setIsPlaying] = useState(true);

  const openEmail = (e) => {
    e.preventDefault();
    window.open("mailto:lessons@teacher-esl.com?subject&body=English lessons");
  };

  const url =
    "https://player.vimeo.com/external/463496110.sd.mp4?s=905a46f4faf6c79740e9a76b353b7e3354f396b8&profile_id=139&oauth2_token_id=57447761";

  return (
    <div className="relative z-0 backdrop-opacity-95 	">
      <ReactPlayer
        priority="true"
        autoPlay
        loop
        muted
        className="react-player"
        url={url}
        playing={isPlaying}
        height="100%"
        width="100%"
        alt="video"
        title="video background"
      />
      <Fade bottom>
        <div className="absolute z-50 left-5 top-24 md:top-28 lg:top-32 font-serif font-bold text-white text-2xl md:text-6xl lg:text-9xl">
          
            Learn to speak English with confidence.
           
            <button
              onClick={openEmail}
              type="submit"
              className="bg-cyan-400 hover:bg-blue-500 text-white ml-5 mt-5 md:ml-32 md:mt-10 lg:ml-48 lg:mt-20 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-sm md:text-2xl lg:text-6xl"
            >
              Contact me
            </button>
          
        </div>
      </Fade>
    </div>
  );
}

export default Bgimg;
