import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { PostPreview } from "../components/PostPreview";

export default function Home() {
  const [preview, setPreview] = useState([
    {
      imgUrl: "/illus.jpg",
      title: "This is my title and it must be over 10 words long",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      slug: "this-is-my-title",
      language: "en",
      date: "June 3, 2012",
      tags: ["story", "horror", "title"],
    },
    {
      imgUrl: "/illus.jpg",
      title: "This is my title and it must be over 10 words long",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      slug: "this-is-my-title",
      language: "kr",
      date: "June 3, 2012",
      tags: ["story", "horror", "humanity"],
    },
  ]);

  return (
    <div className="home">
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
        <div className="home__banner__animation"></div>
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
          {preview.map((post) => (
            <PostPreview post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
