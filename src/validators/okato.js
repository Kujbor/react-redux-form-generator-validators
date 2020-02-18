export const okato = value =>
  value && value.length !== 8 && value.length !== 11
    ? "Код ОКАТО должен содержать 8 или 11 цифр"
    : undefined;
