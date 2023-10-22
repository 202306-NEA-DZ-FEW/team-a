import Image from "next/image";
import { useTranslation } from "next-i18next";
import mepi from "public/images/mepi1.png";
import { BsFillPencilFill } from "react-icons/bs";

function UserProfile() {
  const { i18n, t } = useTranslation();
  return (
    <div className='flex flex-col md:flex-row gap-4 justify-center items-start'>
      <section className='flex flex-row gap-2 items-center justify-center w-full md:w-1/4 md:flex-col'>
        <Image
          className='object-cover md:w-32 w-28 rounded-full '
          height={150}
          width={150}
          src={mepi}
          alt='mepi'
        />
        <div className='md:text-center text:start w-full'>
          <h3 className='font-bold text-xl'>Sorour</h3>
          <p className='text-md text-gray-600'>Location</p>
        </div>
      </section>
      {/* user info............................... */}
      <section
        className='flex md:justify-between md:items-center md:flex-row mt-6 gap-2 bg-gray-200 md:gap-6 w-full rounded-xl'
        dir={i18n?.language == "ar" ? "rtl" : "ltr"}
      >
        <div className='flex flex-col md:flex-row gap-2 p-6 md:gap-6 flex-1'>
          <div className='flex flex-col gap-2'>
            <p>
              <span className='font-bold'>
                {t("dashboard:userinfo:Name")}:{" "}
              </span>
              <span>Sorour</span>
            </p>
            <p>
              <span className='font-bold'>
                {t("dashboard:userinfo:Location")}:{" "}
              </span>
              <span>algeria batna</span>
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <p>
              <span className='font-bold'>
                {t("dashboard:userinfo:Email")}:{" "}
              </span>
              <span>sorourrh@gmail.com</span>
            </p>
            <p>
              <span className='font-bold'>
                {t("dashboard:userinfo:Phonenumber")}:{" "}
              </span>
              <span>0699999646</span>
            </p>
          </div>
          <p className='self-start'>
            <span className='font-bold'>
              {t("dashboard:userinfo:language")}:{" "}
            </span>
            <span>en</span>
          </p>
        </div>
        <div
          className={`self-start md:self-stretch md:bg-gray-300 ${
            i18n?.language == "ar"
              ? "md:rounded-tl-xl md:rounded-bl-xl"
              : "md:rounded-tr-xl md:rounded-br-xl"
          }`}
        >
          <button className='btn btn-ghost h-full'>
            <BsFillPencilFill />
          </button>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
