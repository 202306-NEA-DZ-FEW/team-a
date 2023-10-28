import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import teamMembers from "@/lib/teamMembers";

import AboutPageCover from "@/components/About";
import Container from "@/components/container";
import MemberCard from "@/components/MemberCard";

function AboutPage({ t, _nextI18Next }) {
  const { initialLocale } = _nextI18Next;
  const team = teamMembers(t);
  return (
    <>
      <AboutPageCover t={t} />
      <Container className='my-20'>
        <h1 className='text-3xl font-black text-center my-10'>
          {t("about:teamLabel")}
        </h1>
        <section
          dir={initialLocale === "ar" ? "rtl" : "ltr"}
          className='flex flex-wrap gap-4 items-center justify-center w-full'
        >
          {team.map((member) => (
            <MemberCard
              key={member.name}
              name={member.name}
              github={member.github}
              linkedin={member.linkedin}
              imageUrl={member.imageUrl}
            />
          ))}
        </section>
      </Container>
    </>
  );
}

export default withTranslation(["common", "about"])(AboutPage);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
  };
}
