export const isLengthKbk = (realLength, displayedLength) => value => {
  if (value === "0") return;

  return value && value.length !== realLength
    ? `Должен содержать ${displayedLength || realLength} цифр(-ы)`
    : undefined;
};
