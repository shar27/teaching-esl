import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './components/Nav'
import Logo from './components/Logo'
import { alpha } from '@mui/material/styles';
import { flexbox } from '@mui/system';
import { spacing } from '@mui/system';
import Head from 'next/head';
import WebIcon from '@mui/icons-material/Web';


export default function About () {
  
const theme = {
  spacing: 8,
}

  const hoveredStyle = {
    cursor: 'pointer'
  };
  
  return (
        
<div>
<Head>
  <title>About</title>
  <meta name="description" content="An self-introduction page" />
</Head>

<Logo/>
<Nav/>


<div className="container d-flex align-items-center">
  <Image 
  className="rounded-circle .align-self-sm-center"
  alt="profile" 
  src="/profile-warsaw.jpg" 
  alt="me"
  width="400"
  height="400"
  priority
  />
  

  

  </div>
  <section className={styles.intro}> 
  <div className="container">
  <h5 className=" display-4 mt-5 -5 mb-5 pt-4 pb-4  text-sm-center text-md-center text-lg-center">Hello, Hola, Cześć!</h5>
  <h5 className="display-4 mt-5 mb-5 m-5 pt-4 pb-4  text-sm-center text-md-center text-lg-center">  你好, سلام   </h5>
  </div>
  <h5 className="display-5 mt-5 m-5 p-2 text-sm-center text-md-center text-lg-center" >My name is Shar and I am a web developer from the UK!</h5> 
  </section>
        
<div  className="container"> 
    <h1 className="display-3 m-5 border text-center shadow-sm " >About me</h1>
    <p className="lead text-center mb-5">Hello and welcome to my site. My name is Shar and I am from the UK. I was born and raised in a small
    town called High Wycombe. Currently I am based in Poznan, Poland. You see, I love traveling and I love exploring the unknown.
    If you already can't tell, a byproduct of traveling is learning a new language, a new way of thinking and an opportunity for growth.
    To date, I have visited 27 countries and I have lived in 3 of them. </p>
    
    <div className="container shadow d-flex flex-row justify-content-center mt-4">
          
        <ol className="text-left">
       <h5><span>Human Languages</span></h5>
            <li>English</li>
            <li>Spanish</li>
            <li>Mandarin</li>
            <li>Punjabi</li>
            <li>Urdu</li>
        </ol>
       
        
       
    </div>
    
   
    
    </div>
    </div>
    
    
    )
}
