import { dateEarlierThan } from "./dateEarlierThan";

export const dateEarlierThanFieldDate = checkDateName => (value, data = {}) =>
  dateEarlierThan(data[checkDateName])(value);
