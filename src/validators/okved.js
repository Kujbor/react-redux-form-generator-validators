export const okved = value =>
  value && value.length !== 4 && value.length !== 5 && value.length !== 6
    ? "ОКВЭД должен содержать от 4 до 6 цифр"
    : undefined;
