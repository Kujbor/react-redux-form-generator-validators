export const mainOkved = (parent, fieldName) => (value, allValues) => {
	const re = new RegExp(`^${parent}.*${fieldName}$`);
	const mainOkvedCount = Object.keys(allValues).filter(
		key => re.test(key) && allValues[key] === '1'
	).length;

	return mainOkvedCount < 1
		? 'Не выбран основной ОКВЭД'
		: mainOkvedCount > 1
		? 'Основной ОКВЭД должен быть один'
		: undefined;
};
