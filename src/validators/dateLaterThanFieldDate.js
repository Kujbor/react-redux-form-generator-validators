import { dateLaterThan } from "./dateLaterThan";

export const dateLaterThanFieldDate = checkDateName => (value, data = {}) =>
  dateLaterThan(data[checkDateName])(value);
