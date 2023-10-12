import Container from "@/components/container";
import HeroIllustration from "./HeroIllustration";
import HeroText from "./HeroText";

function HeroSection({ t }) {
  return (
    <Container>
      <HeroText text={t("landingPage:heroSectionText")} />
      <HeroIllustration />
    </Container>
  );
}

export default HeroSection;
