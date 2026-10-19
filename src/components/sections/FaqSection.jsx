import Section from "../ui/Section.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";
import Reveal from "../ui/Reveal.jsx";
import faq from "../../data/faq.json";
import { img } from "../../utils/assets.js";

function FaqItem({ item }) {
  return (
    <Reveal as="li" className="flex flex-col gap-y-4">
      <h4 className="relative pl-10 text-xl md:text-2xl">
        <img src={img("icon-lightlime-question.svg")} alt="" className="absolute left-0 top-1 h-[30px] w-[30px]" />
        {item.question}
      </h4>
      <p className="ml-10 text-lg leading-[1.5]">{item.answer}</p>
    </Reveal>
  );
}

export default function FaqSection({ space = "full" }) {
  const half = Math.ceil(faq.length / 2);
  return (
    <Section space={space}>
      <div className="mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
        <SectionTitle before="Pertanyaan yang sering" highlight="" after="diajukan klien" />
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
        <ul className="flex flex-col gap-y-10">
          {faq.slice(0, half).map((item) => (
            <FaqItem key={item.id} item={item} />
          ))}
        </ul>
        <ul className="flex flex-col gap-y-10">
          {faq.slice(half).map((item) => (
            <FaqItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
