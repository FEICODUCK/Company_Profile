import Section from "../ui/Section.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";
import Reveal from "../ui/Reveal.jsx";
import ServiceCard from "../ui/ServiceCard.jsx";
import services from "../../data/services.json";

export default function ServicesSection({ limit }) {
  const items = limit ? services.slice(0, limit) : services;
  return (
    <Section bg="bg-ivory">
      <div className="mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
        <SectionTitle before="Layanan desain untuk" highlight="" after="membangun brand yang kuat" />
      </div>
      <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
        {items.map((service) => (
          <Reveal as="li" key={service.id}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
