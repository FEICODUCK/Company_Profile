import { Link } from "react-router-dom";

const base =
  "relative inline-flex items-center justify-center rounded-[50px] border-2 border-ink font-bold leading-[1.6] shadow-[0_4px_0_0_#0c0c0c] transition-all duration-300 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#0c0c0c]";

const sizes = {
  md: "px-[30px] py-[10px]",
  lg: "px-8 py-3 text-base md:px-10 md:py-3.5 md:text-lg",
};

const variants = {
  primary: "bg-light-lime text-ink",
  black: "bg-ink text-buttery-white hover:text-light-lime",
};

export default function Button({ to, variant = "primary", size = "md", className = "", children, ...props }) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
