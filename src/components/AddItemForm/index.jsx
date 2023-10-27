import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Spinner from "public/images/spinner.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";

import useUploadImages from "@/lib/useUploadImages";

import ListingTypeButton from "./ListingTypeButton";
import Input from "../Input";
import SelectInput from "../SelectInput";
import TextArea from "../TextArea";
import { db } from "../../lib/firebase";

function AddItem({ categories, states }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { uploadImages } = useUploadImages();
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const listingTypes = ["For Exchange", "Looking For", "Donation"];

  const handleSelect = (selectedType) => {
    formik.setFieldValue("listingType", selectedType);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      category: categories[0].name,
      location: states[0].name,
      description: "",
      listingType: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required(t("addItem:titleRequired")),
      category: Yup.string().required(t("addItem:categoryRequired")),
      location: Yup.string().required(t("addItem:locationRequired")),
      description: Yup.string()
        .max(150, "description too long")
        .required(t("addItem:descriptionRequired")),
      listingType: Yup.string().required(t("addItem:titleRequired")),
    }),
    onSubmit: async (values, { resetForm }) => {
      const id = uuidv4();
      const imageRef = `items/${id}/${values.title}`;
      if (images.length < 1) {
        alert("you need at least one image");
        return;
      } else {
        setLoading(true);
        try {
          const colRef = collection(db, "items");
          const imagesUrl = await uploadImages(imageRef, images);
          const valuesWithImages = {
            ...values,
            id,
            images: imagesUrl,
            createdAt: serverTimestamp(),
          };
          await setDoc(doc(colRef, id), valuesWithImages);
          toast.success("Item created ✅", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
          router.push(`/products/${id}`);
        } catch (err) {
          alert(err.message);
        } finally {
          setLoading(false);
          resetForm();
          setImages([]);
        }
      }
    },
  });
  return (
    <section className='relative md:max-w-lg mx-auto'>
      <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
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
        <TextArea
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
          maxLength={150}
        />
        <div className='label'>
          <label htmlFor='file-upload' className='label-text'>
            {t("addItem:imageLabel")}
          </label>
        </div>
        <input
          dir={i18n?.language == "ar" ? "ltr" : ""}
          name='image'
          type='file'
          label={t("addItem:imageLabel")}
          onChange={(e) => {
            setImages(Array.from(e.target.files));
          }}
          className='file-input'
          id='file-upload'
          multiple
        />
        <div className='form-control'>
          <label className='label'>
            <labe className='label-text'>
              <span className='text-error'>*</span> What this item for?
            </labe>
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
          </label>
          <div className='flex flex-col md:flex-row gap-2 md:justify-between md:items-center'>
            {listingTypes.map((type) => (
              <ListingTypeButton
                key={type}
                text={type}
                selected={formik.values.listingType}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-2 justify-center mt-2'>
          <button
            type='submit'
            className='btn btn-primary flex-1 md:self-center text-white'
          >
            {t("addItem:addItem")}
          </button>
          <Link href='/products' className='btn flex-1 md:self-center'>
            {t("addItem:cancel")}
          </Link>
        </div>
      </form>
    </section>
  );
}

export default AddItem;
