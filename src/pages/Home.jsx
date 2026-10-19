import IntroSection from "../components/sections/IntroSection.jsx";
import StatsSection from "../components/sections/StatsSection.jsx";
import ServicesSection from "../components/sections/ServicesSection.jsx";
import StorySection from "../components/sections/StorySection.jsx";
import Button from "../components/ui/Button.jsx";
import Container from "../components/ui/Container.jsx";

export default function Home() {
  return (
    <>
      <IntroSection />
      <StatsSection />
      <ServicesSection limit={4} />
      <div className="pb-16 text-center md:pb-24 xl:pb-[120px]">
        <Container>
          <Button to="/services">Lihat semua layanan</Button>
        </Container>
      </div>
      <StorySection />
    </>
  );
}
