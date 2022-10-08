import Head from "next/head";
import { client } from "../services/getContentfulClient";
import Header from "../components/Header";
import Layout from "../components/Layout";
import TrendingItem from "../components/TrendingItem";
import HomefeedItem from "../components/HomefeedItem";
import { TrendingIcon } from "../components/icons";
import tempData from "../data/tempDataForTrending.json";

export const getStaticProps = async () => {
  const articlesRes = await client.getEntries({ content_type: "article" });
  const tagsRes = await client.getTags();

  return {
    props: {
      articles: articlesRes.items,
      tags: tagsRes.items.map((tag) => tag.name),
    },
    revalidate: 10,
  };
};

export default function Home({ articles, tags }) {
  articles = articles.map((a) => ({
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
        <title>Personal Next.js Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="home">
        <Header />

        <section className="home__banner">
          <div className="home__banner__label">
            <span>It's almost sunset.</span>
          </div>
          <div className="home__banner__para">
            <p>
              You are now on top of an unknown mountain inside a very deep
              forest, all by yourself. Beyond the cliff is an ocean of lush
              green trees, covering the soil under the horizon. You figure that
              it's probably time to go back and read some blogs...😋
            </p>
          </div>
          <div className="home__banner__button">
            <a href="#feeds">Recommend me</a>
          </div>
        </section>

        <section className="home__trending">
          <div className="wrap">
            <div className="home__trending__label">
              <TrendingIcon />
              <div>
                <span>Trending on Mumk</span>
              </div>
            </div>
            <div className="home__trending__content">
              {tempData.map((t) => (
                <TrendingItem
                  key={t.index}
                  index={t.index}
                  author={t.author}
                  avatarUrl={t.avatarUrl}
                  minRead={t.minRead}
                  title={t.title}
                  date={t.date}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="home__feeds" id="feeds">
          <div className="wrap">
            <main>
              {articles.map((t) => (
                <HomefeedItem
                  key={t.slug}
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
              ))}
            </main>
            <aside>
              <div className="sticky top-[70px]">
                <div className="mb-6">
                  <p className="uppercase text-xs font-extrabold text-white tracking-[0.083em]">
                    Discover more of what matters to you
                  </p>
                </div>
                <div className=" pb-6 border-b border-solid border-gray-600">
                  {tags.map((tag, index) => (
                    <div className="inline-block" key={index}>
                      <div className="inline-block py-[6px] px-[16px] border border-gray-600 rounded-[3px] text-gray-300 mb-2 mr-2 text-[13px] ">
                        <span>{tag}</span>
                      </div>
                    </div>
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
