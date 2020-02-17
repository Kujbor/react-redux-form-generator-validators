export const maxLength = targetMaxLength => value =>
	value && value.length > targetMaxLength
		? `Символов не может быть больше ${targetMaxLength}`
		: undefined;
