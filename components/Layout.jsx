import ToTopButton from "./article/ToTopButton";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="page-content">{children}</div>
      <ToTopButton />
      <Footer />
    </div>
  );
}
