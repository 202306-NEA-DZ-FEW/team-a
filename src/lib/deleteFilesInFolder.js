import { deleteObject, listAll, ref } from "firebase/storage";

export async function deleteFilesInFolder(storage, folderPath) {
  const folderRef = ref(storage, folderPath);

  try {
    const items = await listAll(folderRef);

    //Loop through the items in the folder
    const deletePromises = items.items.map((itemRef) => {
      //Delete the file
      return deleteObject(itemRef);
    });

    //Wait for all file deletion operations to complete
    await Promise.all(deletePromises);
  } catch (error) {
    throw new Error(error);
  }
}
