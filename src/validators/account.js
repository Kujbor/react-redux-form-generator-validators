export const account = bik => value =>
  bik &&
  String(bik).length === 9 &&
  value &&
  !checkClientAccountOfCreditOrganization(value, bik)
    ? "Неверно указан номер счета"
    : undefined;
