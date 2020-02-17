import { checkAndPrepareDateCompareParams } from './utils/checkAndPrepareDateCompareParams';

export const dateEarlierThan = checkDateString => value => {
	const { referenceDate, targetDate, checkReaction } = checkAndPrepareDateCompareParams(
		checkDateString,
		value
	);

	return checkReaction
		? checkReaction === 'ignore'
			? undefined
			: checkReaction
		: targetDate.isBefore(referenceDate)
		? undefined
		: checkDateString
		? `Дата не может быть позднее ${referenceDate.format('DD.MM.YYYY')}`
		: 'Дата не может быть позднее текущей';
};
