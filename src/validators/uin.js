export const uin = value =>
	value && value !== '0' && value.length !== 20 && value.length !== 25
		? 'УИН должен содержать 20 или 25 знаков'
		: undefined;
