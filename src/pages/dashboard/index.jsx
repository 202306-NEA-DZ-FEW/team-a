import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import fetchUserInfo from "@/lib/fetchUserInfo";
import fetchUserItems from "@/lib/fetchUserItems";

import Container from "@/components/container";
import UserListItemsPlaceholder from "@/components/UserListItems/UserListItemsPlaceholder";
import UserProfilePlaceholder from "@/components/UserProfile/UserProfilePlaceholder";

import ProtectedLayout from "@/layout/ProtectedLayout";

const DynamicUserProfile = dynamic(() => import("@/components/UserProfile"), {
  loading: () => <UserProfilePlaceholder />,
});
const DynamicUserListItems = dynamic(
  () => import("@/components/UserListItems"),
  {
    loading: () => <UserListItemsPlaceholder />,
  }
);

function Dashboard({ userInfo, userItems }) {
  return (
    <ProtectedLayout>
      <Container className='flex flex-col justify-between gap-8 py-24 xl:my-0 xl:min-h-screen'>
        <DynamicUserProfile userData={userInfo} />
        <DynamicUserListItems userItems={userItems} userData={userInfo} />
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
            "categories",
            "addItem",
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
