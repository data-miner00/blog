import Image from "next/image";

import { LinkedInIcon, GitHubIcon, TwitterIcon, DiscordIcon } from "./icons";
import {
  aboutMeSection,
  githubSection,
  projectsSection,
} from "../data/footerMenuData";
import { mapLocationUrl, socialsUrl } from "../services/getUrls";

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-solid border-gray-600 pt-12 pb-12 md:pb-0 md:pt-48 min-h-screen">
      <div className="mx-[10vw]">
        <div className="max-w-7xl mx-auto grid gap-y-12 md:gap-y-0 grid-cols-1 xl:grid-cols-12 xl:gap-x-6 md:auto-rows-auto xl:grid-rows-3 md:gap-4 md:grid-cols-8">
          {/* 1 */}
          <div className="md:col-start-1 md:row-start-1 xl:col-span-3 xl:row-span-2 md:col-span-3 xl:pb-[150px] overflow-hidden text-2xl">
            <div className="uppercase font-bold text-white">Mumk</div>
            <div className="font-semibold text-gray-400 mt-6">
              My personal blogging website on non-technical stuffs.
            </div>
            <div className="mt-6 flex gap-2">
              <a href={socialsUrl.github} target="_blank">
                <div className="flex justify-center items-center h-8 w-8">
                  <GitHubIcon />
                </div>
              </a>

              <a href={socialsUrl.discord} target="_blank">
                <div className="flex justify-center items-center h-8 w-8">
                  <DiscordIcon size={20} />
                </div>
              </a>

              <a href={socialsUrl.linkedin} target="_blank">
                <LinkedInIcon fill="white" />
              </a>

              <a href={socialsUrl.twitter} target="_blank">
                <TwitterIcon fill="white" />
              </a>
            </div>

            <div className="relative mt-4 h-24">
              <img
                className="absolute bottom-6 md:bottom-0 -left-[4.5rem] md:-left-20"
                src="/signature.png"
              />
            </div>
          </div>

          {/* 2 */}
          <div className="md:col-span-2 md:row-start-1 md:col-start-4 xl:col-start-5 text-lg">
            <div className="font-semibold">About me</div>
            <ul className="mt-6">
              {aboutMeSection.map((s, index) => (
                <li className="mt-1" key={index}>
                  <a className="footer-item-link" href={s.href} target="_blank">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3 */}
          <div className="md:col-span-2 md:row-start-1 xl:row-start-2 xl:col-start-5 md:col-start-6 text-lg">
            <div className="font-semibold">GitHub</div>
            <ul className="mt-6">
              {githubSection.map((s, index) => (
                <li className="mt-1" key={index}>
                  <a className="footer-item-link" href={s.href} target="_blank">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4 */}
          <div className="md:row-start-1 md:col-start-8 xl:col-start-7 xl:col-span-2 text-lg md:row-span-3">
            <div className="font-semibold">Projects</div>

            <ul className="mt-6">
              {projectsSection.map((s, index) => (
                <li className="mt-1" key={index}>
                  <a className="footer-item-link" href={s.href} target="_blank">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 5 */}
          <div className="text-lg md:row-start-2 xl:row-start-1 xl:row-span-1 xl:col-start-9 xl:col-span-4 md:col-span-4">
            <div className="font-semibold">About</div>
            <p className="text-gray-400 mt-6">
              Started out back in May 2021 but poorly designed and maintained.
              Improvement continues in April 2022 to revamp most aspects of the
              site.
            </p>
          </div>

          {/* 6 */}
          <div className="text-lg md:row-start-2 xl:row-span-1 xl:col-start-9 xl:col-span-4 md:col-start-5 md:col-span-3">
            <div className="font-semibold">Built with</div>
            <div className="mt-6">
              <div className=" flex items-center justify-center xl:justify-start">
                <a href="https://nextjs.org/" target="_blank">
                  <Image src="/nextjs.svg" height="80px" width="250px" />
                </a>
                <span className="text-gray-400 hidden xl:block">et al.</span>
              </div>
            </div>
          </div>

          {/* 7 */}
          <div className="text-lg text-gray-400 md:col-span-full xl:col-start-1 xl:row-start-3 xl:row-span-1 xl:mt-24">
            <p>
              Made by Mum Khong with{" "}
              <span
                title="love"
                className=" transition-colors duration-200 hover:text-pink-400 cursor-pointer"
              >
                ❤
              </span>{" "}
              at{" "}
              <a className="footer-item-link" href={mapLocationUrl}>
                Malacca, Malaysia.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
