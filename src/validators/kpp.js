export const kpp = value =>
  value && value.length !== 9 ? "КПП должен содержать 9 цифр" : undefined;
