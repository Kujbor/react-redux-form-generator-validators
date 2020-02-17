import _ from 'lodash';

import { required } from './required';
import { cleanMaskArtifactsFromString } from './utils/cleanMaskArtifactsFromString';

// @provider comporators - Provide comparators (functions)
// *! all comporators are checking that the field exist as is (at fails, expectedValue interpitted as empty)
// *! all comporators with expected value are checking if expected value may be interpitted as empty
// (if success - the field value at compare also is trying to be interpitted as empty)
// * all comporators return natural Boolean
// * all comporators have all or one of params:
// @param fieldValue [any] {required} - target to compare or check field value (may be undefined, )
// @param expectedValue [any] {optional} - is value at right operand in compare by field
const comporators = {
	// @function equal - check that the target field value and expected value are equal
	// @return boolean
	equal: (fieldValue, expectedValue) =>
		_.isEmpty(expectedValue)
			? _.isEmpty(fieldValue, expectedValue) === _.isEmpty(expectedValue)
			: _.isEqual(fieldValue, expectedValue),

	// @function notEqual - check that the target field value and expected value are not equal
	// @return boolean
	notEqual: (fieldValue, expectedValue) =>
		_.isEmpty(expectedValue)
			? !(_.isEmpty(fieldValue) === _.isEmpty(expectedValue))
			: !(_.isEqual(fieldValue), expectedValue),

	// @function isEmpty - check that the target field value is empty or may be interpreted as empty
	// @return boolean
	isEmpty: fieldValue => _.isEmpty(fieldValue),

	// @function notEmpty - check that the target field could not be interpreted as empty
	// @return boolean
	notEmpty: fieldValue => !_.isEmpty(fieldValue),
};

// @util @function expression - pretty wrapper to comporator call, check target comporator exist, and prepares clean arguments to them
// @return [boolean]/[undefined] {required} - consolidation results of comparator call and some other checks
// @param data [object] {required} - associative array with form data
// @param field [string] {required} - target field name
// @param condition [string] {optional='equal'} - name of target comporator
// @param expected [any] {optional=''} - expected value (needed to some comparators)
const expression = (data, field, condition = 'equal', expected = '') =>
	comporators[condition] &&
	comporators[condition](
		cleanMaskArtifactsFromString(data[field]),
		cleanMaskArtifactsFromString(expected)
	);

export const requiredIf = (field, condition = 'equal', expectedValue) => (value, data = {}) =>
	data
		? expression(data, field, condition, expectedValue) && required(value)
			? 'Обязательное поле'
			: undefined
		: undefined;
