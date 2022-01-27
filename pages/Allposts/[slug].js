import { createClient } from "contentful";
import {
  documentToReactComponents,
  BLOCKS,
} from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import NavTwo from "../../components/components/Nav";
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
  const { featuredImage, title, information, video, seo, description } =
    post.fields;

  console.log(post);

  return (
    <div>
      <Head>
        <title>{seo}</title>
        <meta
          lang="en"
          name="robots"
          content="width=device-width,initial-scale=1.0"
          description={description}
        />

        <link rel="icon" href="https:teacher-esl.com" />
      </Head>
      <Logo />
      <NavTwo />
      <div className="banner">
        <Image
          alt="featured image for learning english"
          title="learn english for free"
          src={"https:" + featuredImage.fields.file.url}
          width={1400}
          height={550}
        />
        <h1 className="text-4xl font-bold text-center font-serif">{title}</h1>
      </div>

      <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-1 lg:grid-rows-2 lg:grid-cols-1 gap-2">
        <div className="method">
          <h3 className="text-4xl font-bold font-serif mb-20 text-center mt-20">
            Method:
          </h3>
          <div className="container ml-2 md:ml-5 lg:ml-10 text-2xl p-5">
            <div className=""> {documentToReactComponents(information)}</div>
          </div>
        </div>
        <div className="flex justify-center w-66 h-66 md:w-full md:h-72 lg:w-full lg:h-72">
          <ReactPlayer
            alt="video for learning"
            title="learn english for free"
            loop={true}
            controls={true}
            url={"https:" + video.fields.file.url}
            playing={isPlaying}
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
