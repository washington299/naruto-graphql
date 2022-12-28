export const firstLetterUppercase = (str: string) => {
	const firstLetter = str.charAt(0).toUpperCase();
	const restOfString = str.slice(1);

	return firstLetter + restOfString;
};
