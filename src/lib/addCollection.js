import { collection, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { db } from "./firebase";

export default function addCollection(collectionItems, collectionName) {
  const itemsCollectionRef = collection(db, collectionName);
  collectionItems.forEach(async (item) => {
    const newItemRef = doc(itemsCollectionRef);
    try {
      await setDoc(newItemRef, item);
      toast.success("Collection created ✅", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    }
  });
}
