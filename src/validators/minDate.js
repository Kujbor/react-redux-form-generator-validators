import moment from "moment";

export const minDate = otherField => (value, allValues) =>
  value && allValues[otherField] && moment(value).isAfter(allValues[otherField])
    ? "Введите корректный промежуток времени"
    : undefined;
