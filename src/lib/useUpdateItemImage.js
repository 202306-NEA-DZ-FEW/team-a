import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { toast } from "react-toastify";

import { storage } from "./firebase";

function useUpdateItemImage() {
  const [loading, setLoading] = useState(true);

  const updateImage = async (item, index, imageFile) => {
    setLoading(true);

    if (imageFile) {
      const storageRef = ref(
        storage,
        `items/${item.id}/${item.title}_${index}.jpg`
      );

      try {
        await uploadBytes(storageRef, imageFile);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
      } catch (error) {
        toast.error(error.code, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return { loading, updateImage };
}

export default useUpdateItemImage;
