import { useId } from "react";
import FormField from "./FormField.jsx";
import Button from "./Button.jsx";
import useContactForm from "../../hooks/useContactForm.js";
import { img } from "../../utils/assets.js";

export default function ContactForm({ theme = "light" }) {
  const { values, errors, submitted, handleChange, handleSubmit } = useContactForm();
  const idPrefix = `${useId()}-`;
  const dark = theme === "dark";

  const field = (name, label, placeholder, extra = {}) => (
    <FormField
      theme={theme}
      idPrefix={idPrefix}
      name={name}
      label={label}
      placeholder={dark ? placeholder : undefined}
      value={values[name]}
      onChange={handleChange}
      error={errors[name]}
      {...extra}
    />
  );

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`flex flex-col gap-y-6 ${dark ? "" : "rounded-[30px] border border-ink p-[30px]"}`}
    >
      {field("name", "Nama Anda", "Nama Anda")}
      {field("email", "Alamat Email", "Alamat email Anda", { type: "email" })}
      {field("phone", "No. Telepon", "Nomor telepon Anda", { type: "tel" })}
      {field("message", "Tulis pesan Anda di sini...", "Tulis pesan Anda di sini...", { multiline: true })}

      {dark ? (
        <Button type="submit" className="justify-start pr-20 md:pr-[118px]">
          Kirim pesan
          <span className="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-ink">
            <img src={img("icon-buttery-white-arrow-right.svg")} alt="" />
          </span>
        </Button>
      ) : (
        <div>
          <Button type="submit" variant="black">
            Kirim Pesan
          </Button>
        </div>
      )}

      {submitted && (
        <p role="status" className={`text-base font-bold ${dark ? "text-light-lime" : "text-ink"}`}>
          Terima kasih! Pesan Anda telah terkirim.
        </p>
      )}
    </form>
  );
}
