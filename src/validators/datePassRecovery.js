import moment from "moment";

export const datePassRecovery = value =>
  value && !moment(value, "DD-MM-YYYY", true).isValid()
    ? "Введите корректную дату"
    : undefined;
