export const ogrn = value => {
  if (!value) return undefined;

  if (+value === 0) return "ОГРН не может содержать только нули";

  if (
    value.length === 13 &&
    +value[12] === Math.floor(((value / 10) % 11) % 10)
  )
    return undefined;

  if (
    value.length === 15 &&
    +value[14] === Math.floor(((value / 10) % 13) % 10)
  )
    return undefined;

  return "Введен некорректный ОГРН";
};
