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

    strip: Color;
    stripColors: Color;

    black: Color;
    red: Color;
    green: Color;
    yellow: Color;
    blue: Color;
    magenta: Color;
    cyan: Color;
    white: Color;
    gray: Color;

    brightRed: Color;
    brightGreen: Color;
    brightYellow: Color;
    brightBlue: Color;
    brightMagenta: Color;
    brightCyan: Color;
    brightWhite: Color;

    bgBlack: Color;
    bgRed: Color;
    bgGreen: Color;
    bgYellow: Color;
    bgBlue: Color;
    bgMagenta: Color;
    bgCyan: Color;
    bgWhite: Color;
    bgGray: Color;

    bgBrightRed: Color;
    bgBrightGreen: Color;
    bgBrightYellow: Color;
    bgBrightBlue: Color;
    bgBrightMagenta: Color;
    bgBrightCyan: Color;
    bgBrightWhite: Color;

    reset: Color;
    bold: Color;
    dim: Color;
    italic: Color;
    underline: Color;
    inverse: Color;
    hidden: Color;
    strikethrough: Color;

}

export type ColorSupportLevel = {
    level: number;
    hasBasic: boolean;
    has256: boolean;
    has16m: boolean;
};


