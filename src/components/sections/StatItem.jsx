import useInView from "../../hooks/useInView.js";
import useCountUp from "../../hooks/useCountUp.js";

export default function StatItem({ stat }) {
  const [ref, inView] = useInView();
  const value = useCountUp(stat.value, inView);

  return (
    <li ref={ref} className="px-6 py-8 text-center">
      <div className="font-syne text-5xl font-bold leading-[1.07] -tracking-[1%] text-ink xl:text-[70px]">
        {value}
        {stat.suffix}
      </div>
      <span className="mt-2 inline-block text-lg opacity-80">{stat.label}</span>
    </li>
  );
}
