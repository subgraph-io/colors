
// Type definitions for Colors.js 1.4
// Project: https://github.com/Marak/colors.js
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, Staffan Eketorp <https://github.com/staeke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace colors;
export default colors;

declare const colors: Color;

export interface Color {
    (text: string): string;

    strip: Color;
    stripColors: Color;

    enable(): void;
    disable(): void;

    setTheme(theme: any): void;
    supportsColor(): ColorSupportLevel;

    // Main methods
    bold: Color;
    dim: Color;
    italic: Color;
    underline: Color;
    inverse: Color;
    hidden: Color;
    strikethrough: Color;

    // Colors
    black: Color;
    red: Color;
    green: Color;
    yellow: Color;
    blue: Color;
    magenta: Color;
    cyan: Color;
    white: Color;
    gray: Color;
    grey: Color;

    // Bright colors
    brightRed: Color;
    brightGreen: Color;
    brightYellow: Color;
    brightBlue: Color;
    brightMagenta: Color;
    brightCyan: Color;
    brightWhite: Color;

    // Background colors
    bgBlack: Color;
    bgRed: Color;
    bgGreen: Color;
    bgYellow: Color;
    bgBlue: Color;
    bgMagenta: Color;
    bgCyan: Color;
    bgWhite: Color;
    bgGray: Color;
    bgGrey: Color;

    // Bright background colors
    bgBrightRed: Color;
    bgBrightGreen: Color;
    bgBrightYellow: Color;
    bgBrightBlue: Color;
    bgBrightMagenta: Color;
    bgBrightCyan: Color;
    bgBrightWhite: Color;

    // Other methods
    reset: Color;
    trap: Color;
    zalgo: Color;
    america: Color;
    rainbow: Color;
    random: Color;
    zebra: Color;
}

export type ColorSupportLevel = {
    level: number;
    hasBasic: boolean;
    has256: boolean;
    has16m: boolean;
};
