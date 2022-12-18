import Head from "next/head";

import Header from "../../components/Header";
import Layout from "../../components/Layout";
import HomefeedItem from "../../components/HomefeedItem";

import { client } from "../../services/getContentfulClient";

export const getStaticPaths = async () => {
  const res = await client.getTags();

  const paths = res.items.map((item) => ({
    params: { tag: item.name },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  const { items } = await client.getEntries({
    content_type: "article",
    "metadata.tags.sys.id[all]": context.params.tag,
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
    props: {
      tag: context.params.tag,
      articles: items,
    },
  };
};

type Props = {
  tag: string;
  articles: Array<any>;
};

function Tag({ tag, articles }: Props): JSX.Element {
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
        <title>{tag} | Mumk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div>
        <Header />
        <main className="pt-[150px] pb-[50px] max-w-[1192px] mx-auto">
          <h1 className=" text-3xl font-bold mb-20">
            Topics related to "{tag}" - {articles.length} results
          </h1>

          <div className="max-w-[695px]">
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
          </div>
        </main>
      </div>
    </>
  );
}

export default Tag;

Tag.getLayout = function getLayout(page: React.ReactChild) {
  return <Layout>{page}</Layout>;
};
