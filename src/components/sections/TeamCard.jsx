import SocialLinks from "../ui/SocialLinks.jsx";
import Reveal from "../ui/Reveal.jsx";
import { img } from "../../utils/assets.js";

export default function TeamCard({ member }) {
  return (
    <Reveal as="li" className="group/team-item">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] border-[5px] border-ink">
        <img
          src={img(member.image)}
          alt={`${member.name}, ${member.role}`}
          loading="lazy"
          className="h-full w-full object-cover transition-all duration-300 group-hover/team-item:scale-110"
        />
        <div className="absolute top-full flex w-full justify-center transition-all duration-300 group-hover/team-item:-translate-y-14">
          <SocialLinks />
        </div>
      </div>
      <div className="mt-5 text-center">
        <span className="mb-1 block font-syne text-2xl font-bold">{member.name}</span>
        <span className="text-lg md:text-[21px]">{member.role}</span>
      </div>
    </Reveal>
  );
}
