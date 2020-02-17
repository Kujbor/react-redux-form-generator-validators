export const letters = value =>
  value && !/^[а-яё]{1}([а-яё-\s]+?)?[а-яё]{1}$/i.test(value)
    ? "Только русские буквы"
    : undefined;
