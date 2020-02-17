export const oldPassword = otherField => (value, allValues) =>
  value === allValues[otherField]
    ? "Новый пароль совпадает с текущим"
    : undefined;
