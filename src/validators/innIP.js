export const innIP = value =>
	value && value.length !== 12 ? 'ИНН должен содержать 12 цифр' : undefined;
