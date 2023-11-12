import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import bg from "public/images/bg.png";
import * as Yup from "yup";

import Input from "../Input";

function NewsletterForm({ onValidated }) {
  const { t } = useTranslation();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid email").required("email is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await onValidated({ EMAIL: values.email });
        router.push({ pathname: "/success", query: values }, { scroll: false });
        resetForm();
      } catch (error) {
        console.error("Error subscribing:", error);
      }
    },
  });
  return (
    <div
      className='bg-accent py-20 px-6 w-full'
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
      }}
    >
      <h2 className='text-3xl md:text-4xl tracking-wider font-extrabold text-white'>
        {t("newsletter:newsletterTitle")}
      </h2>
      <p className='my-4 max-w-2xl font-light text-xl text-gray-200'>
        {t("newsletter:newsletterDescription")}
        <br />
        {t("newsletter:newsletterJoin")}
      </p>
      <form
        onSubmit={formik.handleSubmit}
        className='flex flex-col md:flex-row gap-2'
      >
        <div>
          <Input
            name='email'
            type='email'
            placeholder={t("signIn:emailPlaceholder")}
            handleChange={formik.handleChange}
            value={formik.values.email}
            handleBlur={(e) => formik.dirty && formik.handleBlur(e)}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
          {/* this is a spacer */}
          <div className='label' />
        </div>
        <button
          className='btn btn-neutral w-full md:w-fit self-center rounded-3xl'
          type='submit'
          disabled={formik.isSubmitting}
        >
          {t("newsletter:subscribe")}
        </button>
      </form>
    </div>
  );
}

export default NewsletterForm;
