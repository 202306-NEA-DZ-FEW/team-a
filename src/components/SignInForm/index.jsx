import { useFormik } from "formik";
import Link from "next/link";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import * as Yup from "yup";

import Checkbox from "../Checkbox";
import Input from "../Input";

function SignInForm({ t }) {
  /*   const router = useRouter(); */
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      save: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("signIn:emailValid"))
        .required(t("signIn:emailRequired")),
      password: Yup.string().required(t("signIn:passwordRequired")),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      // router.push({
      //   pathname: "/dashboard",
      //});
      console.log(values);
    },
  });

  return (
    <section className='flex flex-col w-full flex-1 px-4 gap-4'>
      <h1 className='text-3xl font-black text-center'>{t("signIn:signIn")}</h1>
      <form className='flex flex-col gap-2' onSubmit={formik.handleSubmit}>
        <Input
          name='email'
          type='email'
          placeholder={t("signIn:emailPlaceholder")}
          label={t("signIn:emailLabel")}
          handleChange={formik.handleChange}
          value={formik.values.email}
          handleBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
        />
        <Input
          name='password'
          type='password'
          placeholder={t("signIn:PasswordPlaceholder")}
          label={t("signIn:passwordLabel")}
          handleChange={formik.handleChange}
          value={formik.values.password}
          handleBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password}
        />
        <Checkbox
          name='save'
          label={t("signIn:savedlogin")}
          handleChange={formik.handleChange}
          value={formik.values.terms}
          handleBlur={formik.handleBlur}
          error={formik.errors.terms}
          touched={formik.touched.terms}
        />
        <button
          className='btn btn-primary w-full text-white'
          type='submit'
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? t("signIn:loading") : t("signIn:signIn")}
        </button>
      </form>
      <div className='text-start'>
        <p>
          {t("signIn:noAccount")}
          <Link className='link mx-2' href='/create'>
            {t("signIn:signUp")}
          </Link>
        </p>
        <p>
          <Link className='link' href='/password'>
            {t("signIn:passwordForgotten")}
          </Link>
        </p>
      </div>
      <div className=''>
        <p className='text-center font-black'>{t("signIn:signUpMethod")}</p>
        <div className='flex gap-3 text-3xl mt-2 text-primary justify-center items-center'>
          <Link href='https://www.facebook.com' target='_blank'>
            <AiFillFacebook className='opacity-70 hover:opacity-100' />
          </Link>
          <Link href='https://www.instagram.com' target='_blank'>
            <FaInstagram className='opacity-70 hover:opacity-100' />
          </Link>
          <Link href='https://www.linkedin.com' target='_blank'>
            <AiFillLinkedin className='opacity-70 hover:opacity-100' />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignInForm;
