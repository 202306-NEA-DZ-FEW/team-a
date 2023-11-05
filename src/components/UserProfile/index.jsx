import Image from "next/image";
import { useTranslation } from "next-i18next";
import profile from "public/images/profile.svg";
import { useState } from "react";
import { BsFillPencilFill, BsImageFill } from "react-icons/bs";

import useImageUpload from "@/lib/useImageUpload";

import ImageSpinner from "./ImageSpinner";
import UserProfileEditForm from "./UserProfileEditForm";

function UserProfile({ userData }) {
  const [profileData, setProfileData] = useState(userData);
  const { i18n, t } = useTranslation();
  const loaction =
    userData.location === "1- Adrar"
      ? t("states:adrar")
      : t(`states:${profileData.location}`);
  const [selectedImage, setSelectedImage] = useState(null);
  const { loading, updateImage } = useImageUpload();

  const handleImageChange = async (e) => {
    const imageFile = e.target.files[0];
    const downloadURL = await updateImage(profileData, imageFile);
    setSelectedImage(downloadURL);
  };

  const handleUpdateProfile = (newUserData) => {
    setProfileData(newUserData);
  };

  return (
    <div className='flex flex-col md:flex-row gap-4 justify-center items-start'>
      <section className='flex flex-row gap-2 items-center justify-center w-full md:w-1/4 md:flex-col'>
        <figure className='relative group'>
          {loading && (
            <ImageSpinner classes='absolute bg-white rounded-full h-full md:w-32 w-28 top-0 bg-opacity-30 flex items-center justify-center ' />
          )}
          <Image
            className='object-cover md:w-32 md:h-32 w-28 h-82 rounded-full'
            height={150}
            width={150}
            src={selectedImage || profileData.photoURL || profile}
            alt='User Profile'
          />
          <div
            type='file'
            className='absolute hidden text-center bg-white rounded-full h-full md:w-32 w-28 top-0 group-hover:flex cursor-pointer bg-opacity-40 items-center justify-center'
          >
            <input
              type='file'
              id='fileInput'
              onChange={handleImageChange}
              accept='image/*'
              className='absolute hidden text-xs'
            />
            <label htmlFor='fileInput' className='text-4xl cursor-pointer'>
              <BsImageFill />
            </label>
          </div>
        </figure>
        <div className='md:text-center text:start w-full'>
          <h3 className='font-bold text-xl'>{profileData.name}</h3>
          <p className='text-md text-gray-600'>{loaction}</p>
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
                {t("dashboard:userinfo:name")}:{" "}
              </span>
              <span>{profileData.name}</span>
            </p>
            <p>
              <span className='font-bold'>
                {t("dashboard:userinfo:location")}:{" "}
              </span>
              <span>{loaction}</span>
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
            <span>{i18n.language}</span>
          </p>
        </div>
        <div
          className={`self-start md:self-stretch md:bg-gray-300 ${
            i18n?.language == "ar"
              ? "md:rounded-tl-xl md:rounded-bl-xl"
              : "md:rounded-tr-xl md:rounded-br-xl"
          }`}
        >
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className='btn btn-ghost h-full'
          >
            <BsFillPencilFill />
          </button>
          <UserProfileEditForm
            userData={profileData}
            onUpdate={handleUpdateProfile}
          />
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
