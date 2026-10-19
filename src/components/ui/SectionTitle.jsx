import Reveal from "./Reveal.jsx";

export default function SectionTitle({ before, highlight, after, as: Tag = "h2", className = "", animate = true }) {
  const heading = (
    <Tag className={`text-[32px] leading-[1.15] md:text-5xl xl:text-[60px] ${className}`}>
      {[before, highlight, after].filter(Boolean).join(" ")}
    </Tag>
  );
  return animate ? <Reveal>{heading}</Reveal> : heading;
}
