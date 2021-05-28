export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <div className="logo">mumk</div>
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
    </div>
  );
}
