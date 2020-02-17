export const letters = value =>
	value && !/^[а-яё][а-яё\s-]*?[а-яё]$/gi.test(value)
		? 'Может содержать только символы русского алфавита'
		: undefined;
