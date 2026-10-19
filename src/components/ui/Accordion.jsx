import { useState } from "react";
import { img } from "../../utils/assets.js";

export default function Accordion({ items, defaultOpen = items[0]?.id }) {
  const [openId, setOpenId] = useState(defaultOpen);

  return (
    <ul className="flex flex-col gap-y-6">
      {items.map((item) => {
        const open = item.id === openId;
        return (
          <li key={item.id} className="border-b-2 border-ink pb-6">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : item.id)}
              className="flex w-full items-center justify-between gap-6 text-left font-syne text-2xl font-bold leading-[1.4] md:text-3xl"
            >
              {item.title}
              <img
                src={img("icon-black-arrow-less-down.svg")}
                alt=""
                className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && <p className="max-w-[826px] pt-5 text-lg opacity-80">{item.text}</p>}
          </li>
        );
      })}
    </ul>
  );
}
