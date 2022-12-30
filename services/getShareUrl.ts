export enum SocialMedia {
  Twitter = "twitter",
  Facebook = "facebook",
  LinkedIn = "linkedin",
  Reddit = "reddit",
  HackerNews = "hackernews",
}

export function getShareUrl(
  socialMedia: SocialMedia,
  urlToShare: string,
  title: string
): string {
  const twitterUrls = {
    v1: `https://twitter.com/intent/tweet?url=${urlToShare}&text=${title}`,
    v2: `https://twitter.com/share?url=${urlToShare}&text=${title}`,
  };

  const urls = {
    [SocialMedia.Twitter]: twitterUrls["v1"],
    [SocialMedia.Facebook]: `https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`,
    [SocialMedia.LinkedIn]: `https://www.linkedin.com/shareArticle?mini=true&url=${urlToShare}&title=${title}`,
    [SocialMedia.HackerNews]: `https://www.ycombinator.com/submitlink?u=${urlToShare}&t=${title}`,
    [SocialMedia.Reddit]: `https://www.reddit.com/submit?url=${urlToShare}&title=${title}`,
  };

  return urls[socialMedia];
}
