import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Spinner from "public/images/spinner.svg";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import * as Yup from "yup";

import Input from "../Input";
import SelectInput from "../SelectInput";
import TextArea from "../TextArea";
import { db, storage } from "../../lib/firebase";

const colRef = collection(db, "items");

getDocs(colRef)
  .then((snapshot) => {
    let items = [];
    snapshot.docs.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });
    console.log(items);
  })
  .catch((err) => {
    toast.error(err.code, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 1500,
    });
  });

function AddItem({ categories, states }) {
  const [imageUpload, setImageUpload] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "/items/${folder}");
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      title: "",
      category: categories[0].name,
      location: states[0].name,
      description: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required(t("addItem:titleRequired")),
      category: Yup.string().required(t("addItem:categoryRequired")),
      location: Yup.string().required(t("addItem:locationRequired")),
      description: Yup.string()
        .max(5, "description too long")
        .required(t("addItem:descriptionRequired")),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await uploadImages(values.title);
        const images = await getDownloadURL();
        const valuesWithImages = {
          ...values,
          images: images,
          date: serverTimestamp(),
        };
        await addDoc(colRef, valuesWithImages);
        console.log(valuesWithImages);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    },
  });
  const uploadImages = async (folder) => {
    if (imageUpload.length === 0) return;

    try {
      for (const image of imageUpload) {
        const imageRef = ref(storage, `items/${folder}/${image.name + v4()}`);
        await uploadBytes(imageRef, image);
      }
      alert("All images uploaded");
    } catch (error) {
      console.log(error.message);
    }
  };
  /* useEffect(() => {
    listAll(imageListRef).then((response) =>{
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) =>{
          setImageList((prev) =>[...prev, url] )
        })
      })
    })
  }, []) */

  return (
    <section className='md:max-w-lg mx-auto'>
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
        <div>
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
          />
          <div className='label'>
            <label htmlFor='file-upload' className='label-text'>
              {t("addItem:imageLabel")}
            </label>
          </div>
        </div>
        <input
          dir={i18n?.language == "ar" ? "ltr" : ""}
          name='image'
          type='file'
          label={t("addItem:imageLabel")}
          onChange={(e) => {
            setImageUpload(Array.from(e.target.files));
          }}
          className='file-input'
          id='file-upload'
          multiple
        />
        {/*  <button className='btn btn-primary' onClick={uploadImage}>hit it</button> */}
        <div className='flex flex-col md:flex-row gap-2 justify-center'>
          <button
            type='submit'
            className='btn btn-primary w-full md:w-1/3 md:self-center text-white mt-2'
          >
            {t("addItem:addItem")}
          </button>
          <Link
            href='/products'
            className='btn btn-primary w-full md:w-1/3 md:self-center text-white mt-2'
          >
            {t("addItem:cancel")}
          </Link>
        </div>
      </form>
      {/* <div>
      {imageList.map((url) => {
        return <Image key={} src={url} alt="img"/>
      })}
      </div> */}
    </section>
  );
}

export default AddItem;
