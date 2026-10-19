import Section from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";

export default function NotFound() {
  return (
    <Section>
      <div className="text-center">
        <p className="font-syne text-[80px] font-bold leading-none">404</p>
        <h1 className="mt-4 text-3xl">Halaman tidak ditemukan</h1>
        <div className="mt-8">
          <Button to="/">Kembali ke beranda</Button>
        </div>
      </div>
    </Section>
  );
}
