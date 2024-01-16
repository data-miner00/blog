const portfolioBaseUrl = "https://mumk.dev";
export const personalUrl = {
  intro: portfolioBaseUrl + "/profile",
  edu: portfolioBaseUrl + "/education",
  portfolio: portfolioBaseUrl + "/projects",
  career: portfolioBaseUrl + "/career",
};

const repoBaseUrl = "https://github.com/data-miner00/blog";
export const githubUrl = {
  repo: repoBaseUrl,
  issues: repoBaseUrl + "/issues",
  pr: repoBaseUrl + "/pulls",
  readme: repoBaseUrl + "/blob/master/README.md",
};

const githubUserBaseUrl = "https://github.com/data-miner00";
export const projectsUrl = {
  personal: portfolioBaseUrl,
  book: "https://book.mumk.dev/",
  blog: "https://blog.mumk.dev/",
  nuxtTemplate: "https://nuxt-content-template.netlify.app/",
  linker: githubUserBaseUrl + "/Linker",
  hacker: "https://hackernews-4ea93.web.app/",
  reactTemplate: "https://react-esbuild-template.vercel.app/",
  rescriptTemplate: "https://react-rescript-template-kohl.vercel.app/",
  arknights: githubUserBaseUrl + "/arknights-event-afk",
  invoice: githubUserBaseUrl + "/invoice",
  delvisSoligt: githubUserBaseUrl + "/DelvisSoligt",
};

export const socialsUrl = {
  github: githubUserBaseUrl,
  twitter: "https://twitter.com/Has66771004",
  discord: "https://discord.com/users/579562292316864512",
  linkedin: "https://www.linkedin.com/in/chong-mum-khong-343b3b1b0/",
};

export const mapLocationUrl =
  "https://www.google.com.my/maps/place/Silverscape+Luxury+Residences/@2.1842208,102.2603256,16.58z/data=!4m5!3m4!1s0x31d1ee04c849c9c5:0xfd2f48ac5ca0a43f!8m2!3d2.1819983!4d102.2627071";

export default {
  personalUrl,
  githubUrl,
  projectsUrl,
  socialsUrl,
  mapLocationUrl,
};
