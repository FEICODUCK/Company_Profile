import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import StatsSection from "../components/sections/StatsSection.jsx";
import StorySection from "../components/sections/StorySection.jsx";
import TeamSection from "../components/sections/TeamSection.jsx";

export default function About() {
  return (
    <>
      <Breadcrumb title="About Us" />
      <StatsSection />
      <StorySection />
      <TeamSection />
    </>
  );
}
