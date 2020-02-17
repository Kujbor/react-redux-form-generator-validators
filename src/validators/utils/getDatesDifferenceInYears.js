export const getDatesDifferenceInYears = (dateFrom, dateTo) => {
	const differenceInMilliseconds = new Date(dateTo) - new Date(dateFrom);

	return Math.abs(new Date(differenceInMilliseconds).getUTCFullYear() - 1970);
};
