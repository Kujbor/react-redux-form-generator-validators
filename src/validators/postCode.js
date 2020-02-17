export const postCode = targetPostCode =>
	!/^\d{6}$/.test(targetPostCode) ? 'Введите корретный почтовый индекс' : undefined;
