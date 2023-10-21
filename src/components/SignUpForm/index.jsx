import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import * as Yup from "yup";

import Input from "../Input";
import SelectInput from "../SelectInput";

function SignUpForm({ states, t }) {
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      location: states[0].name,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, t("signUp:nameLength"))
        .required(t("signUp:nameRequired")),
      email: Yup.string()
        .email(t("signUp:emailValid"))
        .required(t("signUp:emailRequired")),
      password: Yup.string()
        .min(8, t("signUp:passwordLength"))
        .matches(passwordRules, t("signUp:passwordStrength"))
        .required(t("signUp:passwordRequired")),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], t("signUp:confirmPasswordMatch"))
        .required(t("signUp:confirmPasswordRequired")),
      phone: Yup.number().required(t("signUp:phoneRequired")),
      location: Yup.string().required(t("signUp:locationRequired")),
    }),
    onSubmit: async (values) => {
      /*   console.log(values) */

      // Handle form submission here
      router.push({
        pathname: "/dashboard",
      });
    },
  });

  return (
    <section className='md:max-w-lg mx-auto'>
      <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
        <h1 className='text-3xl font-black text-center'>
          {t("signUp:signUp")}
        </h1>
        <Input
          name='name'
          type='text'
          placeholder={t("signUp:namePlaceholder")}
          label={t("signUp:nameLabel")}
          handleChange={formik.handleChange}
          value={formik.values.name}
          handleBlur={formik.handleBlur}
          error={formik.errors.name}
          touched={formik.touched.name}
        />
        <Input
          name='email'
          type='email'
          placeholder={t("signUp:emailPlaceholder")}
          label={t("signUp:emailLabel")}
          handleChange={formik.handleChange}
          value={formik.values.email}
          handleBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
        />
        <Input
          name='password'
          type='password'
          placeholder={t("signUp:PasswordPlaceholder")}
          label={t("signUp:passwordLabel")}
          handleChange={formik.handleChange}
          value={formik.values.password}
          handleBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password}
        />
        <Input
          name='confirmPassword'
          type='password'
          placeholder={t("signUp:confirmPasswordPlaceholder")}
          label={t("signUp:confirmPasswordLabel")}
          handleChange={formik.handleChange}
          value={formik.values.confirmPassword}
          handleBlur={formik.handleBlur}
          error={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
          autoComplete='off'
        />
        <Input
          name='phone'
          type='text'
          placeholder={t("signUp:phonePlaceholder")}
          label={t("signUp:phoneLabel")}
          handleChange={formik.handleChange}
          value={formik.values.phone}
          handleBlur={formik.handleBlur}
          error={formik.errors.phone}
          touched={formik.touched.phone}
        />
        <SelectInput
          name='location'
          data={states}
          label={t("signUp:locationLabel")}
          handleChange={formik.handleChange}
          value={formik.values.location}
          touched={formik.touched.location}
          error={formik.errors.location}
        />
        <button
          type='submit'
          className='btn btn-primary w-full md:w-1/2 md:self-center text-white mt-2'
        >
          {t("signUp:signUp")}
        </button>
        <p className='text-center'>{t("signUp:signUpMethod")}</p>
        <div className='flex gap-3 justify-center items-center text-3xl text-primary'>
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
      </form>
    </section>
  );
}

export default SignUpForm;
