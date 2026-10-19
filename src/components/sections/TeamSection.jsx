import Section from "../ui/Section.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";
import TeamCard from "./TeamCard.jsx";
import team from "../../data/team.json";

export default function TeamSection() {
  return (
    <Section>
      <div className="mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
        <SectionTitle before="Desainer dan strategis" highlight="" after="di balik setiap karya" />
      </div>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {team.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </ul>
    </Section>
  );
}
