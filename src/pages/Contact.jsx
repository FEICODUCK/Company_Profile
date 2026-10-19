import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ContactFormSection from "../components/sections/ContactFormSection.jsx";
import ContactInfoSection from "../components/sections/ContactInfoSection.jsx";
import FaqSection from "../components/sections/FaqSection.jsx";

export default function Contact() {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <ContactFormSection />
      <ContactInfoSection />
      <div className="h-px bg-[#e6e6e6]" />
      <FaqSection />
    </>
  );
}
