export const isLength = (realLength, displayedLength) => value =>
	value && value.length !== realLength
		? `Должен содержать ${displayedLength || realLength} цифр(-ы)`
		: undefined;
