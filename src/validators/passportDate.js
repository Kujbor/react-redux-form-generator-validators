import { validatePassportDate } from "./utils/validatePassportDate";

export const passportDate = birthdayDateName => (value, data = {}) =>
  validatePassportDate(data[birthdayDateName], value);
