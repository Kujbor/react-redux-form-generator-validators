export const uniqueArr = (groupName, fieldName) => (value, allValues) => {
	let valueMatches = false;
	let matches = 0;

	_.forEach(allValues[groupName], curVal => {
		if (curVal[fieldName] === value) {
			matches += 1;
		}

		if (matches > 1) {
			valueMatches = true;

			return false;
		}

		return undefined;
	});

	if (valueMatches) return 'Такой счет уже есть';

	return undefined;
};
