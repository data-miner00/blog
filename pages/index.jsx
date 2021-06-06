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
import { useRef, useEffect } from "react";

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
  const animationBarRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        animationBarRef.current.style.visibility = "hidden";
      } else {
        animationBarRef.current.style.visibility = "visible";
      }
    });
  }, []);

  return (
    <div className="home">
      <Head>
        <title>Home | Next Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      {/* Photo by <a href="https://unsplash.com/@danielcgold?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan Gold</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}

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
              <a href="#posts">
                <span id="avai">available</span>
              </a>
              .
            </p>
          </div>
        </div>
        <div className="home__banner__animation" ref={animationBarRef}>
          <div id="animated-rect"></div>
        </div>
      </div>

      <div className="home__disclaimer"></div>

      <div className="home__author">
        <div className="wrap">
          <div className="home__author__label">About Me</div>
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

      <div className="home__posts" id="posts">
        <div className="wrap">
          {articles.map((post) => (
            <PostPreview key={post.fields.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
