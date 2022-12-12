import Image from "next/image";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import Header from "../../components/Header";
import Skeleton from "../../components/Skeleton";
import Layout from "../../components/Layout";
import { getLanguage } from "../../services/getLanguage";
import { client } from "../../services/getContentfulClient";
import { getDate } from "../../services/getDate";
import { projectsUrl, socialsUrl } from "../../services/getUrls";
import { getLinkToClipboard } from "../../services/getLinkToClipboard";
import { getStaticSidePath } from "../../services/getStaticSidePath";
import { getShareUrl, SocialMedia } from "../../services/getShareUrl";
import { getApiClient as clientApi } from "../../services/getApiClient/clientSide";
import { getCheers } from "../../services/getCheersClient";

import {
  TwitterIcon,
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  ChainIcon,
  ClapIcon,
  BookmarkIcon,
  ArrowPointingUpFromBoxIcon,
  DialogIcon,
  AddBookmarkIcon,
  MailPlusIcon,
  GlobeIcon,
  DiscordIcon,
} from "../../components/icons";

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

  const article = items[0];
  const articleId = article.sys.id;

  const cheers = await getCheers(articleId);

  return {
    props: { article, _cheers: cheers, articleId },
    revalidate: 10,
  };
};

export default function Article({ article, _cheers, articleId }) {
  if (!article) return <Skeleton />;

  const { title, subtitle, tags, image, language, content, minutes } =
    article.fields;
  const { createdAt, updatedAt } = article.sys;
  const floatTipRef = useRef();
  const [cheers, setCheers] = useState(_cheers);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (floatTipRef.current) {
        if (
          window.pageYOffset > 500 &&
          window.pageYOffset < document.documentElement.scrollHeight - 1800
        ) {
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
    <>
      <Head>
        <title>{title} | Next Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="article">
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
                <button
                  className="action--cheers action"
                  onClick={() => {
                    clientApi()
                      .incrementCheers(articleId)
                      .then(() => setCheers(cheers + 1));
                  }}
                >
                  <div className="action--cheers__icon">
                    <ClapIcon fill="#fff" />
                  </div>
                  <div className="action--cheers__counter">{cheers}</div>
                </button>

                <div className="action">
                  <DialogIcon fill="#fff" />
                </div>
                <div className="action">
                  <AddBookmarkIcon fill="#fff" />
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
                  <a href={socialsUrl.twitter} target="_blank">
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
              <a
                target="_blank"
                href={getShareUrl(
                  SocialMedia.Twitter,
                  getStaticSidePath(),
                  title
                )}
              >
                <TwitterIcon />
              </a>
              <a
                target="_blank"
                href={getShareUrl(
                  SocialMedia.Facebook,
                  getStaticSidePath(),
                  title
                )}
              >
                <FacebookIcon />
              </a>
              <a
                target="_blank"
                href={getShareUrl(
                  SocialMedia.LinkedIn,
                  getStaticSidePath(),
                  title
                )}
              >
                <LinkedInIcon />
              </a>
              <button
                onClick={() => {
                  getLinkToClipboard();
                  setCopied(true);
                  setInterval(() => setCopied(false), 2000);
                }}
                className="relative"
              >
                {copied && (
                  <div className="absolute z-10 -top-10 -left-8 h-9 w-24 leading-9 font-bold bg-green-500 rounded-md text-center">
                    <span>Copied!</span>
                    <div className="absolute w-2 h-2 -bottom-1 left-11 z-0 bg-green-500 transform rotate-45"></div>
                  </div>
                )}
                <ChainIcon size={34} />
              </button>
              <div className="vr"></div>
              <div>
                <ArrowPointingUpFromBoxIcon fill="#ccc" size={34} />
              </div>
            </div>
          </div>
          <div className="article__body">
            {documentToReactComponents(content)}
          </div>
          <div className="article__ending">
            <div className="article__ending__actions">
              <div className="article__ending__actions__left">
                <button
                  className="flex items-center mr-5"
                  onClick={() => {
                    clientApi()
                      .incrementCheers(articleId)
                      .then(() => setCheers(cheers + 1));
                  }}
                >
                  <ClapIcon size={28} fill="#fff" className="mr-1" />
                  <span>{cheers}</span>
                </button>
                <div>
                  <DialogIcon size={28} fill="#fff" />
                </div>
              </div>
              <div className="article__ending__actions__right">
                <BookmarkIcon size={28} fill="#fff" />
                <ArrowPointingUpFromBoxIcon size={28} fill="#fff" />
              </div>
            </div>
            <div className="article__ending__tags">
              {tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <div className="article__ending__dates">
              <span>
                - Article first published on {getDate(createdAt, 3)} · Last
                edited at {getDate(updatedAt, 3)} -
              </span>
            </div>

            <div className="article__ending__subscription">
              <h1>Sign me up for more stories like this</h1>
              <p className="article__ending__subscription__author">
                By <span>Chong Mum Khong</span>
              </p>
              <p className="article__ending__subscription__pitch">
                I share things that I find interesting, things that I see value,
                opinion that matters. Might not fit everyone's appetite but if
                it indeed resonates with you, please consider to follow my
                newsletter. For technical writings in the form of documentation,
                blog and tutorial, you may find me at
                https://book-dun-three.vercel.app where I will be posting there
                regularly as well.
              </p>
              <div className="article__ending__subscription__email">
                <div className="input-wrapper">
                  <input type="text" placeholder="Your email" />
                </div>
                <div className="btn-wrapper">
                  <button>
                    <MailPlusIcon size={38} />
                    <div>Get this newsletter</div>
                  </button>
                </div>
              </div>
              <div className="article__ending__subscription__terms">
                <p>
                  By signing up, you will receive weekly email on my article and
                  give me the consent to keep track of your email in my
                  database. Review the{" "}
                  <span className="underline">Privacy Policy</span> for more
                  information about my privacy practices.
                </p>
              </div>
            </div>

            <div className="article__ending__author">
              <div className="article__ending__author__avatar">
                <Image
                  src="/1803151.jpg"
                  layout="fill"
                  alt="Author's avatar"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
              <div className="article__ending__author__name">
                <span>Chong Mum Khong</span>
              </div>
              <div className="article__ending__author__followers">
                3.14 Followers
              </div>
              <div className="article__ending__author__tagline">
                Mind your own business.
              </div>
              <div className="article__ending__author__description">
                Son, Friend, Moron, Tech Advocate, CSS, C#, Next.js, Nuxt.js ·
                @kusama @solana @cardano @avalanche · #English #Japanese #Malay
                #Chinese #Korean
              </div>
              <div className="article__ending__author__actions">
                <div className="article__ending__author__actions__left">
                  <a
                    className="follow-btn"
                    href={socialsUrl.twitter}
                    target="_blank"
                  >
                    <span>Follow</span>
                  </a>
                  <div className="mail-btn">
                    <MailPlusIcon size={34} />
                  </div>
                </div>
                <div className="article__ending__author__actions__right">
                  <a href={socialsUrl.discord} target="_blank">
                    <div>
                      <DiscordIcon size={20} fill="currentColor" />
                    </div>
                  </a>
                  <a href={socialsUrl.twitter} target="_blank">
                    <TwitterIcon fill="currentColor" />
                  </a>
                  <a href={socialsUrl.linkedin} target="_blank">
                    <LinkedInIcon fill="currentColor" />
                  </a>
                  <a href={socialsUrl.github} target="_blank">
                    <div>
                      <GitHubIcon fill="currentColor" />
                    </div>
                  </a>
                  <a href={projectsUrl.personal} target="_blank">
                    <div>
                      <GlobeIcon fill="currentColor" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Article.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
