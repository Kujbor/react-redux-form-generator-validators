export const innUL = value =>
	value && value.length !== 10
		? 'ИНН должен содержать 10 цифр для получателей юр.лиц и бюджетных организаций'
		: undefined;
