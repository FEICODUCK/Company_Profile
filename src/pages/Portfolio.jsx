import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import Section from "../components/ui/Section.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import PortfolioGrid from "../components/sections/PortfolioGrid.jsx";
import portfolio from "../data/portfolio.json";

export default function Portfolio() {
  return (
    <>
      <Breadcrumb title="Portfolio" />
      <Section>
        <div className="mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
          <SectionTitle before="Karya terbaru" highlight="" after="dari studio kami" />
        </div>
        <PortfolioGrid items={portfolio} />
      </Section>
    </>
  );
}
