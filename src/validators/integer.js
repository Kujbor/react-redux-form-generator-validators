export const integer = value =>
	typeof value !== 'string' || !/^[\d]+$/.test(value) ? 'Должно быть числом' : undefined;
