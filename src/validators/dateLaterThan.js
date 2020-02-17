import { checkAndPrepareDateCompareParams } from './utils/checkAndPrepareDateCompareParams';

export const dateLaterThan = checkDateString => value => {
	const { referenceDate, targetDate, checkReaction } = checkAndPrepareDateCompareParams(
		checkDateString,
		value
	);

	return checkReaction
		? checkReaction === 'ignore'
			? undefined
			: checkReaction
		: targetDate.isAfter(referenceDate)
		? undefined
		: checkDateString
		? `Дата не может быть ранее ${referenceDate.format('DD.MM.YYYY')}`
		: 'Дата не может быть ранее текущей';
};
