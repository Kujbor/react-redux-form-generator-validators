export const password = otherField => (value, allValues) =>
	value && value !== allValues[otherField] ? 'Пароли не совпадают' : undefined;
