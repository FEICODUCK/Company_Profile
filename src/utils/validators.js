const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+()\-\s\d]{6,20}$/;

export function validateContactForm({ name, email, phone, message }) {
  const errors = {};

  if (!name.trim()) errors.name = "Nama wajib diisi.";
  else if (name.trim().length < 3) errors.name = "Nama minimal 3 karakter.";

  if (!email.trim()) errors.email = "Email wajib diisi.";
  else if (!EMAIL_PATTERN.test(email.trim())) errors.email = "Format email tidak valid.";

  if (phone.trim() && !PHONE_PATTERN.test(phone.trim())) errors.phone = "Nomor telepon tidak valid.";

  if (!message.trim()) errors.message = "Pesan wajib diisi.";
  else if (message.trim().length < 10) errors.message = "Pesan minimal 10 karakter.";

  return errors;
}
