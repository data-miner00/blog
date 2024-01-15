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
    label: "Career",
    href: personalUrl.career,
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
    label: "Website",
    href: projectsUrl.personal,
  },
  {
    label: "Blog",
    href: projectsUrl.blog,
  },
  {
    label: "Book",
    href: projectsUrl.book,
  },
  {
    label: "Linker",
    href: projectsUrl.linker,
  },
  {
    label: "Hackernews",
    href: projectsUrl.hacker,
  },
  {
    label: "Arknights Afk",
    href: projectsUrl.arknights,
  },
  {
    label: "Invoice",
    href: projectsUrl.invoice,
  },
  {
    label: "Delvis Soligt",
    href: projectsUrl.delvisSoligt,
  },
  {
    label: "Nuxt Content Template",
    href: projectsUrl.nuxtTemplate,
  },
  {
    label: "React Esbuild Template",
    href: projectsUrl.reactTemplate,
  },
  {
    label: "React Rescript Template",
    href: projectsUrl.rescriptTemplate,
  },
];
