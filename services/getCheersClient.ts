import {
  getDoc,
  serverTimestamp,
  doc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";

import { firestore, collections } from "./getFirebaseClient";

export async function getCheers(articleId: string) {
  const docSnapshot = await getDoc(
    doc(firestore, collections.CHEERS, articleId)
  );
  return docSnapshot.exists() ? (docSnapshot.data().cheers as number) : 0;
}

export async function incrementCheers(articleId: string) {
  const docRef = doc(firestore, collections.CHEERS, articleId);
  const docSnapshot = await getDoc(docRef);
  docSnapshot.exists()
    ? await updateDoc(docRef, {
        cheers: increment(1),
        updatedAt: serverTimestamp(),
      })
    : await setDoc(docRef, {
        cheers: 1,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
}
