import React from "react";
import Image from "next/dist/client/image";
import ReactPlayer from "react-player";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import Contact from '/components/components/Contact'

function Bgimg() {
  const [isPlaying, setIsPlaying] = useState(true);

  const url =
    "https://player.vimeo.com/external/463496110.sd.mp4?s=905a46f4faf6c79740e9a76b353b7e3354f396b8&profile_id=139&oauth2_token_id=57447761";

  return (
    <div className="relative z-0 backdrop-opacity-95	">
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
      />
      <Fade bottom>
        <div className="absolute z-50 left-0 top-24 md:top-28 lg:top-32 font-serif h-16 font-bold text-white text-4xl sm:text-2xl md:text-6xl lg:text-9xl">
          Learn to speak english with confidence.
          <div className="text-lg md:text-4xl lg:text-4xl  ">
        <Contact/>
        </div>
        </div>
       
      </Fade>
    </div>
  );
}

export default Bgimg;
