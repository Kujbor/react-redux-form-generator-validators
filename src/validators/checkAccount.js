import { checkClientAccountOfCreditOrganization } from "./utils/checkClientAccountOfCreditOrganization";

export const checkAccount = (value, formValues) => {
  const bik =
    formValues &&
    (formValues.corrBankBik ||
      formValues.bankBik ||
      formValues.bankBic ||
      formValues["representative-bic"] ||
      formValues.bikRecipient);

  if (!bik) return;

  return checkClientAccountOfCreditOrganization(value, bik)
    ? undefined
    : "Неверно указан номер счета";
};
