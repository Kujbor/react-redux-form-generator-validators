export const uin = value => {
  if (value && value === "0") return undefined;

  if (value && value.length !== 20 && value.length !== 25)
    return "УИН должен содержать 20 или 25 знаков";

  return undefined;
};
