import React from "react";
import Nav from "../components/components/Nav";
import Image from "next/dist/client/image";
import Link from "next/link";
import Head from "next/head";
import Logo from "../components/components/Logo";
import Footer from "../components/components/Footer";
import NavTwo from '../components/components/NavTwo'

function Pricing() {
  return (
    <div>
      <Head>
        <meta
        lang="en"
          name="description"
          content="width=device-width,initial-scale=1.0"
          description="The best way to learning any language can be expensive. However, I offer some of the best rates on the market."
        />
         <link rel="icon" href="https:teacher-esl.com/Pricing" />
        <title>Pricing page to learn English with a native speaker</title>
      </Head>
      <Logo />
      <NavTwo />

      <div className="grid grid-rows-1 gap-3 mt-4 ">
        <div>
          <h1 className="text-center font-bold text-dark mt-4 mb-4">
            Packages
          </h1>
          <div className="text-center">
            <h5 className=" text-center font-bold p- mt-10">Single x 4</h5>
            <div>
              <Image
                alt="phone lessons"
                title="phone lessons"
                src="/phoneles.png"
                width="300"
                height="300"
              />
              <h6 className="mb-2 ms-4  text-center">30 minutes</h6>
              <ul className="list-unstyled">
                <li>World class teacher</li>
                <li>Flexible schedule</li>
                <li>Pay as you go</li>
                <li className="mb-4">Free cancellation within 24 hours</li>
                <Link href="https://buy.stripe.com/28o5ny7NxdqydMIdQY">
                  <a className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Pay now
                  </a>
                </Link>
              </ul>
            </div>
          </div>
          <div className="text-center ">
            <h5 className=" text-center font-bold p- mt-12">Single x 4</h5>
            <div>
              <Image
                alt="60 minute lessons"
                title="60 minute lessons"
                src="/singles.png"
                width="300"
                height="300"
              />
              <h6 className="card-subtitle mb-2 ms-4 text-muted text-center">
                60 minutes
              </h6>
              <ul className="list-unstyled">
                <li>World class teacher</li>
                <li>Flexible schedule</li>
                <li>Pay as you go</li>
                <li className="mb-4">Free cancellation within 24 hours</li>
                <Link href="https://buy.stripe.com/fZe6rC0l51HQfUQ007">
                  <a className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Pay now
                  </a>
                </Link>
              </ul>
            </div>
          </div>
          <div className="text-center mt-10 ">
            <h5 className="text-center font-bold p-2 mt-1">Group lesson x 4</h5>
            <div className="card-body">
              <Image
                alt="lessons online"
                title="lessons in a group"
                src="/vidcall.png"
                width="300"
                height="300"
              />
              <h6 className="mb-2 ms-4 text-center">60 minutes</h6>
              <ul className="list-unstyled">
                <li>World class teacher</li>
                <li>Flexible schedule</li>
                <li>Pay as you go</li>
                <li className="mb-4">Free cancellation within 24 hours</li>
                <Link href="https://buy.stripe.com/00gg2cc3NeuC384aEN">
                  <a className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Pay now
                  </a>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-4">
        <Footer />
      </div>
    </div>
  );
}

export default Pricing;
