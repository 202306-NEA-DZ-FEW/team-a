import Image from "next/image";
import { useTranslation } from "next-i18next";
import mepi from "public/images/mepi1.png";
import { BsFillPencilFill } from "react-icons/bs";
function UserProfile() {
  const { i18n, t } = useTranslation();
  return (
    <div className='flex flex-col md:flex-row gap-4 justify-center items-start'>
      <section className='flex  flex-row gap-2 items-center justify-center md:flex-col'>
        <Image
          className='object-cover md:w-32 w-28 rounded-full '
          height={150}
          width={150}
          src={mepi}
          alt='mepi'
        />
        <div className=' text-center'>
          <h3 className='font-bold text-lg'>Sorour</h3>
          <p className='text-sm text-gray-600'>Location</p>
        </div>
      </section>
      {/* user info............................... */}
      <section
        className='flex md:justify-between md:items-center md:flex-row mt-6 gap-2 bg-gray-200 md:gap-6 w-full rounded-xl'
        dir={i18n?.language == "ar" ? "rtl" : "ltr"}
      >
        <div className='flex flex-col md:flex-row gap-2 p-6 md:gap-6 '>
          <div className='flex flex-col gap-2'>
            <p>
              <span>{t("dashboard:userinfo:Name")}: </span>
              <span className='font-bold'>Sorour</span>
            </p>
            <p>
              <span>{t("dashboard:userinfo:Location")}: </span>
              <span className='font-bold'>algeria batna</span>
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <p>
              <span>{t("dashboard:userinfo:Email")}: </span>
              <span className='font-bold'>sorourrh@gmail.com</span>
            </p>
            <p>
              <span>{t("dashboard:userinfo:Phonenumber")}: </span>
              <span className='font-bold'>0699999646</span>
            </p>
          </div>
          <p className='self-start'>
            <span>{t("dashboard:userinfo:language")}: </span>
            <span className='font-bold'>en</span>
          </p>
        </div>
        <button className='btn btn-ghost'>
          <BsFillPencilFill />
        </button>
      </section>
    </div>
  );
}

export default UserProfile;
