import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useFormik } from "formik";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { BsImageFill } from "react-icons/bs";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { db } from "@/lib/firebase";
import getAllStates from "@/lib/getAllStates";
import useUpdateItemImage from "@/lib/useUpdateItemImage";

import Input from "../Input";
import SelectInput from "../SelectInput";
import ImageSpinner from "../UserProfile/ImageSpinner";

function EditItemForm({ item, onEdit }) {
  const [selectedImages, setSelectedImages] = useState(item.images);
  const [imageLoading, setImageLoading] = useState(
    Array(item.images.length).fill(false)
  );

  const { updateImage } = useUpdateItemImage();
  const { t } = useTranslation();
  const states = getAllStates(t);

  const formik = useFormik({
    initialValues: {
      title: item.title,
      description: item.description,
      category: item.category,
      location: item.location,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(20, "Title must be less than 20 characters")
        .required("Title is required"),
      description: Yup.string()
        .max(50, "Description must be less than 50 characters")
        .required("Description is required"),
      category: Yup.string().required("Category is required"),
      location: Yup.string().required("Location is required"),
    }),
    onSubmit: async (values) => {
      const itemDocRef = doc(db, "items", item.id);
      const updatedItem = {
        ...values,
        images: selectedImages,
        updated: serverTimestamp(),
      };
      try {
        await updateDoc(itemDocRef, updatedItem);
        onEdit({
          ...updatedItem,
          id: item.id,
          uid: item.uid,
          updated: serverTimestamp(),
          createdAt: item.createdAt,
          images: selectedImages,
        });
        toast.success("Profile updated successfully ✅", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      } catch (error) {
        toast.error(error.code, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      } finally {
        document.getElementById(item.id).close();
      }
    },
  });
  const handleImageChange = async (e, index) => {
    const imageFile = e.target.files[0];
    setImageLoading((prev) =>
      prev.map((loading, i) => (i === index ? true : loading))
    );
    const downloadURL = await updateImage(item, index, imageFile);
    setSelectedImages((prev) =>
      prev.map((image, i) => (i === index ? downloadURL : image))
    );
    setImageLoading((prev) =>
      prev.map((loading, i) => (i === index ? false : loading))
    );
  };

  return (
    <dialog id={item.id} className='modal'>
      <div className='modal-box'>
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
          <h1 className='text-3xl font-black text-center'>
            Update your personal profile
          </h1>
          <div className='flex justify-evenly gap-4 items-center'>
            {item.images.map((image, index) => (
              <figure key={index} className='relative group'>
                {imageLoading[index] && (
                  <ImageSpinner classes='absolute bg-white rounded-lg w-full h-full top-0 bg-opacity-30 flex items-center justify-center' />
                )}
                <Image
                  alt={item.title}
                  width={100}
                  height={100}
                  className='w-32 h-20 object-cover rounded-lg'
                  src={selectedImages[index] || image}
                />
                <div
                  type='file'
                  className='absolute hidden text-center bg-white rounded-lg w-full h-full top-0 group-hover:flex cursor-pointer bg-opacity-40 items-center justify-center'
                >
                  <input
                    type='file'
                    id={item.id + index}
                    onChange={(e) => handleImageChange(e, index)}
                    accept='image/*'
                    className='absolute hidden text-xs'
                  />
                  <label
                    htmlFor={item.id + index}
                    className='text-4xl cursor-pointer'
                  >
                    <BsImageFill />
                  </label>
                </div>
              </figure>
            ))}
          </div>
          <Input
            name='title'
            type='text'
            placeholder='Add a title'
            label='Title'
            handleChange={formik.handleChange}
            value={formik.values.title}
            handleBlur={formik.handleBlur}
            error={formik.errors.title}
            touched={formik.touched.title}
          />
          <Input
            name='description'
            type='text'
            placeholder='Describe your items...'
            label='Description'
            handleChange={formik.handleChange}
            value={formik.values.description}
            handleBlur={formik.handleBlur}
            error={formik.errors.description}
            touched={formik.touched.description}
          />
          <SelectInput
            name='category'
            data={states}
            label='Category'
            handleChange={formik.handleChange}
            value={formik.values.category}
            touched={formik.touched.category}
            error={formik.errors.category}
          />
          <SelectInput
            name='location'
            data={states}
            label='Location'
            handleChange={formik.handleChange}
            value={formik.values.location}
            touched={formik.touched.location}
            error={formik.errors.location}
          />
          <div className='modal-action'>
            <button type='submit' className='btn btn-primary'>
              {t("dashboard:userUpadteForm:submit")}
            </button>
            <div method='dialog'>
              <button
                type='button'
                className='btn'
                onClick={() => document.getElementById(item.id).close()}
              >
                {t("dashboard:userUpadteForm:cancel")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default EditItemForm;
