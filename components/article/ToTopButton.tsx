import { useEffect, useRef } from "react";

function ToTopButton(): JSX.Element {
  const toTopButtonRef = useRef<HTMLAnchorElement>();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (toTopButtonRef.current) {
        if (window.pageYOffset > 500) {
          toTopButtonRef.current.style.opacity = "1";
          toTopButtonRef.current.style.pointerEvents = "all";
        } else {
          toTopButtonRef.current.style.opacity = "0";
          toTopButtonRef.current.style.pointerEvents = "none";
        }
      }
      return function cleanup() {
        window.removeEventListener("scroll", null);
      };
    });
  }, []);

  return (
    <a
      ref={toTopButtonRef}
      href="#"
      className="hidden lg:flex justify-center items-center h-16 w-16 rounded-full bg-[var(--color1)] fixed bottom-8 right-8 hover:bg-[#746ee6]"
      title="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="block"
      >
        <path
          fillRule="evenodd"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        />
      </svg>
    </a>
  );
}

export default ToTopButton;
