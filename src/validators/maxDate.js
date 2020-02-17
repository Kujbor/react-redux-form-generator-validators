import moment from 'moment';

export const maxDate = otherField => (value, allValues) =>
	value && allValues[otherField] && moment(value).isBefore(allValues[otherField])
		? 'Введите корректный промежуток времени'
		: undefined;
