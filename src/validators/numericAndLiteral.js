export const numericAndLiteral = value =>
  value && !/^[а-яА-ЯёЁa-zA-Z0-9\s]+$/i.test(value)
    ? "Может содержать только буквы и цифры"
    : undefined;
