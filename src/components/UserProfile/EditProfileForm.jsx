import { doc, updateDoc } from "firebase/firestore";
import { useFormik } from "formik";
import { useTranslation } from "next-i18next";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { db } from "@/lib/firebase";
import getAllStates from "@/lib/getAllStates";

import Input from "../Input";
import SelectInput from "../SelectInput";

function EditProfileForm({ userData, onUpdate }) {
  const { t, i18n } = useTranslation();
  const states = getAllStates(t);

  const formik = useFormik({
    initialValues: {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      location: userData.location,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, t("dashboard:userUpadteForm:nameLength"))
        .required(t("dashboard:userUpadteForm:nameRequired")),
      email: Yup.string()
        .email(t("dashboard:userUpadteForm:emailValid"))
        .required(t("dashboard:userUpadteForm:emailRequired")),
      phone: Yup.number().required(t("dashboard:userUpadteForm:phoneRequired")),
      location: Yup.string().required(
        t("dashboard:userUpadteForm:locationRequired")
      ),
    }),
    onSubmit: async (values) => {
      const userDocRef = doc(db, "users", userData.uid);
      try {
        await updateDoc(userDocRef, values);
        onUpdate({
          ...values,
          photoURL: userData.photoURL,
          uid: userData.uid,
          role: userData.role,
          date: userData.date,
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
        document.getElementById("my_modal_1").close();
      }
    },
  });

  return (
    <dialog id='my_modal_1' className='modal bg-black bg-opacity-40'>
      <div className='modal-box bg-base-100 transition-all duration-500 ease-in-out'>
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-3'>
          <h1 className='text-xl font-bold text-center'>
            {t("dashboard:userUpadteForm:updateProfile")}
          </h1>
          <Input
            name='name'
            type='text'
            placeholder={t("dashboard:userUpadteForm:namePlaceholder")}
            label={t("dashboard:userUpadteForm:nameLabel")}
            handleChange={formik.handleChange}
            value={formik.values.name}
            handleBlur={formik.handleBlur}
            error={formik.errors.name}
            touched={formik.touched.name}
            sm
          />
          <Input
            name='email'
            type='email'
            placeholder={t("dashboard:userUpadteForm:emailPlaceholder")}
            label={t("dashboard:userUpadteForm:emailLabel")}
            handleChange={formik.handleChange}
            value={formik.values.email}
            handleBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
            sm
          />
          <Input
            name='phone'
            type='text'
            placeholder={t("dashboard:userUpadteForm:phonePlaceholder")}
            label={t("dashboard:userUpadteForm:phoneLabel")}
            handleChange={formik.handleChange}
            value={formik.values.phone}
            handleBlur={formik.handleBlur}
            error={formik.errors.phone}
            touched={formik.touched.phone}
            sm
          />
          <SelectInput
            name='location'
            data={states}
            label={t("dashboard:userUpadteForm:locationLabel")}
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
              className='btn btn-sm rounded-xl btn-primary bg-opacity-40 normal-case tracking-wider btn-active'
            >
              {t("common:buttons:submit")}
            </button>
            <div method='dialog'>
              <button
                type='button'
                className='btn btn-outline btn-sm rounded-xl normal-case tracking-wider font-light'
                onClick={() => document.getElementById("my_modal_1").close()}
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

export default EditProfileForm;
