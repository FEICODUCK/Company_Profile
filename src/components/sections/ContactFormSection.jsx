import Section from "../ui/Section.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";
import Reveal from "../ui/Reveal.jsx";
import ContactForm from "../ui/ContactForm.jsx";
import { img } from "../../utils/assets.js";

export default function ContactFormSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-end gap-x-20 gap-y-10 lg:grid-cols-[1fr_minmax(0,420px)]">
        <div>
          <div className="mb-10 md:mb-[60px] xl:mb-20">
            <SectionTitle before="Ceritakan proyek Anda," highlight="" after="kami siap berdiskusi" />
          </div>
          <Reveal>
            <ContactForm theme="light" />
          </Reveal>
        </div>
        <Reveal className="hidden overflow-hidden rounded-[20px] border-2 border-ink lg:block lg:border-[5px]">
          <img src={img("contact-img.jpg")} alt="Ruang kerja studio desain" className="h-full w-full object-cover" />
        </Reveal>
      </div>
    </Section>
  );
}
