import React from 'react'
import Image from 'next/dist/client/image'
import ReactPlayer from 'react-player'
import {useState} from 'react'


function Bgimg() {

    const [isPlaying, setIsPlaying] = useState(true);

    const url = 'https://player.vimeo.com/external/463496110.sd.mp4?s=905a46f4faf6c79740e9a76b353b7e3354f396b8&profile_id=139&oauth2_token_id=57447761'

    return (
        <div>
<ReactPlayer 
   priority="true"
   autoPlay 
   loop
   muted
   className='react-player'
    url={url}    
    playing={isPlaying}
    height = '100%'
    width = '100%'
     
  />
        </div>
    )
}

export default Bgimg
