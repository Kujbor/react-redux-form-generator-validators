import moment from "moment";

// Date must be later than now
export const dateLaterThanNow = value =>
  moment(value, "YYYY-MM-DD", true).format("YYYY-MM-DD") <
  moment().format("YYYY-MM-DD")
    ? "Дата не может быть ранее текущей"
    : undefined;
