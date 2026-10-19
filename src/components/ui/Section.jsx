import Container from "./Container.jsx";

export default function Section({ space = "full", bg = "", className = "", children }) {
  const spacing = space === "bottom" ? "pb-16 md:pb-24 xl:pb-[120px]" : "py-16 md:py-24 xl:py-[120px]";
  return (
    <section className={bg}>
      <div className={spacing}>
        <Container className={className}>{children}</Container>
      </div>
    </section>
  );
}
