export const max = targetMaxValue => value =>
	value && +value.replace(/[^\d.]/gim, '') > targetMaxValue
		? `Значение не может быть больше ${targetMaxValue}`
		: undefined;
