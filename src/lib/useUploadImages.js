import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { toast } from "react-toastify";

import { storage } from "./firebase";

function useUploadImages() {
  const [loading, setLoading] = useState(false);

  const uploadImages = async (imageRef, imageFiles) => {
    setLoading(true);

    if (imageFiles && imageFiles.length > 0) {
      try {
        // Promise.all to upload multiple images in parallel
        const uploadPromises = imageFiles.map(async (imageFile, index) => {
          const storageRef = ref(storage, `${imageRef}_${index}.jpg`);
          await uploadBytes(storageRef, imageFile);
          return getDownloadURL(storageRef);
        });

        // Wait for all uploads to complete
        const downloadURLs = await Promise.all(uploadPromises);

        return downloadURLs;
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

  return { uploadImages, loading };
}

export default useUploadImages;
