import Section from "../ui/Section.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";
import Reveal from "../ui/Reveal.jsx";
import Card from "../ui/Card.jsx";
import { contactInfo } from "../../data/site.js";
import { img } from "../../utils/assets.js";

function ContactInfoCard({ item }) {
  return (
    <Reveal as="li">
      <Card variant="dark" className="flex h-full gap-x-6 px-5 py-[30px] xl:px-8 xxl:px-[70px]">
        <div className="h-auto w-10 shrink-0">
          <img src={img(`icon-buttery-white-${item.icon}.svg`)} alt="" className="h-auto w-10" />
        </div>
        <div className="flex-1">
          <span className="mb-3 block font-syne text-xl font-bold text-buttery-white xl:text-2xl">{item.title}</span>
          <div className="flex flex-col text-lg leading-[1.42] lg:text-[21px]">
            {item.href ? (
              item.lines.map((line, i) => (
                <a key={i} href={`${item.href}${line}`} className="text-buttery-white hover:text-light-lime">
                  {line}
                </a>
              ))
            ) : (
              <address className="not-italic text-buttery-white">{item.lines.join(" ")}</address>
            )}
          </div>
        </div>
      </Card>
    </Reveal>
  );
}

export default function ContactInfoSection() {
  return (
    <Section space="bottom">
      <div className="mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[866px]">
        <SectionTitle before="Informasi kontak" />
      </div>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {contactInfo.map((item) => (
          <ContactInfoCard key={item.id} item={item} />
        ))}
      </ul>
    </Section>
  );
}
