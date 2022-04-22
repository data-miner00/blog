import Head from "next/head";
import { PostPreview } from "../components/PostPreview";
import { client } from "../services/getContentfulClient";

import Header from "../components/Header";
import Layout from "../components/Layout";
import TrendingItem from "../components/TrendingItem";
import HomefeedItem from "../components/HomefeedItem";

import TrendingIcon from "../components/icons/TrendingIcon";

export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: "article" });
  return {
    props: {
      articles: res.items,
    },
    revalidate: 10,
  };
};

const tempData = [
  {
    index: "01",
    author: "Chong Mum Khong",
    avatarUrl:
      "https://miro.medium.com/fit/c/40/40/1*abRenZmSXa-oa2rm9tCJwg.png",
    title: "A very good soothing music for the night",
    description:
      "This is a very very long long pong description than span almost two lines i suppose",
    coverImgUrl: "/mountain.jpg",
    date: "Apr 5",
    minRead: 6,
  },
  {
    index: "02",
    author: "Chong Mum Khong",
    avatarUrl:
      "https://miro.medium.com/fit/c/40/40/1*AQbRi7322aPUWTzp_zOhTg.png",
    title: "A very good soothing music for the night",
    description:
      "This is a very very long long pong description than span almost two lines i suppose",
    coverImgUrl: "/mountain.jpg",
    date: "Apr 5",
    minRead: 6,
  },
  {
    index: "03",
    author: "Chong Mum Khong",
    avatarUrl:
      "https://miro.medium.com/fit/c/40/40/1*1v3kYlO1sYoqfZLuKzIwbQ.png",
    title: "A very good soothing music for the night",
    description:
      "This is a very very long long pong description than span almost two lines i suppose",
    coverImgUrl: "/mountain.jpg",
    date: "Apr 5",
    minRead: 6,
  },
  {
    index: "04",
    author: "Chong Mum Khong",
    avatarUrl: "/1803151smol.jpg",
    title: "A very good soothing music for the night",
    description:
      "This is a very very long long pong description than span almost two lines i suppose",
    coverImgUrl: "/mountain.jpg",
    date: "Apr 5",
    minRead: 6,
  },
  {
    index: "05",
    author: "Chong Mum Khong",
    avatarUrl: "/1803151smol.jpg",
    title: "A very good soothing music for the night",
    description:
      "This is a very very long long pong description than span almost two lines i suppose",
    coverImgUrl: "/mountain.jpg",
    date: "Apr 5",
    minRead: 6,
  },
  {
    index: "06",
    author: "Chong Mum Khong",
    avatarUrl: "/1803151smol.jpg",
    title: "A very good soothing music for the night",
    description:
      "This is a very very long long pong description than span almost two lines i suppose",
    coverImgUrl: "/mountain.jpg",
    date: "Apr 5",
    minRead: 6,
  },
];

export default function Home({ articles }) {
  console.log(articles);

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
            <button>Recommend me</button>
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

        <section className="home__feeds">
          <div className="wrap">
            <main>
              {tempData.map((t) => (
                <HomefeedItem
                  key={t.index}
                  author={t.author}
                  avatarUrl={t.avatarUrl}
                  coverImgUrl={t.coverImgUrl}
                  minRead={t.minRead}
                  description={t.description}
                  title={t.title}
                  date={t.date}
                  language="English"
                  category="Uncategorized"
                />
              ))}
            </main>
            <aside></aside>
          </div>
        </section>

        <section className="home__posts">
          <div className="wrap">
            {articles.map((post) => (
              <PostPreview key={post.fields.slug} post={post} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
