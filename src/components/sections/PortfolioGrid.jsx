import { img } from "../../utils/assets.js";

export default function PortfolioGrid({ items }) {
  return (
    <ul className="grid auto-rows-[260px] grid-cols-1 gap-6 sm:grid-cols-2 lg:auto-rows-[340px] lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.id} className={item.wide ? "md:col-span-1 lg:col-span-2" : "col-span-1"}>
          <a
            href={img(item.image)}
            target="_blank"
            rel="noreferrer"
            className="group relative block h-full cursor-pointer overflow-hidden rounded-[25px] border-2 border-ink"
          >
            <img
              src={img(item.image)}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 p-5 text-buttery-white transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
              <span className="block text-sm font-bold uppercase tracking-wide text-light-lime">
                {item.category} · {item.year}
              </span>
              <span className="block font-syne text-xl font-bold">{item.title}</span>
              <span className="block text-sm opacity-80">Klien: {item.client}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
