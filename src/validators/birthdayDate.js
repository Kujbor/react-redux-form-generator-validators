import { validatePassportDate } from "./utils/validatePassportDate";

export const birthdayDate = passportDateName => (value, data = {}) =>
  validatePassportDate(value, data[passportDateName]);
