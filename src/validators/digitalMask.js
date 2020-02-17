export const digitalMask = targetLength => value =>
	value && value.replace(/[^0-9]/gim, '').length !== targetLength
		? `Должен содержать ${targetLength} цифр`
		: undefined;
