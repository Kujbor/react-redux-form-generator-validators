export const accountLength = value =>
  value && /(^\d{20}$)/.test(value) ? "Должен содержать 20 цифр" : undefined;
