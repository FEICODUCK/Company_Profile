import Section from "../ui/Section.jsx";
import StatItem from "./StatItem.jsx";
import { stats } from "../../data/site.js";

export default function StatsSection() {
  return (
    <Section>
      <ul className="grid grid-cols-1 divide-y-2 divide-ink rounded-[25px] border-2 border-ink sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0">
        {stats.map((stat) => (
          <StatItem key={stat.id} stat={stat} />
        ))}
      </ul>
    </Section>
  );
}
