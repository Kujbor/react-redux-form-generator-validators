export const ndsTextShouldBePresentInCase = (value, { nds }) =>
  nds === -1 && !/ндс/i.test(value)
    ? "Внесите информацию по НДС (ставку и сумму)"
    : undefined;
