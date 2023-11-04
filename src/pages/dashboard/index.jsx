import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import fetchUserInfo from "@/lib/fetchUserInfo";
import fetchUserItems from "@/lib/fetchUserItems";

import Container from "@/components/Container";
import UserListItems from "@/components/UserListItems";
import UserProfile from "@/components/UserProfile";

import ProtectedLayout from "@/layout/ProtectedLayout";

function Dashboard({ userInfo, userItems }) {
  return (
    <ProtectedLayout>
      <Container className='flex flex-col justify-center gap-8 my-8 md:my-20 xl:my-0 xl:min-h-screen'>
        <UserProfile userData={userInfo} />
        <UserListItems userItems={userItems} userData={userInfo} />
      </Container>
    </ProtectedLayout>
  );
}

export default Dashboard;

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
  try {
    const userItems = await fetchUserItems(user);
    const userInfo = await fetchUserInfo(user);

    if (userInfo) {
      return {
        props: {
          ...(await serverSideTranslations(locale, [
            "common",
            "dashboard",
            "states",
          ])),
          userInfo,
          userItems,
        },
      };
    } else {
      return {
        redirect: {
          destination: "/",
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
