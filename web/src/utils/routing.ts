export const checkLocation = (location: string, comparison: string): boolean => {
	return location === comparison;
};

export const getMain = (pathname: string): string => {
	const regex = /^([^\/]+)/;
	const match = pathname.match(regex);

	if (match) {
		return match[1]; // Return the captured main part
	} else {
		return '';
	}
};

export const checkLink = (href: string, pathname: string) => {
	if (href === `/dashboard` && pathname === href) {
		return `pathname === /dashboard`;
	} else if (href !== `/dashboard`) {
		return pathname.includes(href);
	}
};
