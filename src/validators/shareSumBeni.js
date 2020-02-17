export const shareSumBeni = regexp => (value, data = {}) => {
	let beniSum = 0;

	Object.keys(data).forEach(name => {
		// eslint-disable-next-line no-useless-escape
		if (name.match(regexp)) {
			if (data[name]) beniSum += +data[name].replace(/[^\d.]/gim, '');
		}
	});

	if (beniSum > 100) return 'Общая доля не может превышать 100%';

	return undefined;
};
