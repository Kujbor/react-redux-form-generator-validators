export const maxEmployees = value =>
	value && +value > 100
		? 'Поле заполнено некорректно, максимальное количество сотрудников - 100 человек'
		: undefined;
