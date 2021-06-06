import Head from "next/head";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { PostPreview } from "../components/PostPreview";
import { client } from "../services/getContentfulClient";
import Header from "../components/Header";

export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: "article" });
  return {
    props: {
      articles: res.items,
    },
    revalidate: 10,
  };
};

export default function Home({ articles }) {
  console.log(articles);

  return (
    <div className="home">
      <Header />
      <Head>
        <title>Home | Next Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <a href='https://www.freepik.com/photos/background'>Background photo created by denamorado - www.freepik.com</a> */}
      <div className="home__banner">
        <div className="wrap">
          <div className="home__banner__label">
            <h1>
              Blog Of <br />
              All Trades/Kinds
            </h1>
          </div>
          <div className="home__banner__para">
            <p>
              i study, i document, i rant, <span id="wrte">i wrte</span>. Names
              Mum Khong, this is my personal blogging site. Topics of all kinds{" "}
              <span id="avai">available</span>.
            </p>
          </div>
        </div>
        <div className="home__banner__animation">
          <div id="animated-rect"></div>
        </div>
      </div>

      <div className="home__disclaimer"></div>

      <div className="home__author">
        <div className="wrap">
          <div className="home__author__card">
            <div className="home__author__card__avatar">
              <img src="1803151.jpg" alt="my avatar" />
            </div>
            <div className="home__author__card__details">
              <div className="home__author__card__details__para">
                <p>
                  Hi there. I am Mum Khong, a Software Engineerinng freshgrads
                  from UTAR. I am 24 this year and jobless atm. The incentive of
                  making this blog is to improve my writing and critical
                  thinking skills and spend quality time instead of wasting it.
                </p>
              </div>
              <div className="home__author__card__details__social">
                <div>
                  <Fa icon={faFacebook} />
                </div>
                <div>
                  <Fa icon={faLinkedin} />
                </div>
                <div>
                  <Fa icon={faInstagram} />
                </div>
                <div>
                  <Fa icon={faDiscord} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home__posts">
        <div className="wrap">
          {articles.map((post) => (
            <PostPreview key={post.fields.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
