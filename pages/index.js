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
    <Icons/>
    <IconsText/>
      <Quote/>
      <Contact/>
    </div>
  )
}
