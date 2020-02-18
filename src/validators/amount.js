export const amount = max => value =>
  value && Number(String(value).replace(/[^\d.]/gim, "")) > max
    ? "Сумма платежа не может превышать текущий баланс"
    : undefined;
