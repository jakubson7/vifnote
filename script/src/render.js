import chalk from "chalk";

export const br = (c = 1) => "\n".repeat(c);
export const red = (c) => chalk.red(c);
export const redBright = (c) => chalk.redBright(c);
export const cyan = (c) => chalk.cyan(c);
export const green = (c) => chalk.greenBright(c);
export const yellow = (c) => chalk.yellowBright(c);
export const gray = (c) => chalk.gray(c);
export const con = (c) => [gray("  | ")];
export const conSuc = (c) => [...con(), green(c)];
export const conErr = (c) => [...con(), redBright("ERROR"), space(), red(c)];
export const space = (c = 4) => "  ".repeat(c);

export const render = (...blocks) => console.log(...blocks);
