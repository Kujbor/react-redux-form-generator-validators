export const minDigits = min => value =>
	value && +value.replace(/[^\d.]/gim, '') < min
		? `Значение не может быть меньше ${min}`
		: undefined;
