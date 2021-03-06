import react from 'react'


function Contact () {
  
    const openEmail = (e) => {
      e.preventDefault();
      window.open('mailto:lessons@teacher-esl.com?subject&body=Hi')
    }
    
      return (
  
  
    <div id='contact' className="flex justify-center ">
    
      <button onClick={openEmail} 
      type="submit" 
      className=" bg-cyan-400 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Contact me</button>
  
  </div>
      )
  }
  
  export default Contact