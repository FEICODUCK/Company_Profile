import { socialLinks } from "../../data/site.js";
import { img } from "../../utils/assets.js";

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex gap-3 ${className}`}>
      {socialLinks.map((s) => (
        <li key={s.icon}>
          <a
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-buttery-white bg-ink transition-all duration-300 hover:border-ink hover:bg-light-lime hover:shadow-[0_1.5px_0_0] hover:shadow-buttery-white"
          >
            <img
              src={img(`icon-logo-buttery-white-${s.icon}.svg`)}
              alt=""
              className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
            />
            <img
              src={img(`icon-logo-black-${s.icon}.svg`)}
              alt=""
              className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
