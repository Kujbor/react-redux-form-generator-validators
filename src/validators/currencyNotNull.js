export const currencyNotNull = value =>
	value && Math.ceil(value) === 0 ? 'Введено неверное значение' : undefined;
