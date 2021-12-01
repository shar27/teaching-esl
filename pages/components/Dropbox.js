import React from 'react'
import DropboxChooser from 'react-dropbox-chooser'
import {useState} from 'react'

const APP_KEY="25yimk69f3etkxa"


export default function Dropbox() {
    const [url,setUrl] = useState("")
    function handleSuccess(files){
      setUrl(files[0].thumbnailLink)
      console.log(url)
    }
    return (
       
 <div className="container">
    
    <p className=" lead text-center fw-bold text-muted ms-4">** Please include your full name, title of the document and date.</p>
    <p className=" lead text-center fw-bold text-muted ms-4 ">"Joe Bloggs - assignment proofread"</p>
      <br/>
          
      <br/>
    <div className="container  d-flex justify-content-center">
      <DropboxChooser appKey={`${process.env.APP_PUBLIC_KEY}`}
                      success={handleSuccess}
                      cancel={() => console.log('closed')}
                      multiselect={true}
                      extensions={['.mp4','.pdf', '.docx', '.mp3', '.png', '.jpg']}
                      >
        <button className="btn btn-primary">Upload or Choose Files</button>
        <div className="dropbox"></div>
        <br/><br/>
        
      </DropboxChooser>
    
    </div>
        </div>    
        )
}


