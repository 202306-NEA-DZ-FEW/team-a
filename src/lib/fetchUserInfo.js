import { doc, getDoc } from "firebase/firestore";

import { db } from "./firebase";

export default async function fetchUserInfo(uid) {
  const userRef = doc(db, "users", uid);

  try {
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      const userData = JSON.parse(JSON.stringify(userDoc.data()));
      return {
        ...userData,
      };
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
