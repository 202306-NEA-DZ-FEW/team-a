import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import login from "public/images/team_1.svg";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import * as Yup from "yup";

import Checkbox from "../Checkbox";
import Input from "../Input";

function SignInForm() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      save: false,
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
      save: Yup.boolean().oneOf([true]),
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
    <section>
      <div className='flex flex-col justify- text-start p-4 w-full md:w-1/3'>
        <h1 className='text-3xl pb-2 font-bold  text-center'>Log In</h1>
        <form className='' onSubmit={formik.handleSubmit}>
          <div className=' flex flex-col text-gray-700'>
            <Input
              className='border-primary ring-primary rounded-xl p-2'
              type='email'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder='Enter email'
              label='Email'
            />
            <Input
              className='border-primary ring-primary rounded-xl p-2'
              type='password'
              name='password'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder='Enter password'
              label='Password'
            />
            <Checkbox
              name='save'
              label='keep me logged in'
              handleChange={formik.handleChange}
              value={formik.values.terms}
              handleBlur={formik.handleBlur}
              error={formik.errors.terms}
              touched={formik.touched.terms}
            />
            <button
              className='btn btn-primary'
              type='submit'
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Loading" : "Log in"}
            </button>
          </div>
        </form>
        <div className='flex flex-col text-start'>
          <p>
            Don&apos;t have an account? <Link href='/create'>Sign up</Link>
          </p>
          <p>
            <Link href='/password'>Forgot password?</Link>
          </p>
        </div>
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
          <Link href='https://www.google.com' target='_blank'>
            <BsShareFill className='opacity-70 hover:opacity-100' />
          </Link>
        </div>
      </div>
      <div className='w-2/3'>
        <figure className='hidden md:flex'>
          <Image src={login} alt='login' height={500} />
        </figure>
      </div>
    </section>
  );
}

export default SignInForm;
