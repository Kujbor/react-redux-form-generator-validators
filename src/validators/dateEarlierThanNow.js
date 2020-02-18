import moment from "moment";

// Date must be earlier than now
export const dateEarlierThanNow = value =>
  moment(value, "YYYY-MM-DD", true).format("YYYY-MM-DD") >
  moment().format("YYYY-MM-DD")
    ? "Дата не может быть позднее текущей"
    : undefined;
