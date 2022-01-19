import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Nav from "../components/components/Nav";
import Contact from "../components/components/Contact";
import Logo from "../components/components/Logo";
import Bgimg from "../components/components/Bgimg";
import Icons from "../components/components/Icons";
import IconsText from "../components/components/IconsText";
import Stats from "../components/components/Stats";
import Testimonials from "../components/components/Testimonials";
import Dropbox from "../components/components/Dropbox";
import Test from "../components/components/Test";
import { InlineWidget } from "react-calendly";
import Footer from "../components/components/Footer";
import CookiesConset from "../components/components/Cookies";
import FacebookIcon from "@mui/icons-material/Facebook";
import Fade from "react-reveal/Fade";
import Script from "next/script";
import About from "../components/components/About";

export default function Home() {
  const hoveredStyle = {
    cursor: "pointer",
  };

  return (
    <div className={styles.mainbackground}>
      <Head>
        <title>Teacher-ESL</title>
        <meta
          name="google-site-verification"
          content="DimKqPqrSEcmpOF_ySwEdRIf81Ye6Pvu2nbEWhRGXRw"
        />
        <link rel="icon" href="/head.png" />
      </Head>
      <div className="bg-none">
        <Logo />
      </div>

      <Nav />
      <FacebookIcon
        onClick={(event) =>
          (window.location.href = "https://www.facebook.com/teacheresl2021/")
        }
        style={hoveredStyle}
        fontSize="large"
        sx={{
          mb: 2,
          display: "flex-inline",
        }}
      />

      <div className="bg-black text-white">
        <Bgimg />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,0L1440,288L1440,0L0,0Z"
          ></path>
        </svg>
        <div className="grid grid-cols-2 gap-2 ">
          <h1 className="text-4xl text-white font-serif text-center sm:text-left md:text-left font-bold mt-20 ml-4">
            Are you tired of searching for words when you speak?
            <br />
            <br />
            Starting talking today, why not? it's free.{" "}
          </h1>

          <Fade right>
            <div className="mt-4">
              <Image
                alt="tablet"
                className="rounded-md "
                src="/13.png"
                width={500}
                height={400}
              />
            </div>
          </Fade>
        </div>
        <div className="w-full">
          <InlineWidget id="calender" url="https://calendly.com/shariqahmed" />
        </div>
        <Fade top>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
            <p className="text-4xl text-center font-bold text-white font-serif mt-20">
              <br />I repeat, if you want to speak CONFIDENTLY and you want to
              do it NOW.
              <br /> Put that book, <br />
              DOWN!
            </p>

            <Image
              className="rounded-md"
              alt="pub"
              src="/192.png"
              width={500}
              height={500}
            />
          </div>
        </Fade>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,64L1440,288L1440,320L0,320Z"
        ></path>
      </svg>
        <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-20">
          <Test />
          <div className="border-2">
            <Dropbox />
            <div>
              <p className="text-center  font-bold mb-4">
                * Note: if you have something longer than a paragraph then
                please email me first.{" "}
              </p>
            </div>
          </div>
        </div>

        <Icons />

        <IconsText />

        <About />

          <Testimonials />
       
          <Stats />
        <div className="mt-20">
          <InlineWidget
            id="calender"
            url="https://calendly.com/shariqahmed"
            width="300"
            height="300"
          />
        </div>
        <div>
          <Contact />
          <Footer />
          <CookiesConset />
        </div>
      </div>
    </div>
  );
}
