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
    <section className='flex flex-col gap-2 w-full mx-auto'>
      <h1 className='text-3xl font-bold mb-8'>{t("signIn:signIn")}</h1>
      {/* Form Section */}
      <form className='flex flex-col gap-2 ' onSubmit={formik.handleSubmit}>
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
        <div className='flex my-2 flex-col md:flex-row justify-between md:items-center flex-wrap'>
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
            className='btn btn-link link-error font-normal hover:font-bold self-start btn-sm normal-case'
          >
            {t("signIn:passwordForgotten")}
          </button>
        </div>
        {/* Login Button */}
        <button
          className='btn btn-secondary my-4 text-black bg-opacity-40 w-full normal-case text-xl font-normal self-center rounded-xl'
          type='submit'
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? t("signIn:loading") : t("signIn:signInButton")}
        </button>
      </form>
      <span className='divider'>{t("signIn:divider")}</span>
      {/* Social Medias Section */}

      <p className='text-center my-4'>{t("signIn:signUpMethod")}</p>
      <div className='flex gap-2 justify-center items-center mb-4'>
        <button
          className='btn btn-ghost rounded-xl hover:drop-shadow-xl transition-all duration-400 ease-in-out'
          onClick={signInWithFacebook}
        >
          <BsFacebook className='text-3xl text-blue-600' />
        </button>
        <button
          onClick={signInWithGoogle}
          className='btn btn-ghost rounded-xl hover:drop-shadow-xl transition-all duration-400 ease-in-out'
        >
          <FcGoogle className='text-3xl' />
        </button>
        <button
          onClick={signInWithGithub}
          className='btn btn-ghost rounded-xl hover:drop-shadow-xl transition-all duration-400 ease-in-out'
        >
          <BsGithub className='text-3xl' />
        </button>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center'>
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
