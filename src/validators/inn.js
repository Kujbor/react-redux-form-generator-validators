export const inn = value => {
	if (!value) return undefined;

	if (+value === 0) return 'ИНН не может содержать только нули';

	// eslint-disable-next-line max-len, no-mixed-operators
	if (
		value.length === 10 &&
		+value[9] ===
			Math.floor(
				((2 * value[0] +
					4 * value[1] +
					10 * value[2] +
					3 * value[3] +
					5 * value[4] +
					9 * value[5] +
					4 * value[6] +
					6 * value[7] +
					8 * value[8]) %
					11) %
					10
			)
	)
		return undefined;

	// eslint-disable-next-line max-len, no-mixed-operators
	if (
		value.length === 12 &&
		+value[10] ===
			Math.floor(
				((7 * value[0] +
					2 * value[1] +
					4 * value[2] +
					10 * value[3] +
					3 * value[4] +
					5 * value[5] +
					9 * value[6] +
					4 * value[7] +
					6 * value[8] +
					8 * value[9]) %
					11) %
					10
			) &&
		+value[11] ===
			Math.floor(
				((3 * value[0] +
					7 * value[1] +
					2 * value[2] +
					4 * value[3] +
					10 * value[4] +
					3 * value[5] +
					5 * value[6] +
					9 * value[7] +
					4 * value[8] +
					6 * value[9] +
					8 * value[10]) %
					11) %
					10
			)
	)
		return undefined;

	return 'Введен некорректный ИНН';
};
