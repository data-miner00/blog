import Image from "next/image";
import Head from "next/head";
import {
  faCoffee,
  faFlag,
  faGlassCheers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export default function Article() {
  useEffect(() => {
    const floatTip = document.getElementsByClassName("article__float-tip")[0];
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        floatTip.style.opacity = 1;
      } else {
        floatTip.style.opacity = 0;
      }
    });
  }, []);

  return (
    <div className="article">
      <Head>
        <title>Next Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="article__float-tip">
        <div className="inner-wrapper">
          <div className="article__float-tip__content">
            <div className="article__float-tip__content__top">
              <div className="article__float-tip__content__top__title">
                This is my blog
              </div>
              <div className="article__float-tip__content__top__author">
                by Chong Mum Khong
              </div>
              <div className="article__float-tip__content__top__tags">
                <div className="label-tag">abc</div>
                <div className="label-tag">abc</div>
                <div className="label-tag">abc</div>
                <div className="label-tag">absdc</div>
                <div className="label-tag">abdsfc</div>
                <div className="label-tag">abc</div>
              </div>
            </div>
            <div className="article__float-tip__content__btm">
              <div className="action--cheers">
                <div className="action--cheers__icon">
                  <Fa icon={faGlassCheers}></Fa>
                </div>
                <div className="action--cheers__counter">3</div>
              </div>

              <div className="action--coffee">
                <Fa icon={faCoffee}></Fa>
              </div>
              <div className="action--flag">
                <Fa icon={faFlag}></Fa>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="article__illus">
        <img src="/illus.jpg" alt="illustration" width="100%" />
      </div>
      <div className="content-wrapper">
        <div className="article__info">
          <div className="article__info__title">
            This is my first article woohoo.
          </div>
          <div className="article__info__subtitle">
            This is something detailed to explain my title
          </div>
        </div>
        <div className="article__author">
          <div className="article__author__name-group">
            <div className="article__author__name-group__avatar"></div>
            <div className="article__author__name-group__rhs">
              <div className="article__author__name-group__rhs__name">
                Chong Mum Khong
              </div>
              <div className="article__author__name-group__rhs__date">
                January 26<sup>th</sup> • English
              </div>
            </div>
          </div>
          <div className="article__author__action-group">
            <div className="box">
              <Fa icon={faCoffee} />
            </div>
            <div className="box">
              <Fa icon={faFlag} />
            </div>
          </div>
        </div>
        <div className="article__body">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            dicta rerum libero cumque quas fugiat. Molestiae, voluptate, non
            quibusdam cumque ad tenetur beatae ipsam dignissimos minus impedit
            quisquam odio totam? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Tenetur dicta rerum libero cumque quas fugiat.
            Molestiae, voluptate, non quibusdam cumque ad tenetur beatae ipsam
            dignissimos minus impedit quisquam odio totam? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit.
          </p>
          <br></br>
          <p>
            Tenetur dicta rerum libero cumque quas fugiat. Molestiae, voluptate,
            non quibusdam cumque ad tenetur beatae ipsam dignissimos minus
            impedit quisquam odio totam? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Tenetur dicta rerum libero cumque quas fugiat.
            Molestiae, voluptate, non quibusdam cumque ad tenetur beatae ipsam
            dignissimos minus impedit quisquam odio totam?
          </p>
        </div>
      </div>
    </div>
  );
}
