import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from './components/Nav'
import Contact from './Contact'
import Logo from './components/Logo'
import Bgimg from './components/Bgimg'
import Icons from './components/Icons'
import IconsText from './components/IconsText'
import Quote from './components/Quote'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Intro from './components/Intro'
import Dropbox from './components/Dropbox'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Learn english online with a British native speaker" />
        <link rel="icon" href="/teachinglogo.png" />
      </Head>
      <Logo/>
    <Nav/>
      <Bgimg/>
    <Intro/>
    <br/>
    <h2 className="text-center text-primary fw-bold">Need something urgent done? </h2>
    <h2 className="text-center text-primary fw-bold">Free proofreading from a British native speaker.</h2>
    <p className="lead text-muted text-center fw-bold">Note: if you have something longer than a paragraph then please email me first. </p>
    <Dropbox/>
      <Quote/>  
    <Icons/>
    
      
      <Testimonials/>
    <Stats/>
    
      <Contact/>
    
    </div>
  )
}
