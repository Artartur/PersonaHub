export default function formatPhoneNumber(phone: string) {
  if (!phone) return '';

  const beforeLetters = phone.split(/[a-zA-Z]/)[0];

  return beforeLetters.replace(/[^0-9\s\-()]/g, '');
}
