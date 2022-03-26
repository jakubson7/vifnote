export const themeColors = {
	green: "#344e41",
	green_ac: "#79bf7c",
	green_lt: "#b7da6b",
	green_lt_ac: "#47894e",
	brown: "#944a1a",
	brwon_ac: "#ffd4ab",
	orange: "#f57f72",
	orange_ac: "#ce125c",
	purple: "#3d1144",
	purple_ac: "#bc4e82",
};

export const colors = {
	light: {
		bg: "#f6f3ee",
		bg_ac: "#ffffff",
		fg: "#000000",
		fg_ac: "#181717",
		...themeColors,
	},
	dark: {
		bg: "#181717",
		bg_ac: "#000000",
		fg: "#ffffff",
		fg_ac: "#f6f3ee",
		...themeColors,
	},
};
