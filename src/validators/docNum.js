export const docNum = value =>
  value.match(/^\d{2};[a-zA-Z0-9а-яА-Я]{8,12}$/)
    ? null
    : "Некорректный формат заполнения";
