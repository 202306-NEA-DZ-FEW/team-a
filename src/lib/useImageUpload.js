import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { toast } from "react-toastify";

import { auth, db, storage } from "./firebase";

function useImageUpload() {
  const [loading, setLoading] = useState(false);

  const updateImage = async (userData, imageFile) => {
    setLoading(true);

    if (imageFile) {
      const storageRef = ref(storage, `users/${userData.uid}/profileImage.jpg`);

      try {
        await uploadBytes(storageRef, imageFile);
        const downloadURL = await getDownloadURL(storageRef);

        await updateProfile(auth.currentUser, {
          photoURL: downloadURL,
        });

        const userRef = doc(db, "users", userData.uid);
        await updateDoc(userRef, {
          photoURL: downloadURL,
        });
        toast.success("Photo updated", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
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

export default useImageUpload;
