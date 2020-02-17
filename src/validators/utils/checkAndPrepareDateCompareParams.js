import moment from 'moment';

import { cleanMaskArtifactsFromString } from './cleanMaskArtifactsFromString';

// @property basicReactions - dictionary of basic messages to validators
const basicReactions = {
	etalonFail: 'Эталонное значение в предусмотренной проверке не является корректной датой',
	targetFail: 'Проверяемое значение не является корректной датой',
};

// @util @function expression - check incoming params to validator's from date type values
// @param etalonDate [string] {required} - compare with date
// @param targetDate [string] {required} - date to compare
// @return [object] - structure that reflects check results and used dates as Moment objects, has property's:
// 		referenceDate [object] {required} - etalonDate param as Moment object
//		targetDate [object/undefined] {required} - targetDate param as Moment object
//		checkReaction [string/undefined] - exist when check failed, message reflects trouble interpretation
//											it may be 'ignore' when check fails but this case must be ignored,
// 											and top check muted
// ToDo: @refactor dirty params after @remove cleanMaskArtifactsFromString
export const checkAndPrepareDateCompareParams = (etalonDate, targetDate) => {
	const availibleDateToStringSerializations = ['YYYY-MM-DD', moment.ISO_8601];
	const result = {
		referenceDate: etalonDate
			? moment(etalonDate, availibleDateToStringSerializations, true)
			: moment(new Date()),
		targetDate: targetDate && moment(targetDate, availibleDateToStringSerializations, true),
	};

	// Дата не указана или значение может быть интерпретировано как пустое
	const targetDateUnmasked = cleanMaskArtifactsFromString(targetDate);

	if (!result.targetDate || !targetDateUnmasked) return { ...result, checkReaction: 'ignore' };

	// DBOISI-3944: принято решение игнорировать конфликт невалидности эталонного значения
	// Проверка эталонного знчения установленного в проверке
	// if (!result.referenceDate.isValid()) return { ...result, checkReaction: basicReactions.etalonFail };
	if (!result.referenceDate.isValid()) return { ...result, checkReaction: 'ignore' };

	// Проверка целевого значения переданного в проверку
	if (!result.targetDate.isValid())
		return { ...result, checkReaction: basicReactions.targetFail };

	return { ...result };
};
