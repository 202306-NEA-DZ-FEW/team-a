import { useFormik } from "formik";
import * as Yup from "yup";

import { useAuth } from "@/context/AuthProvider";

import Input from "../Input";

function ResetForm({ t }) {
  const { resetPassword } = useAuth();
  const resetPassForm = useFormik({
    initialValues: {
      resetEmail: "",
    },
    validationSchema: Yup.object({
      resetEmail: Yup.string()
        .email(t("signIn:emailValid"))
        .required(t("signIn:emailRequired")),
    }),
    onSubmit: (values) => {
      resetPassword(values.resetEmail);
    },
  });
  return (
    <dialog id='my_modal_3' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>{t("signIn:EnterYourEmail")}</h3>
        <form onSubmit={resetPassForm.handleSubmit}>
          <Input
            name='resetEmail'
            type='email'
            placeholder={t("signIn:emailPlaceholder")}
            label={t("signIn:emailLabel")}
            handleChange={resetPassForm.handleChange}
            value={resetPassForm.values.resetEmail}
            handleBlur={resetPassForm.handleBlur}
            error={resetPassForm.errors.resetEmail}
            touched={resetPassForm.touched.resetEmail}
          />
          <button
            type='submit'
            className='btn btn-md btn-info w-full self-center my-8 rounded-full'
          >
            {t("signIn:sendMeResetLink")}
          </button>
        </form>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
}

export default ResetForm;
