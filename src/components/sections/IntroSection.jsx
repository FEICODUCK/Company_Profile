import SectionTitle from "../ui/SectionTitle.jsx";
import Reveal from "../ui/Reveal.jsx";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { aboutContent } from "../../data/site.js";
import { img } from "../../utils/assets.js";

export default function IntroSection() {
  return (
    <section className="flex min-h-[calc(100svh-var(--nav-h))] items-center overflow-hidden bg-ink py-8 lg:h-[calc(100svh-var(--nav-h))] lg:py-6">
      <Container className="w-full lg:h-full">
        <div className="flex flex-col gap-y-8 lg:h-full lg:flex-row lg:items-center lg:justify-between lg:gap-x-16">
          <div className="flex flex-col justify-center text-center lg:max-w-[680px] lg:flex-1 lg:text-start">
            <SectionTitle
              before="Kami merancang identitas visual yang membuat bisnis Anda"
              highlight="diingat"
              className="text-buttery-white text-[length:clamp(1.75rem,min(6.5vw,6.2vh),3.75rem)] !leading-[1.12]"
            />
            <Reveal
              as="p"
              className="mt-4 text-[length:clamp(0.95rem,min(2.4vw,2.3vh),1.25rem)] leading-[1.5] text-buttery-white opacity-80 lg:mt-6"
            >
              {aboutContent.heroPara}
            </Reveal>
            <Reveal className="mt-6 lg:mt-8">
              <Button to="/portfolio" size="lg">
                Lihat karya kami
              </Button>
            </Reveal>
          </div>

          <Reveal className="mx-auto aspect-3/4 w-full max-w-[210px] shrink-0 overflow-hidden rounded-[25px] border-[5px] border-light-lime sm:max-w-[260px] lg:mx-0 lg:h-full lg:max-h-[640px] lg:w-auto lg:max-w-none">
            <img src={img("about-img.jpg")} alt="Desainer sedang bekerja di studio" className="h-full w-full object-cover" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
