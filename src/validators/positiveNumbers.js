export const positiveNumbers = value =>
  value && Number.isNaN(Number(value)) && value < 0
    ? "Не может быть отрицательным числом"
    : undefined;
