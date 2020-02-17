export const minLength = targetMinLength => value =>
	value && value.length < targetMinLength
		? `Символов не может быть меньше ${targetMinLength}`
		: undefined;
