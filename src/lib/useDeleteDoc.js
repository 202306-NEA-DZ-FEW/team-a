import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";

import { db } from "./firebase";

function useDeleteDoc() {
  const [loading, setLoading] = useState(false);

  const deleteItem = async (itemId) => {
    setLoading(true);
    try {
      const itemDocRef = doc(db, "items", itemId);
      await deleteDoc(itemDocRef);
      toast.success("Item deleted ✅", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  return { deleteItem, loading };
}

export default useDeleteDoc;
