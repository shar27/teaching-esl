import React from 'react'
import GDPR from 'react-gdpr-consent'


function Gdpr() {
    
    const config = [
        { id: 'age', text: "I'm 18 years old or older", checked: true, locked: true },
        { id: 'terms', text: "I accept", checked: true, locked: true, link: "http://www.teacher-esl.com/terms", linkText: "terms & conditions"},
        { id: 'privacy', text: "I accept", checked: true, locked: true, link: "http://www.teacher-esl.com/terms", linkText: "Privacy & policy" },
        { id: 'newsletter', text: "I want to receive newsletters and updates by email", checked: false, locked: false }
  ]
  const linkHandLer = (link) => {
    window.open(link, '_blank');
  }
  const toggleHandler = (id, value) => {
    console.log(id, value)
  }
    return (
        <div>
            <GDPR config={config} toggleHandler={toggleHandler} linkHandLer={linkHandLer}/>

        </div>
    )
}

export default Gdpr
