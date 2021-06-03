const LANGUAGES = {
  en: "English",
  jp: "日本語",
  kr: "한국어",
  ch: "中文",
};

export const getLanguage = (lang) => {
  return LANGUAGES[lang];
};
