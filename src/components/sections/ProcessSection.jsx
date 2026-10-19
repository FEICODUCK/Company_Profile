import Section from "../ui/Section.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";
import Reveal from "../ui/Reveal.jsx";
import Accordion from "../ui/Accordion.jsx";
import process from "../../data/process.json";

export default function ProcessSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-[1fr_minmax(0,0.67fr)] xxl:gap-x-[72px]">
        <div className="text-center lg:text-start">
          <SectionTitle before="Proses kerja terarah" highlight="" after="dari brief hingga peluncuran" />
          <Reveal className="mt-6 space-y-4 text-lg leading-[1.5] opacity-80 md:text-[21px]">
            <p>
              Setiap tahap melibatkan Anda lewat presentasi dan diskusi, sehingga arah visual selalu selaras
              dengan tujuan bisnis dan karakter brand.
            </p>
            <p>
              Urutan dan durasi tiap tahap dapat menyesuaikan skala proyek, mulai dari satu logo hingga
              sistem desain lengkap.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <Accordion items={process} />
        </Reveal>
      </div>
    </Section>
  );
}
