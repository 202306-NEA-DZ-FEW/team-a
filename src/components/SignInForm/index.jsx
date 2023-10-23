import { useFormik } from "formik";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
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
        {t("signIn:noAccount")}
        <Link className='btn btn-link' href='/auth/sign-up'>
          {t("signIn:signUp")}
        </Link>
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className='btn btn-link btn-sm p-0 block'
        >
          {t("signIn:passwordForgotten")}
        </button>
        {/* reset password modal */}
        <ResetForm t={t} />
      </div>
      <div className=''>
        <p className='text-center font-black'>{t("signIn:signUpMethod")}</p>
        <div className='flex gap-3 justify-center items-center text-3xl text-primary'>
          <button
            className='btn btn-square btn-sm'
            onClick={signInWithFacebook}
          >
            <AiFillFacebook className='text-3xl text-blue-600' />
          </button>
          <button onClick={signInWithGoogle} className='btn btn-square btn-sm'>
            <FcGoogle className='text-3xl text-primary' />
          </button>
          <button onClick={signInWithGithub} className='btn btn-square btn-sm'>
            <FaGithubSquare className='text-3xl text-gray-700' />
          </button>
        </div>
      </div>
    </section>
  );
}

export default SignInForm;
