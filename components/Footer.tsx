const LINK =
  "https://www.google.com.my/maps/place/Silverscape+Luxury+Residences/@2.1842208,102.2603256,16.58z/data=!4m5!3m4!1s0x31d1ee04c849c9c5:0xfd2f48ac5ca0a43f!8m2!3d2.1819983!4d102.2627071";

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
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
  );
}
