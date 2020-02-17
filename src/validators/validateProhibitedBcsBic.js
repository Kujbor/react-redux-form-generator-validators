export const validateProhibitedBcsBic = bik =>
  ["044525631", "044525099", "045004761"].includes(bik)
    ? "Перевод денежных средств возможен только в сторонний банк"
    : undefined;
