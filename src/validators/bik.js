export const bik = value =>
  value && ("" || value).replace(/[^\d]+/g, "").length !== 9
    ? "Неверно указан БИК"
    : undefined;
