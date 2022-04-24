import Image from "next/image";

import LinkedInIcon from "./icons/logo/LinkedInIcon";
import GitHubIcon from "./icons/logo/GitHubIcon";
import TwitterIcon from "./icons/logo/TwitterIcon";
import DiscordIcon from "./icons/logo/DiscordIcon";

const LINK =
  "https://www.google.com.my/maps/place/Silverscape+Luxury+Residences/@2.1842208,102.2603256,16.58z/data=!4m5!3m4!1s0x31d1ee04c849c9c5:0xfd2f48ac5ca0a43f!8m2!3d2.1819983!4d102.2627071";

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-solid border-gray-600 pt-48 h-screen">
      <div className="mx-[10vw]">
        <div className="max-w-7xl mx-auto grid xl:grid-cols-12 xl:gap-x-6 xl:grid-rows-3">
          <div className="xl:col-span-3 xl:row-span-2 md:col-span-3 pb-[150px] overflow-hidden text-2xl">
            <div className="uppercase font-bold text-white">Mumk</div>
            <div className="font-semibold text-gray-400 mt-6">
              My personal blogging website on non-technical stuffs.
            </div>
            <div className="mt-6 flex gap-2">
              <div className="flex justify-center items-center h-8 w-8">
                <GitHubIcon />
              </div>
              <div className="flex justify-center items-center h-8 w-8">
                <DiscordIcon size={20} />
              </div>

              <LinkedInIcon fill="white" />
              <TwitterIcon fill="white" />
            </div>

            <div className="relative mt-4 h-24">
              <img
                className="absolute bottom-0 -left-20"
                src="/signature.png"
              />
            </div>
          </div>
          <div className="col-span-2 md:row-start-1 md:col-start-5 text-lg">
            <div className="font-semibold">About me</div>
            <ul className="mt-6">
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Introduction
                </a>
              </li>
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Education
                </a>
              </li>
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Portfolio
                </a>
              </li>
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:row-start-2 md:col-start-5 text-lg">
            <div className="font-semibold">GitHub</div>
            <ul className="mt-6">
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Repository
                </a>
              </li>
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Issues
                </a>
              </li>
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Pull requests
                </a>
              </li>
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Discussions
                </a>
              </li>
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  CI/CD
                </a>
              </li>
            </ul>
          </div>

          <div className="md:row-start-1 md:col-start-7 col-span-2 text-lg row-span-full">
            <div className="font-semibold">Projects</div>
            <ul className="mt-6">
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Personal website
                </a>
              </li>
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Newtab
                </a>
              </li>
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Book
                </a>
              </li>
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Twitter clone
                </a>
              </li>
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Covid tracker
                </a>
              </li>
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Hackernews
                </a>
              </li>
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Hungry
                </a>
              </li>
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Leed
                </a>
              </li>
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Promotion website
                </a>
              </li>
              <li className="mt-1">
                <a className="footer-item-link" href="">
                  Resources website
                </a>
              </li>
            </ul>
          </div>

          <div className="text-lg md:row-start-1 xl:row-span-1 xl:col-start-9 xl:col-span-4">
            <div className="font-semibold">About</div>
            <p className="text-gray-400 mt-6">
              Started out back in May 2021 but poorly designed and maintained.
              Improvement continues in April 2022 to revamp most aspects of the
              site.
            </p>
          </div>

          <div className="text-lg md:row-start-2 xl:row-span-1 xl:col-start-9 xl:col-span-4">
            <div className="font-semibold">Built with</div>
            <div className="mt-6">
              <div className=" flex items-center">
                <Image src="/nextjs.svg" height="80px" width="250px" />
                <span className="text-gray-400">et al.</span>
              </div>
            </div>
          </div>

          <div className="text-lg text-gray-400 md:col-span-full xl:col-start-1 xl:row-start-3 xl:row-span-1 mt-24">
            <p>
              Made by Mum Khong with ❤ at{" "}
              <a className="footer-item-link" href={LINK}>
                Malacca, Malaysia.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
