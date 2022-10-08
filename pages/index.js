import Head from "next/head";
import Image from "next/image";
import Nav from "../components/components/Nav";
import Contact from "../components/components/Contact";
import Bgimg from "../components/components/Bgimg";
import IconsText from "../components/components/IconsText";
import Stats from "../components/components/Stats";
import Testimonials from "../components/components/Testimonials";
import pdf from '/public/pdf/pdf3.png'
import Footer from "../components/components/Footer";
import CookiesConset from "../components/components/Cookies";
import FacebookIcon from "@mui/icons-material/Facebook";
import About from "../components/components/About";
import Faqs from "../components/components/Faqs";

export default function Home() {
  const hoveredStyle = {
    cursor: "pointer",
  };

  return (
    <div>
      <Head>
        <title>
          Start learning to Teach English today.
          nauka angielskiego.
        </title>
        <meta
          lang="en"
          name="google-site-verification"
          
         content="DimKqPqrSEcmpOF_ySwEdRIf81Ye6Pvu2nbEWhRGXRw"
          
          description="The best way to learn any language is through immersion. If you wish to speak English fluently, a lot of practice is required. Don't waste your time trying to learn English from books or from CDs. Learn English from native speakers in real-time."/>
        <meta
          name="simpledcver"
          content="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkb21haW4iOiJlbmdsaXNoc3R1ZmYuY29tIiwiZXhwIjoxNjQzNTg3MjAwfQ.L4TSKTS7KKLqznNct-cwNWccrOvaxAK-meXchtgWmVc"
        ></meta>
        <link rel="icon" href="https:teacher-esl.com" />
      </Head>
      

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

      <div className="bg-regal-blue	 text-white">
        <Bgimg />

        <div className="bg-white grid grid-cols-1 md:grid-cols-2  lg:grid-cols-1 gap-2 ">
          <h1 className="display-inline text-4xl text-black font-serif text-center md:text-center lg:text-center font-bold mt-20 ml-4">
            Are you a Teacher? are you TIRED of searching for lessons online?
          </h1>
          <h1 className="display-inline text-4xl text-black font-serif text-center md:text-center lg:text-center font-bold mt-20 ml-4">
            Buy My Special Course, Designed To Take students From B1 - C1.{" "}
          </h1>
          <h3 className="text-6xl mt-2 text-black text-center">Buy Now</h3>
          <p className="text-5xl font-bold text-black text-center">197 PLN</p>
          <section className="flex justify-center">
          
          <a href="https://buy.stripe.com/14kdU4aZJaemgYUbIS">
          <button
              
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black ml-5 mt-5 
              md:ml-32 md:mt-10 lg:ml-0 lg:mt-20 font-semibold 
              hover:text-white  px-4 border border-blue-500
               hover:border-transparent rounded-sm text-xl md:text-2xl lg:text-4xl"
            >
              Buy Now
            </button>
          </a>
          
          </section>
          
         
            <div className="flex justify-center p-5">
              
            <Image src={pdf} width={300} height={300} className="rounded-md"/>
            </div>
       
        </div>

       

       
          <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-1 ">
            <p className="text-4xl text-center font-bold text-white font-serif  mt-0 md:mt-10 lg:mt-20 ">
              <br />I repeat, if you want to teach CONFIDENTLY and you want to
              do it NOW,
              <br /> Buy My Course, <br />
              NOW!
            </p>
           
          
          </div>
   
        

      
        <IconsText />

        <div id="About"></div>
        <About />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            alt="shapes"
            title="shapes for site"
            fill="#ffffff"
            fill-opacity="1"
            d="M0,288L48,261.3C96,235,192,181,288,144C384,107,480,85,576,106.7C672,128,768,192,864,218.7C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div id="testimonials">
        <Testimonials />
        </div>
        <Stats />
        
        <div>
          <Faqs />
        </div>
        <div id='contact' className="flex justify-center">
          <Contact />
          </div>

          <Footer />
          <CookiesConset />
        
      </div>
    </div>
  );
}
