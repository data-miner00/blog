import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getEnvironments } from "./getEnvironments";

const firebaseConfig = getEnvironments().firebase;

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// collections name
export const collections = {
  CHEERS: "cheers",
};
