export function determineAgentOrgType(acc, paymentPurpose) {
  if (!(acc && String(acc).length === 20)) return "";

  const ipMask = () => [40802, 421, 454].some(mask => acc.startsWith(mask));

  const ulMask = () =>
    [
      40701,
      40702,
      40703,
      40101,
      40302,
      40501,
      40503,
      40601,
      40601,
      40603,
      425,
      440,
      456,
      457
    ].some(mask => acc.startsWith(mask));

  const flMask = () =>
    [40817, 40820, 423, 426, 455].some(mask => acc.startsWith(mask));

  const ulMaskThatCanBeFl = () =>
    [30301, 47422, 30232, 30109, 30111].some(mask => acc.startsWith(mask));

  if (ipMask()) {
    return AgentOrgType.IP;
  }

  if (flMask()) {
    return AgentOrgType.FL;
  }

  if (ulMask()) {
    return AgentOrgType.UL;
  }

  const paymentPurposeRegexp = /(^|[^0-9])(((40817|40820)(\d{15}| \d{3} \d{1} \d{11})|(423|426)(\d{17}|\d{2} \d{3} \d{1} \d{11}))|(\d{16}|\d{4} \d{4} \d{4} \d{4}))([^0-9]|$)/;
  const paymentPurposeCardRegexp = /карт/i;
  const isFlAccountInPaymentPurporses =
    paymentPurposeRegexp.test(paymentPurpose) ||
    paymentPurposeCardRegexp.test(paymentPurpose);

  if (ulMaskThatCanBeFl() && isFlAccountInPaymentPurporses) {
    return AgentOrgType.FL;
  }

  return AgentOrgType.UL;
}
