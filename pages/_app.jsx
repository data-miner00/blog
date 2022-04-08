import "../styles/globals.css";
import "../styles/layout.css";
import "../styles/home.sass";
import "../styles/article.sass";
import "../styles/preview.sass";
import "../styles/content.sass";
import Layout from "../components/Layout";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
