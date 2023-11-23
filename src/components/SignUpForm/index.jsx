import { useFormik } from "formik";
import * as Yup from "yup";

import { useAuth } from "@/context/AuthProvider";

import Input from "../Input";
import SelectInput from "../SelectInput";
import SignupMethods from "../SignupMethods";

function SignUpForm({ states, t }) {
  const { signUp } = useAuth();
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      location: "",
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
      const email = values.email;
      const password = values.password;
      const userInfo = { ...values };
      delete userInfo.password;
      delete userInfo.confirmPassword;
      await signUp(email, password, userInfo);
    },
  });

  return (
    <section className='flex gap-2 flex-col w-full mx-auto'>
      <h1 className='text-3xl font-bold'>{t("signUp:signUp")}</h1>
      <form onSubmit={formik.handleSubmit} className='flex gap-2 flex-col'>
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
          className='btn my-6 btn-secondary text-black bg-opacity-40 w-full normal-case text-xl font-normal self-center rounded-xl'
        >
          {t("signUp:signUpButton")}
        </button>
      </form>
      <div className='lg:hidden'>
        <span className='divider'>{t("signUp:divider")}</span>
        <p className='text-center my-4'>{t("signUp:signUpMethod")}</p>
        <SignupMethods />
      </div>
    </section>
  );
}

export default SignUpForm;
