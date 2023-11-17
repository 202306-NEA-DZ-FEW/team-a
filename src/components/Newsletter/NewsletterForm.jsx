import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import newsletterImage from "public/images/bubble.png";
import * as Yup from "yup";

import Input from "../Input";

function NewsletterForm({ onValidated }) {
  const { i18n, t } = useTranslation();
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
    <section className='h-96 bg-gradient-to-l from-[#02A85C40] via-slate-400 to-[#02A85C40] flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'>
      <div
        className='p-8 md:p-14 flex flex-col md:flex-row justify-center items-center gap-6 bg-opacity-20 backdrop-filter backdrop-blur-md bg-slate-300 border border-slate-500/10 rounded-lg shadow-2xl '
        dir={i18n?.language === "ar" ? "rtl" : "ltr"}
      >
        <div id='content' className=''>
          <h2 className='text-2xl md:text-3xl tracking-wider font-extrabold '>
            {t("newsletter:newsletterTitle")}
          </h2>
          <p className='my-4 max-w-xl font-light text-xl text-gray-800'>
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
              className='btn btn-info w-full md:w-fit self-center rounded-3xl'
              type='submit'
              disabled={formik.isSubmitting}
            >
              {t("newsletter:subscribe")}
            </button>
          </form>
        </div>
        <figure className='hidden lg:block md:h-[200px] md:w-[200px]'>
          <Image src={newsletterImage} alt='img' priority />
        </figure>
      </div>
    </section>
  );
}

export default NewsletterForm;
