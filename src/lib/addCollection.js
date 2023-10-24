import { collection, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { db } from "./firebase";

export default function addCollection(collectionItems) {
  const itemsCollectionRef = collection(db, "items");
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
