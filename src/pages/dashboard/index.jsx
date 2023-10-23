import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Container from "@/components/container";
import UserListItems from "@/components/UserListItems";
import UserProfile from "@/components/UserProfile";

import ProtectedLayout from "@/layout/ProtectedLayout";

function Dashboard() {
  return (
    <ProtectedLayout>
      <Container className='flex flex-col justify-center gap-8 my-8 md:my-20 xl:my-0 xl:min-h-screen'>
        <UserProfile />
        <UserListItems />
      </Container>
    </ProtectedLayout>
  );
}

export default withTranslation("dashboard")(Dashboard);

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "dashboard"])),
      // Will be passed to the page component as props
    },
  };
}
