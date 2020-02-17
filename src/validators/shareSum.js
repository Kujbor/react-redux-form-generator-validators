export const shareSum = regexp => (value, data = {}) => {
	let sum = 0;

	Object.keys(data).forEach(name => {
		if (name.match(regexp) && data[name] && !name.match('beneficiary_owner-share')) {
			// eslint-disable-next-line no-useless-escape
			sum += +data[name].replace(/[^\d\.]/gim, '');
		}
	});

	if (sum > 100) return 'Общая доля не может превышать 100%';

	return undefined;
};
