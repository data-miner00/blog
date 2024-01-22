import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Layout from "../components/Layout";
import TrendingItem from "../components/TrendingItem";
import HomefeedItem from "../components/HomefeedItem";
import { client } from "../services/getContentfulClient";
import { TrendingIcon } from "../components/icons";
import { getDate } from "../services/getDate";
import {
  trendingItemContainerMotion,
  trendingItemMotion,
  masterContainerMotion,
  masterContainerChildrenMotion,
  blogItemMotion,
} from "../motions/homepage";

export const getStaticProps = async () => {
  const articlesRes = await client.getEntries({
    content_type: "article",
    order: "-sys.createdAt",
  });
  const tagsRes = await client.getTags();

  return {
    props: {
      _articles: articlesRes.items,
      tags: tagsRes.items.map((tag) => tag.name),
    },
    revalidate: 10,
  };
};

export default function Home({ _articles, tags }) {
  const articles = _articles.map((a) => ({
    slug: a.fields.slug,
    author: "Chong Mum Khong",
    avatarUrl: "/1803151smol.jpg",
    title: a.fields.title,
    description: a.fields.subtitle,
    date: a.sys.createdAt,
    coverImgUrl: `https:${a.fields.image.fields.file.url}`,
    language: a.fields.language,
    category: a.fields.category,
    minRead: a.fields.minutes,
    publication: a.fields.publication,
  }));

  return (
    <>
      <Head>
        <title>My Blog | Mumk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="home">
        <Header />

        <motion.section
          className="home__banner"
          variants={masterContainerMotion}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="home__banner__label"
            variants={masterContainerChildrenMotion}
          >
            <span>It's almost sunset.</span>
          </motion.div>
          <motion.div
            className="home__banner__para"
            variants={masterContainerChildrenMotion}
          >
            <p>
              You are now on top of an unknown mountain inside a very deep
              forest, all by yourself. Beyond the cliff is an ocean of lush
              green trees, covering the soil under the horizon. You figure that
              it's probably time to go back and read some blogs...😋
            </p>
          </motion.div>
          <motion.div
            className="home__banner__button"
            variants={masterContainerChildrenMotion}
          >
            <a href="#feeds">Recommend me</a>
          </motion.div>
        </motion.section>

        <section className="home__trending">
          <div className="wrap">
            <div className="home__trending__label">
              <TrendingIcon />
              <div>
                <span>Trending on Mumk</span>
              </div>
            </div>
            <motion.ul
              className="home__trending__content"
              variants={trendingItemContainerMotion}
              initial="hidden"
              animate="show"
            >
              {articles.slice(0, 6).map((article, index) => (
                <motion.li key={index} variants={trendingItemMotion}>
                  <TrendingItem
                    index={index + 1}
                    slug={article.slug}
                    author={article.author}
                    avatarUrl={article.avatarUrl}
                    minRead={article.minRead}
                    title={article.title}
                    date={getDate(article.date, 2)}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        <section className="home__feeds" id="feeds">
          <div className="wrap">
            <ul>
              {articles.map((t) => (
                <motion.li
                  key={t.slug}
                  variants={blogItemMotion}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <HomefeedItem
                    slug={t.slug}
                    author={t.author}
                    avatarUrl={t.avatarUrl}
                    coverImgUrl={t.coverImgUrl}
                    minRead={t.minRead}
                    description={t.description}
                    title={t.title}
                    date={t.date}
                    language={t.language}
                    category={t.category}
                    publication={t.publication}
                  />
                </motion.li>
              ))}
            </ul>
            <aside>
              <div className="sticky top-[70px]">
                <div className="mb-6">
                  <p className="uppercase text-xs font-extrabold text-white tracking-[0.083em]">
                    Discover more of what matters to you
                  </p>
                </div>
                <div className=" pb-6 border-b border-solid border-gray-600">
                  {tags.map((tag, index) => (
                    <Link href={`/tags/${tag}`} key={index}>
                      <div className="inline-block py-[6px] px-[16px] border border-gray-600 rounded-[3px] text-gray-300 mb-2 mr-2 text-[13px] cursor-pointer">
                        <span>{tag}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <p className="text-gray-500 text-xs">
                    Inspired by{" "}
                    <a
                      href="https://medium.com/"
                      target="_blank"
                      className="font-bold hover:underline"
                    >
                      Medium.com
                    </a>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
