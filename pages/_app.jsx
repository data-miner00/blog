import "../styles/globals.css";
import "../styles/layout.css";
import "../styles/home.sass";
import "../styles/article.sass";
import "../styles/preview.sass";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
