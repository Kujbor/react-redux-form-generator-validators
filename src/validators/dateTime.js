import moment from 'moment';

import { dateLaterThan } from './dateLaterThan';

export const dateTime = value =>
	value && (!moment(value, moment.ISO_8601, true).isValid() || dateLaterThan('1900-01-01')(value))
		? 'Введите корректные дату и время'
		: undefined;
