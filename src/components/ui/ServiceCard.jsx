import Card from "./Card.jsx";
import { img } from "../../utils/assets.js";

export default function ServiceCard({ service }) {
  return (
    <div className="group h-full rounded-[20px] shadow-[0_6px_0_0_#0c0c0c]">
      <Card className="flex h-full flex-col items-start overflow-hidden p-[30px]">
        <img src={img(service.icon)} alt="" className="h-[70px] w-auto" />
        <h4 className="mb-[15px] mt-[30px] text-2xl md:text-[28px]">{service.title}</h4>
        <p className="mb-7 text-lg leading-[1.5] opacity-80">{service.description}</p>
        <span className="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5">
          <img src={img("icon-black-arrow-right.svg")} alt="" />
        </span>
      </Card>
    </div>
  );
}
