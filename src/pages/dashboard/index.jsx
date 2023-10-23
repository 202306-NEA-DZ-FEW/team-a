import { doc, getDoc } from "firebase/firestore";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { db } from "@/lib/firebase";

import Container from "@/components/container";
import UserListItems from "@/components/UserListItems";
import UserProfile from "@/components/UserProfile";

import ProtectedLayout from "@/layout/ProtectedLayout";

function Dashboard({ userData }) {
  return (
    <ProtectedLayout>
      <Container className='flex flex-col justify-center gap-8 my-8 md:my-20 xl:my-0 xl:min-h-screen'>
        <UserProfile userData={userData} />
        <UserListItems />
      </Container>
    </ProtectedLayout>
  );
}

export default withTranslation("dashboard")(Dashboard);

export async function getServerSideProps({ locale, query }) {
  const { user } = query;
  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const userRef = doc(db, "users", user);
  try {
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const userData = JSON.parse(JSON.stringify(userDoc.data()));
      return {
        props: {
          ...(await serverSideTranslations(locale, [
            "common",
            "dashboard",
            "states",
          ])),
          userData,
        },
      };
    } else {
      return {
        redirect: {
          destination: "/signin",
          permanent: false,
        },
      };
    }
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
