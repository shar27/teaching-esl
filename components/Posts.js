import Link from "next/link";
import Image from "next/image";
import NavTwo from "./components/NavTwo";
import Logo from "./components/Logo";
import Head from "next/head";

export default function Allposts({ post }) {

  //destructuring
  const { title, slug, thumbnail, video } = post.fields;
  console.log(post);

  return (
    <div className="card">
      <Head>
        <title>Learn English online through blogs</title>
        <meta
          name="description"
          content="Best tips to learn English online for Free. Try them now"
          content="width=device-width,initial-scale=1.0"
        />
        <link rel="canonical" href="https://teacher-esl.com" />
      </Head>

      <div className="featured">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          alt="learn english for free thumbnail"
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
        </div>
        <div className="actions">
          <Link href={"/Allposts/" + slug}>
            <a>Read more</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .card {
          transform: rotateZ(-1deg);
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          background: #f01b29;
          padding: 16px 24px;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
