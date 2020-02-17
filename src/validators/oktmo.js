export const oktmo = value =>
	value && value.length !== 8 && value.length !== 11
		? 'код ОКТМО должен содержать 8 или 11 цифр'
		: undefined;
