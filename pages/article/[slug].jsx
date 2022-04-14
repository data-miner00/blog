import Image from "next/image";
import Head from "next/head";
import {
  faCoffee,
  faFlag,
  faGlassCheers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getLanguage } from "../../services/getLanguage";
import { client } from "../../services/getContentfulClient";
import { getDate } from "../../services/getDate";
import Header from "../../components/Header";
import Skeleton from "../../components/Skeleton";
import Layout from "../../components/Layout";
import { BLOCKS } from "@contentful/rich-text-types";
import TwitterIcon from "../../components/icons/logo/TwitterIcon";
import FacebookIcon from "../../components/icons/logo/FacebookIcon";
import LinkedInIcon from "../../components/icons/logo/LinkedInIcon";
import ChainIcon from "../../components/icons/ChainIcon";
import ClapIconFill from "../../components/icons/ClapIconFill";
import BookmarkIcon from "../../components/icons/BookmarkIcon";
import DialogIcon from "../../components/icons/DialogIcon";

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "article",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { items } = await client.getEntries({
    content_type: "article",
    "fields.slug": context.params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { article: items[0] },
    revalidate: 10,
  };
};

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      if (node.data.target.fields.file.contentType === "image/jpeg") {
        return <Image src={node.data.target.fields.file.url} />;
      }
    },
  },
};

export default function Article({ article }) {
  console.log(article);
  if (!article) return <Skeleton />;
  const { title, subtitle, tags, image, cheers, language, content, minutes } =
    article.fields;
  const { createdAt, updatedAt } = article.sys;

  const floatTipRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (floatTipRef.current) {
        if (window.pageYOffset > 500) {
          floatTipRef.current.style.opacity = 1;
          floatTipRef.current.style.pointerEvents = "all";
        } else {
          floatTipRef.current.style.opacity = 0;
          floatTipRef.current.style.pointerEvents = "none";
        }
      }
      return function cleanup() {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <div className="article">
      <Head>
        <title>{title} | Next Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="article__float-tip">
        <div className="inner-wrapper">
          <div className="article__float-tip__content" ref={floatTipRef}>
            <div className="article__float-tip__content__top">
              <div className="article__float-tip__content__top__title">
                {title}
              </div>
              <div className="article__float-tip__content__top__author">
                by Chong Mum Khong
              </div>
              <div className="article__float-tip__content__top__tags">
                {tags.map((tag) => (
                  <div key={tag} className="label-tag">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="article__float-tip__content__btm">
              <div className="action--cheers action">
                <div className="action--cheers__icon">
                  <ClapIconFill fill="#fff" />
                </div>
                <div className="action--cheers__counter">{cheers}</div>
              </div>

              <div className="action">
                <Fa icon={faCoffee}></Fa>
              </div>
              <div className="action">
                <Fa icon={faFlag}></Fa>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="article__illus">
        <img
          src={`https:${image.fields.file.url}`}
          alt="illustration"
          width="100%"
        />
      </div>
      <div className="content-wrapper">
        <div className="article__info">
          <div className="article__info__title">{title}</div>
          <div className="article__info__subtitle">{subtitle}</div>
        </div>
        <div className="article__author">
          <div className="article__author__name-group">
            <div className="article__author__name-group__avatar">
              <Image
                src="/1803151.jpg"
                layout="fill"
                alt="Author's avatar"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
            <div className="article__author__name-group__rhs">
              <div className="article__author__name-group__rhs__name">
                <span>Chong Mum Khong</span>
                <a href="https://www.facebook.com" target="_blank">
                  Follow
                </a>
              </div>
              <div className="article__author__name-group__rhs__date">
                {getDate(createdAt, 2)}&nbsp;&nbsp;·&nbsp;&nbsp;{minutes} min
                read&nbsp;&nbsp;·&nbsp;&nbsp;
                {getLanguage(language)}
              </div>
            </div>
          </div>
          <div className="article__author__action-group">
            <div>
              <TwitterIcon />
            </div>
            <div>
              <FacebookIcon />
            </div>
            <div>
              <LinkedInIcon />
            </div>
            <div>
              <ChainIcon />
            </div>
          </div>
        </div>
        <div className="article__body">
          {documentToReactComponents(content, renderOptions)}
        </div>
        <div className="article__ending">
          <div className="article__ending__published">
            Published on {getDate(createdAt, 3)}
          </div>
          <div className="article__ending__edited">
            Last edited at {getDate(updatedAt, 3)}
          </div>
        </div>
        <div className="article__read-more">
          <div className="article__read-more__heading">Read More</div>
          <div className="article__read-more__articles-list">
            <div className="item">
              <div className="item__thumbnail"></div>
              <div className="item__details">
                <div className="item__details__title">Blog 1</div>
                <div className="item__details__excerpt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, repellat officiis ducimus debitis eligendi sunt
                  similique dolores facere esse explicabo distinctio harum
                  laborum impedit.
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item__thumbnail"></div>
              <div className="item__details">
                <div className="item__details__title">Blog 1</div>
                <div className="item__details__excerpt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, repellat officiis ducimus debitis eligendi sunt
                  similique dolores facere esse explicabo distinctio harum
                  laborum impedit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Article.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
