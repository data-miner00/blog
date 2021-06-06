const LINK =
  "https://www.google.com.my/maps/place/Silverscape+Luxury+Residences/@2.1842208,102.2603256,16.58z/data=!4m5!3m4!1s0x31d1ee04c849c9c5:0xfd2f48ac5ca0a43f!8m2!3d2.1819983!4d102.2627071";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="page-content">{children}</div>

      <footer className="footer">
        {/* <div className="footer__logo">
          <div className="footer__logo__icon">
            <svg
              width="36"
              height="40"
              viewBox="0 0 36 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="13.5" cy="5.5" r="5.5" fill="#CFE5CC" />
              <circle cx="30.5" cy="16.5" r="5.5" fill="#E8AE83" />
              <circle cx="8.5" cy="27.5" r="8.5" fill="#2178AE" />
              <circle cx="30.5" cy="33.5" r="5.5" fill="#FAC92C" />
            </svg>
          </div>
          <div className="footer__social">

          </div>
          <div className="footer__logo__word">mumk</div>
        </div> */}
        <div className="footer__made-by">
          Made by Mum Khong with{" "}
          <span id="love" title="love">
            ❤
          </span>{" "}
          at{" "}
          <span id="place">
            <a href={LINK}>Malacca, Malaysia.</a>
          </span>
        </div>
        <div className="footer__copyright">
          &copy; Chong Mum Khong 2021. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
