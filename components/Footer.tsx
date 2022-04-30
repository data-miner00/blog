import Image from "next/image";

import LinkedInIcon from "./icons/logo/LinkedInIcon";
import GitHubIcon from "./icons/logo/GitHubIcon";
import TwitterIcon from "./icons/logo/TwitterIcon";
import DiscordIcon from "./icons/logo/DiscordIcon";

import {
  personalUrl,
  projectsUrl,
  mapLocationUrl,
  socialsUrl,
  githubUrl,
} from "../services/getUrls";

type FooterMenuSection = {
  label: string;
  href: string;
};

const aboutMeSection: FooterMenuSection[] = [
  {
    label: "Introduction",
    href: personalUrl.intro,
  },
  {
    label: "Education",
    href: personalUrl.edu,
  },
  {
    label: "Portfolio",
    href: personalUrl.portfolio,
  },
  {
    label: "Resume",
    href: personalUrl.resume,
  },
];

const githubSection: FooterMenuSection[] = [
  {
    label: "Repository",
    href: githubUrl.repo,
  },
  {
    label: "Issues",
    href: githubUrl.issues,
  },
  {
    label: "Pull requests",
    href: githubUrl.pr,
  },
  {
    label: "Readme",
    href: githubUrl.readme,
  },
  {
    label: "CI/CD",
    href: "",
  },
];

const projectsSection: FooterMenuSection[] = [
  {
    label: "Personal website",
    href: projectsUrl.personal,
  },
  {
    label: "Newtab",
    href: projectsUrl.newtab,
  },
  {
    label: "Book",
    href: projectsUrl.book,
  },
  {
    label: "Twitter clone",
    href: projectsUrl.twitter,
  },
  {
    label: "Covid Tracker",
    href: projectsUrl.covid,
  },
  {
    label: "Hackernews",
    href: projectsUrl.hacker,
  },
  {
    label: "Hungry",
    href: projectsUrl.hungry,
  },
  {
    label: "Leed",
    href: projectsUrl.hungry,
  },
  {
    label: "Promotion website",
    href: projectsUrl.promo,
  },
  {
    label: "Resource website",
    href: projectsUrl.resource,
  },
];

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
                className="absolute bottom-0 -left-20"
                src="/signature.png"
              />
            </div>
          </div>

          {/* 2 */}
          <div className="md:col-span-2 md:row-start-1 md:col-start-4 xl:col-start-5 text-lg">
            <div className="font-semibold">About me</div>
            <ul className="mt-6">
              {aboutMeSection.map((s) => (
                <li className="mt-1">
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
              {githubSection.map((s) => (
                <li className="mt-1">
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
              {projectsSection.map((s) => (
                <li className="mt-1">
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
              Made by Mum Khong with ❤ at{" "}
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
