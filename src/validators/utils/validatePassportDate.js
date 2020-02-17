import moment from 'moment';

import { getDatesDifferenceInYears } from './getDatesDifferenceInYears';

export const validatePassportDate = (personBirthdayDate, passportReceiptDate) => {
	const today = moment().format('YYYY-MM-DD');
	const personAge = getDatesDifferenceInYears(personBirthdayDate, today);
	const passportAge = getDatesDifferenceInYears(personBirthdayDate, passportReceiptDate);

	const message = 'Паспорт недействителен по сроку действия';

	if (personAge >= 20 && personAge < 45) {
		return passportAge <= 19 ? message : undefined;
	}

	if (personAge >= 45) {
		return passportAge <= 44 ? message : undefined;
	}

	return undefined;
};
