export const personalUrl = {
  intro: process.env.APP_INTRODUCTION_URL,
  edu: process.env.APP_EDUCATION_URL,
  portfolio: process.env.APP_PORTFOLIO_URL,
  resume: process.env.APP_RESUME_URL,
};

export const githubUrl = {
  repo: process.env.APP_GITHUB_REPO_URL,
  issues: process.env.APP_GITHUB_ISSUES_URL,
  pr: process.env.APP_GITHUB_PR_URL,
  readme: process.env.APP_GITHUB_README_URL,
};

export const projectsUrl = {
  personal: process.env.APP_PROJECTS_PERSONAL_URL,
  newtab: process.env.APP_PROJECTS_NEWTAB_URL,
  book: process.env.APP_PROJECTS_BOOK_URL,
  twitter: process.env.APP_PROJECTS_TWITTER_URL,
  covid: process.env.APP_PROJECTS_COVID_URL,
  hacker: process.env.APP_PROJECTS_HACKER_URL,
  hungry: process.env.APP_PROJECTS_HUNGRY_URL,
  leed: process.env.APP_PROJECTS_LEED_URL,
  promo: process.env.APP_PROJECTS_PROMO_URL,
  resource: process.env.APP_PROJECTS_RESOURCE_URL,
};

export const socialsUrl = {
  github: process.env.APP_SOCIALS_GITHUB_URL,
  twitter: process.env.APP_SOCIALS_TWITTER_URL,
  discord: process.env.APP_SOCIALS_DISCORD_URL,
  linkedin: process.env.APP_SOCIALS_LINKEDIN_URL,
};

export const mapLocationUrl = process.env.APP_LOCATION_MAP_URL;

export default {
  personalUrl,
  githubUrl,
  projectsUrl,
  socialsUrl,
  mapLocationUrl,
};
