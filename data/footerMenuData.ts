import { personalUrl, projectsUrl, githubUrl } from "../services/getUrls";

type FooterMenuSection = {
  label: string;
  href: string;
};

export const aboutMeSection: Array<FooterMenuSection> = [
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

export const githubSection: Array<FooterMenuSection> = [
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

export const projectsSection: Array<FooterMenuSection> = [
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
