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

    strip: (str: string) => Color | Color;
    stripColors: (str: string) => Color | Color;

    black: (str: string) => Color | Color;
    red: (str: string) => Color | Color;
    green: (str: string) => Color | Color;
    yellow: (str: string) => Color | Color;
    blue: (str: string) => Color | Color;
    magenta: (str: string) => Color | Color;
    cyan: (str: string) => Color | Color;
    white: (str: string) => Color | Color;
    gray: (str: string) => Color | Color;

    brightRed: (str: string) => Color | Color;
    brightGreen: (str: string) => Color | Color;
    brightYellow: (str: string) => Color | Color;
    brightBlue: (str: string) => Color | Color;
    brightMagenta: (str: string) => Color | Color;
    brightCyan: (str: string) => Color | Color;
    brightWhite: (str: string) => Color | Color;

    bgBlack: (str: string) => Color | Color;
    bgRed: (str: string) => Color | Color;
    bgGreen: (str: string) => Color | Color;
    bgYellow: (str: string) => Color | Color;
    bgBlue: (str: string) => Color | Color;
    bgMagenta: (str: string) => Color | Color;
    bgCyan: (str: string) => Color | Color;
    bgWhite: (str: string) => Color | Color;
    bgGray: (str: string) => Color | Color;

    bgBrightRed: (str: string) => Color | Color;
    bgBrightGreen: (str: string) => Color | Color;
    bgBrightYellow: (str: string) => Color | Color;
    bgBrightBlue: (str: string) => Color | Color;
    bgBrightMagenta: (str: string) => Color | Color;
    bgBrightCyan: (str: string) => Color | Color;
    bgBrightWhite: (str: string) => Color | Color;

    reset: (str: string) => Color | Color;
    bold: (str: string) => Color | Color;
    dim: (str: string) => Color | Color;
    italic: (str: string) => Color | Color;
    underline: (str: string) => Color | Color;
    inverse: (str: string) => Color | Color;
    hidden: (str: string) => Color | Color;
    strikethrough: (str: string) => Color | Color;
}

export type ColorSupportLevel = {
    level: number;
    hasBasic: boolean;
    has256: boolean;
    has16m: boolean;
};


