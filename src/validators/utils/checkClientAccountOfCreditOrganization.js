export function checkClientAccountOfCreditOrganization(account, bik = "") {
  /*
   * 3. Пример расчета контрольного ключа в лицевом счете клиента кредитной организации:
   * https://normativ.kontur.ru/document?moduleId=1&documentId=24444
   * В алгоритме не используется обнуление: acc[8] = '0'
   * */
  const coefficients = "71371371371371371371371";
  const lastBikChars = bik.toString().slice(-3);
  const isRCC = lastBikChars.substr(0, 2) === "00";

  const bikChars = isRCC ? `0${bik.substr(4, 2)}` : bik.toString().slice(-3);
  const bikCharsAndAccount = bikChars + account;

  let checksum = 0;

  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const i in coefficients) {
    checksum += (Number(coefficients[i]) * Number(bikCharsAndAccount[i])) % 10;
  }

  return ((checksum % 10) * 3) % 10 === 0;
}
