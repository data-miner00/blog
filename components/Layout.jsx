import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Layout({ children }) {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        headerRef.current.style.background = "#361d12";
        // header.style.borderBottom = "1px solid #eee";
        // header.style.backdropFilter = "blur(5px)";
      } else {
        headerRef.current.style.background = "transparent";
        // header.style.borderBottom = "none";
        // header.style.backdropFilter = "none";
      }
    });
  }, []);

  return (
    <div className="layout">
      <header ref={headerRef}>
        <Link href="/">
          <div className="logo">mumk</div>
        </Link>
        <div className="burger">
          <svg
            id="burger"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="13" y="5" width="4" height="12" fill="white" />
            <rect x="7" y="9" width="4" height="8" fill="white" />
            <rect x="1" y="1" width="4" height="16" fill="white" />
            <rect
              id="rect3"
              x="13"
              y="1"
              width="4"
              height="16"
              fill="#DC143C"
            />
            <rect id="rect1" x="1" y="1" width="4" height="16" fill="#DC143C" />
            <rect id="rect2" x="7" y="1" width="4" height="16" fill="#DC143C" />
          </svg>
        </div>
      </header>

      <div className="page-content">{children}</div>

      <footer className="footer">
        <div className="footer__copy">Chong Mum Khong &copy; 2021</div>
      </footer>
    </div>
  );
}
