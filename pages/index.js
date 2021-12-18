import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Logo from "./components/Logo";
import Bgimg from "./components/Bgimg";
import Icons from "./components/Icons";
import IconsText from "./components/IconsText";
import Quote from "./components/Quote";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import CountDown from './components/CountDown'
import Dropbox from "./components/Dropbox";
import Test from "./components/Test";
import { InlineWidget } from "react-calendly";
import Footer from './components/Footer'
import CookiesConset from './components/Cookies'
import Script from 'next/script'

export default function Home() {
  
  return (
    <div className={styles.mainbackground}>
      
      <Script
  strategy="loadScript"
  dangerouslySetInnerHTML={{
    __html: `
    (function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.
    src=o;
    j.dataset.sumoSiteId=${process.env.NEXT_PUBLIC_SUMO_ID}';
    v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumo.com/');
  `
  }}
/>
      <Head>
        <title>Teacher-ESL</title>
        <meta
        name="google-site-verification" 
        content="DimKqPqrSEcmpOF_ySwEdRIf81Ye6Pvu2nbEWhRGXRw"
         
        />
        <link rel="icon" href="/teachinglogo.png" />
      </Head>
      <div>
      
        <Logo />
      </div>
      <Nav />
     
      <Bgimg />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,160L120,138.7C240,117,480,75,720,74.7C960,75,1200,117,1320,138.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
<h1 className="display-4 text-center">Learn the correct way.</h1>
<h5 className="display-5 text-center">Conversation focused.</h5>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,96L120,106.7C240,117,480,139,720,128C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,160L120,138.7C240,117,480,75,720,74.7C960,75,1200,117,1320,138.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      <div className="container mt-0">
        <div className="row">
          <div className="col-sm-12 col-lg-6 p-2 border border-white shadow text-center d-flex justify-content-start ">
            
           <Image
            alt="lesson"
              className={styles.introimageone}
              src="/lesson.jpg"
              width="800"
              height="800"
            />
          </div>
          
          <div className="col-lg-6 col-sm-12 border border-white shadow">
            
            <h1 className="text-center display-5 mt-4 ">
              Learn English online with a British native speaker
            </h1>
            <br/>
            <p className="text-center fw-bold lead col-sm-12 mt-4">
              Learning with a native speaker is crucial to taking your
              understanding to the next level. Working with a native is far
              different as the only common language we have is English and that
              means you need to really push yourself.
            </p>
          </div>
          
          <div className="col-sm-12 col-lg-12 border border-white shadow me-2 ">
            <h1 className="text-center mt-4 ">
              <span class="badge bg-danger m-4">New </span>Free proofreading from a
              British native speaker.
            </h1>

            <br />
            <br />
            <p className="lead text-center  fw-bold">
              * Note: if you have something longer than a paragraph then please
              email me first.{" "}
            </p>
            <Dropbox />
          </div>

          <div className="col-sm-12 col-lg-6 p-2 border border-white shadow text-center d-flex justify-content-start ">
            
            <Image
              className={styles.introimagetwo}
              src="/kidlearn.jpg"
              width="900"
              height="900"
              alt="lessons"
            />
          </div>
          <div className="col-lg-6 col-sm- 4 text-center border border-white shadow  ">
            
            <h1 className="text-center display-5 mt-4">
              Private lessons for children.
            </h1>
            <p className="lead p-2 col-sm-12 fw-bold  ">
              Our education systems simply aren't designed to get the best out
              of our children when it comes to learning a foreign language.
              That's why many of us left school barely able to speak what we had
              learnt for a decade. It's best to get a head start now before it's
              too late.
            </p>
          </div>
          
        </div>
      </div>
      
      
      
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,288L34.3,256C68.6,224,137,160,206,128C274.3,96,343,96,411,101.3C480,107,549,117,617,133.3C685.7,149,754,171,823,202.7C891.4,235,960,277,1029,293.3C1097.1,309,1166,299,1234,277.3C1302.9,256,1371,224,1406,208L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
        <Test />
      
      <Icons />
    <IconsText />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,96L120,106.7C240,117,480,139,720,128C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,160L120,138.7C240,117,480,75,720,74.7C960,75,1200,117,1320,138.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>

      
      <div>
        <Testimonials />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,96L120,106.7C240,117,480,139,720,128C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,160L120,138.7C240,117,480,75,720,74.7C960,75,1200,117,1320,138.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        <Stats />
      
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,96L120,106.7C240,117,480,139,720,128C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,160L120,138.7C240,117,480,75,720,74.7C960,75,1200,117,1320,138.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>

      <InlineWidget url="https://calendly.com/shariqahmed"
      width="300"
      height="300" />
      <div>
        <Contact />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000ff" fill-opacity="1" d="M0,288L120,261.3C240,235,480,181,720,138.7C960,96,1200,64,1320,48L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>        <Footer/>
       
        <CookiesConset/>
      </div>
    </div>
  );
}
