import { useTranslation } from "next-i18next";

import Input from "../Input";

function NewsletterForm() {
  const { t } = useTranslation();

  return (
    <div className='bg-neutral py-10 px-6  w-full'>
      <h3>Subscribe to our newsletter</h3>
      <form>
        <div>
          <Input name='email' type='email' placeholder='Enter your email' />
          {/* this is a spacer */}
          <div className='label' />
        </div>

        <button
          className='btn btn-primary self-center rounded-3xl text-white'
          type='submit'
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsletterForm;
