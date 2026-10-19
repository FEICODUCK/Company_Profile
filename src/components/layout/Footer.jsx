import { aboutContent, siteInfo } from "../../data/site.js";
import { img } from "../../utils/assets.js";
import Container from "../ui/Container.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";
import SocialLinks from "../ui/SocialLinks.jsx";
import ContactForm from "../ui/ContactForm.jsx";

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="py-16 md:py-24 xl:py-[120px]">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-[1fr_minmax(0,0.8fr)] lg:gap-x-20 xl:gap-x-24 xxl:gap-x-[139px]">
            <div>
              <div className="text-buttery-white">
                <SectionTitle before="Mari mulai" highlight="" after="proyek desain bersama" className="mb-6 !text-buttery-white" />
                <p className="text-lg leading-[1.5] opacity-80 md:text-[21px]">{aboutContent.ctaPara}</p>
              </div>

              <div className="grid grid-cols-[1fr_auto] items-center">
                <div>
                  <ul className="mt-12 flex flex-col gap-y-3">
                    <li>
                      <span className="block font-syne text-[21px] font-bold leading-[1.42] text-light-lime">Hubungi kami:</span>
                      <a className="text-[21px] leading-[1.42] text-buttery-white hover:text-light-lime" href="tel:+1234567890">
                        {siteInfo.phone}
                      </a>
                    </li>
                    <li>
                      <span className="block font-syne text-[21px] font-bold leading-[1.42] text-light-lime">Kirim email kepada kami:</span>
                      <a className="text-[21px] leading-[1.42] text-buttery-white hover:text-light-lime" href={`mailto:${siteInfo.email}`}>
                        {siteInfo.email}
                      </a>
                    </li>
                  </ul>
                  <SocialLinks className="mt-11 !gap-4" />
                </div>
                <div className="hidden lg:inline-block">
                  <img src={img("element-light-lime-curve-arrow.svg")} alt="" className="h-auto max-w-52 xl:max-w-full" />
                </div>
              </div>
            </div>

            <div>
              <span className="mb-[30px] block font-syne text-3xl font-bold text-buttery-white">Kirim pesan kepada kami</span>
              <ContactForm theme="dark" />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
