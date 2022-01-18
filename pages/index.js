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

export default function Home() {
  const hoveredStyle = {
    cursor: "pointer",
  };

  return (
    <div className={styles.mainbackground}>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
        
    adroll_adv_id = ${process.env.ADROLL_ID};
    adroll_pix_id = ${process.env.ADROLL_PIX_ID};
    adroll_version = "2.0";

    (function(w, d, e, o, a) {
        w.__adroll_loaded = true;
        w.adroll = w.adroll || [];
        w.adroll.f = [ 'setProperties', 'identify', 'track' ];
        var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id
                + "/roundtrip.js";
        for (a = 0; a < w.adroll.f.length; a++) {
            w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {
                return function() {
                    w.adroll.push([ n, arguments ])
                }
            })(w.adroll.f[a])
        }

        e = d.createElement('script');
        o = d.getElementsByTagName('script')[0];
        e.async = 1;
        e.src = roundtripUrl;
        o.parentNode.insertBefore(e, o);
    })(window, document);
    adroll.track("pageView");
`,
        }}
      />

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
                src="/tablet.jpg"
                width={500}
                height={400}
              />
            </div>
          </Fade>
        </div>

        <InlineWidget
          id="calender"
          url="https://calendly.com/shariqahmed"
          width="50"
          height="50"
        />

        <Fade top>
          <div className="grid grid-rows-2 md:grid-rows-2 lg:grid-rows-2 gap-2">
            <p className="text-4xl text-center font-bold text-white font-serif mt-20">
              <br />I repeat, if you want to speak CONFIDENTLY and you want to
              do it NOW.
              <br /> Put that book, <br />
              DOWN!
            </p>

            <Image
              className="rounded-md"
              alt="pub"
              src="/pub.jpg"
              width={500}
              height={500}
            />
          </div>
        </Fade>

        <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-20">
          <Test />
          <div className="border-2">
            <Dropbox />
            <div>
              <p className="text-center  font-bold">
                * Note: if you have something longer than a paragraph then
                please email me first.{" "}
              </p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,320L1440,0L1440,320L0,320Z"
          ></path>
        </svg>
        <Icons />
        <IconsText />

        <div id="About">
          <h2 className="text-4xl font-bold text-center font-serif mt-20">
            About me
          </h2>

          <div className="text-center mt-20">
            <p className="text-2xl font-bold text-white font-serif ">
              {" "}
              I’m Shariq Ahmed, the owner <br />
              of <br />
              Teacher-ESL.
              <br />
              <br />
              I have travelled around the world and met 1000’s of foreign
              language speakers. During my travels I went to China and it was
              there where I met Mark. Mark was from France and spoke FLUENT
              Mandarin and FLUENT ENGLISH.
              <br /> <br />
              So, I asked Mark – how are you able to speak both languages so
              well? I said to him: I’ve been studying Chinese for 6 months and I
              still feel like I can’t have a conversation.
              <br />
              <br /> Mark was just one of many fluent foreign language speakers.
              They didn’t have a particular talent for learning languages, they
              just had a good solid strategy. And, that’s when I realised the
              method for learning English is broken.
              <br />
              <p>
                <br />
                <br />
                Too much time is spent READING and WRITING with only simple
                conversational topics that leave you frustrated. I have met many
                students who have been learning English for years and still are
                unable to have a fluent conversation. They have all confirmed
                for me that the strategy is not right and it’s why when they get
                to real world situation they are always feeling CONFUSED and
                STRESSED.
              </p>
              <br />
              <p>
                It was that frustration and the stress both I and countless
                other students that I have met is why I created my own course. A
                TRIED and TESTED course that is proven to get you from ‘umming
                and ahing’ to speaking fluently and confidently. If you don’t
                believe me, check out what my previous clients have had to say.
                <br />
              </p>
              In fact, the course was so successful that I knew I had to spead
              the word. Now, I can help students everywhere in the world… and
              now it’s your turn.
              <ul className="mt-20">
                <li className="mt-20">
                  I will teach you to speak English fluently to get better jobs,
                  or to be involved in business meetings.
                </li>
                <li className="mt-20">
                  {" "}
                  I will help you make friends wherever you go with some of my
                  best kept secrets.
                </li>

                <li className="mt-20">
                  I will teach you how to become friends with family members.
                </li>
              </ul>
            </p>
          </div>

          <div>
            <Testimonials />
          </div>

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
    </div>
  );
}
