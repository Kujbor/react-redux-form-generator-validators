export const strictFormatPhone = value =>
  value && !/^\+7\s\([\d]{3}\)\s[\d]{3}\s[\d]{2}\s[\d]{2}$/.test(value)
    ? "Введите телефон в формате +7 (9xx) xx xx xx"
    : undefined;
