import moment from "moment";

// Month must be later than now
export const monthLaterThanCurrentMonth = value =>
  moment(value, "YYYY-MM-DD", true).format("YYYY-MM") <
  moment().format("YYYY-MM")
    ? "Дата не может быть ранее текущей"
    : undefined;
