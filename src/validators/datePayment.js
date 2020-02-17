import moment from 'moment';

export const datePayment = value =>
	value && !moment(value, 'DD.MM.YYYY', true).isValid() ? 'Введите корректную дату' : undefined;
