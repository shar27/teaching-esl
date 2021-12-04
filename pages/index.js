import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Nav from "./components/Nav";
import Contact from "./Contact";
import Logo from "./components/Logo";
import Bgimg from "./components/Bgimg";
import Icons from "./components/Icons";
import IconsText from "./components/IconsText";
import Quote from "./components/Quote";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

import Dropbox from "./components/Dropbox";
import Test from "./components/Test";
import { InlineWidget } from "react-calendly";

export default function Home() {
  return (
    <div className={styles.mainbackground}>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Learn english online with a British native speaker"
        />
        <link rel="icon" href="/teachinglogo.png" />
      </Head>
      <div>
        <Logo />
      </div>
      <Nav />
      <Bgimg />
    
      <div className="container mt-0">
        <div className="row">
          <div className="col-sm-12 col-lg-6 p-2 border border-white shadow text-center d-flex justify-content-start ">
            

            <Image
              className={styles.introimageone}
              src="/lesson.jpg"
              width="900"
              height="900"
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
      
      <br />

      <div className={styles.htag}>
        <Test />
      </div>
      <Icons />
      <div className={styles.icontext}>
        <IconsText />
      </div>
      <hr />
      <br />
      <div className={styles.testimonials}>
        <Testimonials />
      </div>
      <div className={styles.container}>
        <Stats />
      </div>

      <InlineWidget url="https://calendly.com/shariqahmed" />
      <div>
        <Contact />
      </div>
    </div>
  );
}
