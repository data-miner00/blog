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
  const encodedUrl = encodeURIComponent(urlToShare);
  const encodedTitle = encodeURIComponent(title);

  const twitterUrls = {
    v1: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    v2: `https://twitter.com/share?url=${encodedUrl}&text=${encodedTitle}`,
  };

  const urls = {
    [SocialMedia.Twitter]: twitterUrls["v1"],
    [SocialMedia.Facebook]: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    [SocialMedia.LinkedIn]: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    [SocialMedia.HackerNews]: `https://www.ycombinator.com/submitlink?u=${encodedUrl}&t=${encodedTitle}`,
    [SocialMedia.Reddit]: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
  };

  return urls[socialMedia];
}
