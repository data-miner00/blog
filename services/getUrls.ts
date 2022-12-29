const portfolioBaseUrl = "https://portfolio-six-ecru-52.vercel.app";
export const personalUrl = {
  intro: portfolioBaseUrl + "/profile",
  edu: portfolioBaseUrl + "/education",
  portfolio: portfolioBaseUrl + "/projects",
  resume: portfolioBaseUrl,
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
  personal: "https://portfolio-six-ecru-52.vercel.app/",
  newtab: "https://newtab-remastered.vercel.app/",
  book: "https://book-dun-three.vercel.app/",
  twitter: githubUserBaseUrl + "/Twitter-Clone",
  covid: "https://ng-covid-tracker.web.app/",
  hacker: githubUserBaseUrl + "/ng-hackernews",
  hungry: githubUserBaseUrl + "/Hungry",
  linker: githubUserBaseUrl + "/Linker",
  positron: githubUserBaseUrl + "/positron",
  resource: githubUserBaseUrl + "/web-ui",
  algorand: githubUserBaseUrl + "/sandbox.algo",
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
