import moment from "moment";

// Month must be earlier than now
export const monthEarlierThanCurrentMonth = value =>
  moment(value, "YYYY-MM-DD", true).format("YYYY-MM") >
  moment().format("YYYY-MM")
    ? "Дата не может быть позднее текущей"
    : undefined;
