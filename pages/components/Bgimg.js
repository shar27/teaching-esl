import React from 'react'
import Image from 'next/dist/client/image'
import ReactPlayer from 'react-player'
import {useState} from 'react'

function Bgimg() {

    const [isPlaying, setIsPlaying] = useState(true);

    const url = 'https://player.vimeo.com/external/422682086.sd.mp4?s=921c7f9bc0fb6df8ec8e13631a6a6a9d003731b2&profile_id=139&oauth2_token_id=57447761'

    return (
        <div>
<ReactPlayer 
   priority
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
