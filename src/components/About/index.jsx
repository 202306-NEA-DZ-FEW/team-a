import PageCover from "../PageCover";
function AboutPageCover({ t }) {
  return (
    <PageCover
      title={t("about:title")}
      description={t("about:description")}
      imageURL='https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    />
  );
}

export default AboutPageCover;
