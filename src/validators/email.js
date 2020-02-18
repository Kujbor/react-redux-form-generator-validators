export const email = value =>
  value && !/^[a-z0-9._%+-]+@([a-z0-9-]+\.)+[a-z]{2,}$/i.test(value)
    ? "Некорректный email"
    : undefined;
