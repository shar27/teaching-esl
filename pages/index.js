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
        <title>Start learning to speak English today for free! - Learn to speak English with a British Native speaker.</title>
        <meta
          name="google-site-verification"
          content="DimKqPqrSEcmpOF_ySwEdRIf81Ye6Pvu2nbEWhRGXRw"
          description
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

      <div className="bg-zinc-900	 text-white">
        <Bgimg />

        <div className="grid grid-cols-2 gap-2 ">
          <h1 className="text-4xl text-white font-serif text-center sm:text-left md:text-left font-bold mt-20 ml-4">
            Are you tired of searching for words when you speak?
            <br />
            <br />
            Start talking today, why not? It's free.{" "}
          </h1>

          <Fade right>
            <div className="grid grid-col-2 grid-rows-2">
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
              do it NOW,
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

        <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-2 border-2 mb-10 ">
          <Test />

          <Dropbox />
        </div>

        <Icons />

        <IconsText />

        <About />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,288L48,261.3C96,235,192,181,288,144C384,107,480,85,576,106.7C672,128,768,192,864,218.7C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
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
