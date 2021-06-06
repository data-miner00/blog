import Head from "next/head";
import {
  faTwitter,
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

      <div className="home__author">
        <div className="wrap">
          <div className="home__author__label">
            <h3>About Me</h3>
          </div>
          <div className="home__author__card">
            <div className="home__author__card__avatar">
              <img src="1803151.jpg" alt="my avatar" />
            </div>
            <div className="home__author__card__details">
              <div className="home__author__card__details__para">
                <p>
                  Hi there. I am Mum Khong, a Software Engineerinng freshgrads
                  from UTAR. I am 24 this year. The incentive of making this
                  blog is to improve my writing and critical thinking skills and
                  make good use of my time.
                </p>
              </div>
              <div className="home__author__card__details__social">
                <div
                  className="home__author__card__details__social__icon"
                  id="facebook"
                >
                  <a href="#" target="_blank">
                    <Fa icon={faFacebook} />
                  </a>
                </div>

                <div
                  className="home__author__card__details__social__icon"
                  id="instagram"
                >
                  <a href="#" target="_blank">
                    <Fa icon={faInstagram} />
                  </a>
                </div>
                <div
                  className="home__author__card__details__social__icon"
                  id="twitter"
                >
                  <a href="#" target="_blank">
                    <Fa icon={faTwitter} />
                  </a>
                </div>
                <div
                  className="home__author__card__details__social__icon"
                  id="linkedin"
                >
                  <a href="#">
                    <Fa icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home__disclaimer">
        <div className="wrap-wrap">
          <div className="wrap">
            <div className="home__disclaimer__label">Disclaimer:</div>
            <div className="home__disclaimer__body">
              The articles written are by no means a reliable source for scholar
              reference whatsoever. Though facts are frequently described in the
              articles, the content as a whole might be severely opinionated.
              Fact-finding must be performed by one's who intend to cite an
              excerpt from any of my article.
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

      <div className="home__illustration">
        <div className="wrap">
          <img
            src="undraw_wall_post.svg"
            alt=""
            className="home__illustration__image"
          />
          <div className="home__illustration__credit">
            <a href="https://undraw.co" target="_blank">
              Lovely illustration by <span id="undraw">unDraw.co</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
