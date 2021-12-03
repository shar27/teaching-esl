import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
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
import Test from './components/Test'
import { InlineWidget } from "react-calendly";


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
      <br/>
      <br/>
      <br/>
    <Intro className={styles.htag}

    />
    <br/>
    
    
      <Test/>
    <Icons/>
    <IconsText/>
      <hr/>
      <br/>
      <Testimonials/>
    <Stats/>
    <div>
    <InlineWidget url="https://calendly.com/shariqahmed" />
    </div>
      <Contact/>
    
    </div>
  )
}
