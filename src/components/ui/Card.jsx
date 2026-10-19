const variants = {
  light: "rounded-[20px] border-2 border-ink bg-ivory transition duration-300 group-hover:bg-light-lime",
  dark: "rounded-[10px] bg-ink",
};

export default function Card({ variant = "light", className = "", children }) {
  return <div className={`${variants[variant]} ${className}`}>{children}</div>;
}
