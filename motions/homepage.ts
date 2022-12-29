import { Variants } from "framer-motion";

export const masterContainerMotion: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const masterContainerChildrenMotion: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

export const trendingItemContainerMotion: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delay: 0.5,
    },
  },
};

export const trendingItemMotion: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const blogItemMotion: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
