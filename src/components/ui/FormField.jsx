const themes = {
  light: {
    label: "mb-3 block pl-6 text-base font-bold",
    input: "border-ink bg-ivory px-8 py-4 text-ink placeholder:text-ink/40",
  },
  dark: {
    label: "sr-only",
    input: "border-[#cccccc] bg-transparent px-6 py-5 text-white placeholder:text-[#cccccc]",
  },
};

export default function FormField({ label, name, type = "text", error, multiline = false, theme = "light", idPrefix = "", ...props }) {
  const t = themes[theme];
  const id = `${idPrefix}${name}`;
  const Tag = multiline ? "textarea" : "input";
  const shape = multiline ? "min-h-40 rounded-[20px]" : "rounded-[50px]";

  return (
    <div>
      <label htmlFor={id} className={t.label}>
        {label}
      </label>
      <Tag
        id={id}
        name={name}
        type={multiline ? undefined : type}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full border text-base font-bold focus:outline-none focus:ring-2 focus:ring-light-lime ${shape} ${t.input} ${error ? "!border-red-500" : ""}`}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className={`mt-1 pl-6 text-sm ${theme === "dark" ? "text-red-300" : "text-red-600"}`}>
          {error}
        </p>
      )}
    </div>
  );
}
