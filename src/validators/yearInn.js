export const yearInn = (inn, year) => value => {
  if (value <= year - 10) {
    return "Учитываются убытки только за последние 10 лет";
  }

  if (value < inn) {
    return "Невозможно указать убытки за год, в котором организация не была зарегистрирована";
  }

  if (Number(value) === year) {
    return `Если у вас возник убыток за ${year} год, то он будет автоматически рассчитан и учтен в следующем году`;
  }

  if (Number(value) > year) {
    return "Не возможно добавить убыток за будущие налоговые периоды";
  }

  return undefined;
};
