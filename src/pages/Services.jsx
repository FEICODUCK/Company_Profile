import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ServicesSection from "../components/sections/ServicesSection.jsx";
import ProcessSection from "../components/sections/ProcessSection.jsx";
import FaqSection from "../components/sections/FaqSection.jsx";

export default function Services() {
  return (
    <>
      <Breadcrumb title="Our Services" />
      <ServicesSection />
      <ProcessSection />
      <FaqSection space="bottom" />
    </>
  );
}
