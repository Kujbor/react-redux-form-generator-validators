export const innFL = value =>
  value && value.length !== 12 && value !== "0"
    ? "ИНН должен содержать 12 цифр, быть пустым или равным 0"
    : undefined;
