import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useFormik } from "formik";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { BsImageFill } from "react-icons/bs";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { db } from "@/lib/firebase";
import getAllCategories from "@/lib/getAllCategories";
import getAllStates from "@/lib/getAllStates";
import useUpdateItemImage from "@/lib/useUpdateItemImage";

import Input from "../Input";
import SelectInput from "../SelectInput";
import TextAreaInput from "../TextAreaInput";
import ImageSpinner from "../UserProfile/ImageSpinner";

function EditItemForm({ item, onEdit }) {
  const [selectedImages, setSelectedImages] = useState(item.images);
  const [imageLoading, setImageLoading] = useState(
    Array(item.images.length).fill(false)
  );

  const { updateImage } = useUpdateItemImage();
  const { t, i18n } = useTranslation();
  const states = getAllStates(t);
  const categories = getAllCategories(t);

  const formik = useFormik({
    initialValues: {
      title: item.title,
      description: item.description,
      category: item.category,
      location: item.location,
    },
    validationSchema: Yup.object({
      title: Yup.string().required(t("addItem:titleRequired")),
      description: Yup.string()
        .max(250, "description too long")
        .required(t("addItem:descriptionRequired")),
      category: Yup.string().required(t("addItem:categoryRequired")),
      location: Yup.string().required(t("addItem:locationRequired")),
    }),
    onSubmit: async (values) => {
      const itemDocRef = doc(db, "items", item.id);
      const updatedItem = {
        ...values,
        title: values.title.toLowerCase(),
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
        document.getElementById(`my_modal_${item.id}`).close();
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
    <dialog
      id={`my_modal_${item.id}`}
      className='modal cursor-default bg-black bg-opacity-40'
    >
      <div
        dir={i18n.language == "ar" ? "rtl" : "ltr"}
        className='md:max-w-xl w-[90%] z-50 h-[90%]  transition-all duration-500 ease-in-out overflow-y-scroll no-scrollbar bg-base-100 rounded-2xl p-8'
      >
        <form
          onSubmit={formik.handleSubmit}
          className='flex w-full flex-col gap-3'
        >
          <h1 className='text-xl font-bold text-center'>
            {t("dashboard:editItemForm:updateItem")}
          </h1>
          <div className='flex justify-evenly gap-4 items-center'>
            {item.images.map((image, index) => (
              <figure key={index} className='relative group'>
                {imageLoading[index] && (
                  <ImageSpinner classes='absolute bg-base-100 rounded-lg w-full h-full top-0 bg-opacity-30 flex items-center justify-center' />
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
                  className='absolute hidden text-center bg-base-100 rounded-lg w-full h-full top-0 group-hover:flex cursor-pointer bg-opacity-40 items-center justify-center'
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
            placeholder={t("addItem:titlePlaceholder")}
            label={t("addItem:titleLabel")}
            handleChange={formik.handleChange}
            value={formik.values.title}
            handleBlur={formik.handleBlur}
            error={formik.errors.title}
            touched={formik.touched.title}
            sm
          />
          <TextAreaInput
            name='description'
            type='text'
            placeholder={t("addItem:descriptionPlaceHolder")}
            label={t("addItem:descriptionLabel")}
            handleChange={formik.handleChange}
            value={formik.values.description}
            handleBlur={formik.handleBlur}
            error={formik.errors.description}
            touched={formik.touched.description}
            textLength={formik.values.description.length}
            maxLength={250}
          />
          <SelectInput
            name='category'
            data={categories}
            label={t("addItem:categoryLabel")}
            handleChange={formik.handleChange}
            value={formik.values.category}
            touched={formik.touched.category}
            error={formik.errors.category}
            sm
          />
          <SelectInput
            name='location'
            data={states}
            label={t("addItem:locationLabel")}
            handleChange={formik.handleChange}
            value={formik.values.location}
            touched={formik.touched.location}
            error={formik.errors.location}
            sm
          />
          <div
            className={`${i18n.language == "ar" ? "gap-2" : ""} modal-action`}
          >
            <button
              type='submit'
              className='btn rounded-xl btn-sm btn-primary bg-opacity-30 normal-case tracking-wider btn-active'
            >
              {t("common:buttons:submit")}
            </button>
            <div method='dialog'>
              <button
                type='button'
                className='btn rounded-xl btn-outline btn-sm normal-case tracking-wider font-light'
                onClick={() =>
                  document.getElementById(`my_modal_${item.id}`).close()
                }
              >
                {t("common:buttons:cancel")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default EditItemForm;
