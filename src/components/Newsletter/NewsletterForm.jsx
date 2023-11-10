import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
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
        console.log("This user is now subscribed!", values);
        router.push("/");
        resetForm();
      } catch (error) {
        console.error("Error subscribing:", error);
      }
    },
  });
  return (
    <div className='bg-neutral py-10 px-6  w-full'>
      <h3>Subscribe to our newsletter</h3>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <Input
            name='email'
            type='email'
            placeholder='Enter your email'
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
          className='btn btn-primary self-center rounded-3xl text-white'
          type='submit'
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "loading" : "Subscribe"}
        </button>
      </form>
    </div>
  );
}

export default NewsletterForm;
