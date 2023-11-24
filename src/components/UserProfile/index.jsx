import Image from "next/image";
import { useTranslation } from "next-i18next";
import profile from "public/images/profile.svg";
import { useState } from "react";
import { BsFillPencilFill, BsImageFill } from "react-icons/bs";
import { MdOutlineShareLocation } from "react-icons/md";

import { getLocationName } from "@/lib/helpers";
import useImageUpload from "@/lib/useImageUpload";

import { useAuth } from "@/context/AuthProvider";

import EditProfileForm from "./EditProfileForm";
import ImageSpinner from "./ImageSpinner";

function UserProfile({ userData }) {
  const [profileData, setProfileData] = useState(userData);
  const { setUser } = useAuth();
  const { i18n, t } = useTranslation();
  const loaction = t(`states:${profileData.location}`);
  const locationName = getLocationName(loaction);
  const [selectedImage, setSelectedImage] = useState(null);
  const { loading, updateImage } = useImageUpload();

  const handleImageChange = async (e) => {
    const imageFile = e.target.files[0];
    const downloadURL = await updateImage(profileData, imageFile);
    setSelectedImage(downloadURL);
    setUser({ ...userData, photoURL: downloadURL });
  };

  const handleUpdateProfile = (newUserData) => {
    setProfileData(newUserData);
  };

  return (
    <div className='flex flex-col md:flex-row gap-8 justify-center md:items-start items-center'>
      <section className='flex rounded-2xl drop-shadow-md flex-row gap-4 md:gap-1 items-center justify-center w-full md:w-fit md:flex-col'>
        <div className='avatar m-[6px]'>
          <div className='w-20 rounded-full relative ring ring-primary ring-offset-base-100 ring-offset-2 group'>
            {loading && (
              <ImageSpinner classes='absolute w-full h-full p-5 rounded-full bg-base-200 bg-opacity-30' />
            )}
            <Image
              className='object-cover w-full h-full'
              height={150}
              width={150}
              priority
              src={selectedImage || profileData.photoURL || profile}
              alt='User Profile'
            />
            <div
              type='file'
              className='absolute hidden w-full h-full bg-base-200 rounded-full top-0 left-0 group-hover:flex cursor-pointer bg-opacity-50 '
            >
              <input
                type='file'
                id='fileInput'
                onChange={handleImageChange}
                accept='image/*'
                className='absolute hidden text-xs'
              />
              <label
                htmlFor='fileInput'
                className='text-4xl w-full h-full flex items-center justify-center cursor-pointer'
              >
                <BsImageFill size={24} />
              </label>
            </div>
          </div>
        </div>
        <div className='md:text-center text:start w-full'>
          <h3 className='font-bold text-xl'>{profileData.name}</h3>
          <p
            className='text-md flex items-center md:justify-center gap-1 text-gray-600'
            dir={i18n?.language == "ar" ? "rtl" : "ltr"}
          >
            <span>
              <MdOutlineShareLocation />
            </span>
            {locationName}
          </p>
        </div>
      </section>
      {/* user info............................... */}
      <section
        className='flex md:justify-between md:items-center tracking-wider md:flex-row gap-2 bg-base-100 drop-shadow-md md:gap-6 w-full rounded-2xl'
        dir={i18n?.language == "ar" ? "rtl" : "ltr"}
      >
        <div className='flex flex-col md:flex-row gap-2 p-6 md:gap-6 flex-1'>
          <div className='flex flex-col gap-2'>
            <p>
              <span className='font-bold'>
                {t("dashboard:userinfo:name")}:{" "}
              </span>
              <span>{profileData.name}</span>
            </p>
            <p>
              <span className='font-bold'>
                {t("dashboard:userinfo:location")}:{" "}
              </span>
              <span>{locationName}</span>
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <p>
              <span className='font-bold'>
                {t("dashboard:userinfo:email")}:{" "}
              </span>
              <span>{profileData.email}</span>
            </p>
            <p>
              <span className='font-bold'>
                {t("dashboard:userinfo:phoneNumber")}:{" "}
              </span>
              <span>{profileData.phone ? profileData.phone : "-"}</span>
            </p>
          </div>
          <p className='self-start'>
            <span className='font-bold'>
              {t("dashboard:userinfo:language")}:{" "}
            </span>
            <span>{t(`dashboard:userinfo:currentLanguage`)}</span>
          </p>
        </div>
        <div
          className={`self-start md:self-stretch md:bg-base-200 ${
            i18n?.language == "ar"
              ? "md:rounded-tl-2xl md:rounded-bl-2xl"
              : "md:rounded-tr-2xl md:rounded-br-2xl"
          }`}
        >
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className={`btn transition-all duration-500 ease-in-out group bg-base-200 btn-ghost hover:bg-opacity-10 rounded-2xl h-full
            ${
              i18n?.language == "ar"
                ? "md:rounded-tr-none md:rounded-br-none"
                : "md:rounded-tl-none md:rounded-bl-none"
            }
            `}
          >
            <BsFillPencilFill className='text-xl md:mx-2 transition-all duration-500 ease-in-out' />
          </button>
          <EditProfileForm
            userData={profileData}
            onUpdate={handleUpdateProfile}
          />
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
