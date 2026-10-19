import Section from "../ui/Section.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";
import Reveal from "../ui/Reveal.jsx";
import PortfolioGrid from "./PortfolioGrid.jsx";
import { aboutContent } from "../../data/site.js";
import portfolio from "../../data/portfolio.json";

export default function StorySection() {
  return (
    <Section>
      <div className="mb-10 md:mb-[60px] xl:mb-20">
        <div className="mx-auto max-w-[966px] text-center">
          <SectionTitle before="Dari studio kecil menjadi" highlight="" after="mitra kreatif banyak brand" />
        </div>
        <div className="mx-auto mt-6 max-w-[813px] text-center">
          <Reveal as="p" className="text-lg leading-[1.5] opacity-80 md:text-[21px]">
            {aboutContent.storyPara}
          </Reveal>
        </div>
      </div>
      <PortfolioGrid items={portfolio} />
    </Section>
  );
}
