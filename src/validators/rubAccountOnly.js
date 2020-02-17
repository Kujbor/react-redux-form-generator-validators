export const rubAccountOnly = value =>
  value && value.length > 7 && value.substr(5, 3) !== "810"
    ? "Платеж может быть выполнен только на счет, открытый в валюте рубли РФ"
    : undefined;
