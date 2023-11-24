import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Spinner from "public/images/spinner.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";

import useUploadImages from "@/lib/useUploadImages";

import { useAuth } from "@/context/AuthProvider";
import ProtectedLayout from "@/layout/ProtectedLayout";

import ListingTypeButton from "./ListingTypeButton";
import Input from "../Input";
import SelectInput from "../SelectInput";
import TextAreaInput from "../TextAreaInput";
import { db } from "../../lib/firebase";

function AddItemForm({ t, initialLocale, categories, states }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { uploadImages } = useUploadImages();
  const { user } = useAuth();
  const router = useRouter();
  const listingTypes = ["exchangeButton", "requestButton", "donationButton"];
  /*  t("addItem:exchangeButton"),
    t("addItem:requestButton"),
    t("addItem:donationButton"), */
  const handleSelect = (selectedType) => {
    formik.setFieldValue("listingType", selectedType);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      location: "",
      description: "",
      listingType: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required(t("addItem:titleRequired")),
      category: Yup.string().required(t("addItem:categoryRequired")),
      location: Yup.string().required(t("addItem:locationRequired")),
      description: Yup.string()
        .max(250, "description too long")
        .required(t("addItem:descriptionRequired")),
      listingType: Yup.string().required(t("addItem:listingTypeRequired")),
    }),
    onSubmit: async (values, { resetForm }) => {
      const id = uuidv4();
      const imageRef = `items/${id}/${values.title}`;
      if (images.length < 1) {
        toast.error("Min is 1 ❌", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        return;
      }
      if (images.length > 4) {
        toast.error("Max is 4❌", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        return;
      }
      try {
        setLoading(true);
        const colRef = collection(db, "items");
        const imagesUrl = await uploadImages(imageRef, images);
        const valuesWithImages = {
          ...values,
          title: values.title.toLowerCase(),
          id,
          uid: user.uid,
          images: imagesUrl,
          createdAt: serverTimestamp(),
        };
        await setDoc(doc(colRef, id), valuesWithImages);
        toast.success("Item created ✅", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        router.push("/items");
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
        resetForm();
        setImages([]);
      }
    },
  });
  return (
    <ProtectedLayout>
      <section className='relative md:max-w-lg mx-auto'>
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-1'>
          <h1 className='text-3xl font-black text-center'>
            {t("addItem:addItem")}
          </h1>
          {loading && (
            <div className='absolute w-full h-full flex items-center justify-center'>
              <Image
                src={Spinner}
                alt='loading'
                height={100}
                width={100}
                className='w-20 h-20'
                priority
              />
            </div>
          )}
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
          />
          <SelectInput
            name='category'
            data={categories}
            label={t("addItem:categoryLabel")}
            handleChange={formik.handleChange}
            value={formik.values.category}
            touched={formik.touched.category}
            error={formik.errors.category}
          />
          <SelectInput
            name='location'
            data={states}
            label={t("addItem:locationLabel")}
            handleChange={formik.handleChange}
            value={formik.values.location}
            touched={formik.touched.location}
            error={formik.errors.location}
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
          <div className='label'>
            <span htmlFor='file-upload' className='label-text'>
              <span className='text-error'>*</span> {t("addItem:imageLabel")}
            </span>
          </div>
          <input
            dir={initialLocale == "ar" ? "ltr" : ""}
            name='image'
            type='file'
            label={t("addItem:imageLabel")}
            onChange={(e) => {
              setImages(Array.from(e.target.files));
            }}
            className='file-input bg-base-200'
            id='file-upload'
            multiple
          />
          <div className='form-control my-2'>
            <div className='label'>
              <span className='label-text'>
                <span className='text-error'>*</span> {t("addItem:listingType")}
              </span>
              <span
                className={`label-text-alt ${
                  formik.touched.listingType && formik.errors.listingType
                    ? "text-error"
                    : ""
                }`}
              >
                {formik.touched.listingType && formik.errors.listingType
                  ? formik.errors.listingType
                  : ""}
              </span>
            </div>
            <div className='flex flex-col md:flex-row gap-2 md:justify-between md:items-center my-2'>
              {listingTypes.map((listingKey, i) => (
                <ListingTypeButton
                  key={i}
                  text={t(`addItem:${listingKey}`)}
                  value={listingKey}
                  selected={formik.values.listingType}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-2 justify-center my-4'>
            <button
              type='submit'
              className='btn btn-md rounded-xl btn-secondary bg-opacity-50 text-black flex-1 md:self-center'
            >
              {t("addItem:addItem")}
            </button>
            <Link
              href='/items'
              className='btn btn-md rounded-xl btn-ghost border-gray-200 flex-1 md:self-center'
            >
              {t("common:buttons:cancel")}
            </Link>
          </div>
        </form>
      </section>
    </ProtectedLayout>
  );
}

export default AddItemForm;
