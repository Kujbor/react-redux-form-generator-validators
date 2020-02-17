export const turnover = value => {
	if (!value) return undefined;

	const data = JSON.parse(value);

	if (!data.monthNumber) return 'Не указано кол-во операций';

	if (!data.monthAmmount) return 'Не указана сумма операций';

	return undefined;
};
