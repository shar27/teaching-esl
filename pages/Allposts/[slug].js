import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Nav from "../../components/components/Nav";
import Logo from "../../components/components/Logo";
import Head from "next/head";
import ReactPlayer from "react-player";
import { useState } from "react";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "posts",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "posts",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  return {
    props: { post: items[0] },
    revalidate: 1,
  };
};

export default function Allposts({ post }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const { featuredImage, title, information, video } = post.fields;

console.log(post);

  return (
    <div>
      <Head>
        <title>
          Start learning to speak English today for free! - Learn to speak
          English with a British Native speaker.
        </title>
        <meta
          name="google-site-verification"
          content="post"
          description="The best way to learn any language is through immersion. If you wish to speak English fluently, a lot of practice is required. Don't waste your time trying to learn English from books or from CDs. Learn English from native speakers in real-time."
        />
        <link rel="icon" href="/head.png" />
      </Head>
      <Logo />
      <Nav />
      <div className="banner">
        <Image
          
          alt="something"
          src={"https:" + featuredImage.fields.file.url}
          width={1350}
          height={850}
        />
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>

      

      <div className="grid grid-rows-2 grid-cols-1 gap-2">
        <div className="method">
          <h3 className="text-4xl font-bold font-serif mb-20 text-center">
            Method:
          </h3>
          <div className="container ml-10 text-2xl">
            {documentToReactComponents(information)}
          </div>
        </div>
        <div className="flex justify-center">
          <ReactPlayer
            controls={true}
            url={"https:" + video.fields.file.url}
            playing={isPlaying}
            height="100%"
            width="50%"
          />
        </div>
      </div>

      <style jsx>{`
        h2,
        h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);

          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
        }
        .hero {
          width: 50px;
          height: 50px;
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
    </div>
  );
}
