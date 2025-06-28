// Type definitions for Colors.js 1.2
// Project: https://github.com/Marak/colors.js
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, Staffan Eketorp <https://github.com/staeke>
// Definitions: https://github.com/Marak/colors.js

declare const value: Color;
export default value;

export interface Color {
    (text: string): string;

    supportsColor(): ColorSupportLevel;
    enable(): void;
    disable(): void;
    setTheme(theme: any): void;

    strip(str: string): Color;
    stripColors(str: string): Color;

    black(str: string): Color;
    red(str: string): Color;
    green(str: string): Color;
    yellow(str: string): Color;
    blue(str: string): Color;
    magenta(str: string): Color;
    cyan(str: string): Color;
    white(str: string): Color;
    gray(str: string): Color;

    brightRed(str: string): Color;
    brightGreen(str: string): Color;
    brightYellow(str: string): Color;
    brightBlue(str: string): Color;
    brightMagenta(str: string): Color;
    brightCyan(str: string): Color;
    brightWhite(str: string): Color;

    bgBlack(str: string): Color;
    bgRed(str: string): Color;
    bgGreen(str: string): Color;
    bgYellow(str: string): Color;
    bgBlue(str: string): Color;
    bgMagenta(str: string): Color;
    bgCyan(str: string): Color;
    bgWhite(str: string): Color;
    bgGray(str: string): Color;

    bgBrightRed(str: string): Color;
    bgBrightGreen(str: string): Color;
    bgBrightYellow(str: string): Color;
    bgBrightBlue(str: string): Color;
    bgBrightMagenta(str: string): Color;
    bgBrightCyan(str: string): Color;
    bgBrightWhite(str: string): Color;

    reset(str: string): Color;
    bold(str: string): Color;
    dim(str: string): Color;
    italic(str: string): Color;
    underline(str: string): Color;
    inverse(str: string): Color;
    hidden(str: string): Color;
    strikethrough(str: string): Color;

}

export type ColorSupportLevel = {
    level: number;
    hasBasic: boolean;
    has256: boolean;
    has16m: boolean;
};


