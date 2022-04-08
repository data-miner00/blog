import "../styles/globals.css";
import "../styles/layout.css";
import "../styles/home.sass";
import "../styles/article.sass";
import "../styles/preview.sass";
import "../styles/content.sass";

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default App;
