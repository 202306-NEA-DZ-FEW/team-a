import { useFormik } from "formik";
import Link from "next/link";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";

import { useAuth } from "@/context/AuthProvider";

import ResetForm from "./ResetForm";
import Checkbox from "../Checkbox";
import Input from "../Input";

function SignInForm({ t }) {
  const { signIn, signInWithFacebook, signInWithGoogle, signInWithGithub } =
    useAuth();
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
      resetPassword: Yup.string().email(t("signIn:emailValid")),
    }),
    onSubmit: (values) => {
      const email = values.email;
      const password = values.password;
      signIn(email, password);
    },
  });

  return (
    <section className='flex flex-col w-full px-14 lg:px-16'>
      <h1 className='text-3xl font-bold text-center md:mt-0 mt-10'>
        {t("signIn:signIn")}
      </h1>
      {/* Form Section */}
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
        {/* Checkbox & Password Forgotten Section */}
        <div className='flex flex-col md:flex-row justify-around gap-4 md:gap-8 items-center my-2'>
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
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className='btn btn-link btn-sm p-0 block capitalize md:mb-0 mb-4'
          >
            {t("signIn:passwordForgotten")}
          </button>
        </div>
        {/* Login Button */}
        <button
          className='btn btn-primary w-full self-center rounded-3xl text-white md:mb-0 mb-8'
          type='submit'
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? t("signIn:loading") : t("signIn:signInButton")}
        </button>
      </form>
      <span className='mt-4 mb-0 divider'>{t("signIn:divider")}</span>
      {/* Social Medias Section */}
      <div>
        <p className='text-center my-4'>{t("signIn:signUpMethod")}</p>
        <div className='flex gap-4 justify-center items-center md:mb-0 mb-10'>
          <button
            className='btn btn-circle btn-sm bg-white'
            onClick={signInWithFacebook}
          >
            <BsFacebook className='text-3xl text-blue-600' />
          </button>
          <button
            onClick={signInWithGoogle}
            className='btn btn-circle btn-sm bg-white'
          >
            <FcGoogle className='text-3xl' />
          </button>
          <button
            onClick={signInWithGithub}
            className='btn btn-circle btn-sm bg-white'
          >
            <BsGithub className='text-3xl text-gray-700' />
          </button>
        </div>
      </div>
      <div className='mt-4 flex flex-col md:flex-row justify-center items-center gap-2'>
        <p className='text-base'>{t("signIn:noAccount")}</p>
        <Link href='/auth/sign-up' className='btn btn-link'>
          {t("signIn:signUp")}
        </Link>
      </div>
      {/* Password Reset Modal */}
      <ResetForm t={t} />
    </section>
  );
}

export default SignInForm;
