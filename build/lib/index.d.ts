// Type definitions for Colors.js 1.2
// Project: https://github.com/Marak/colors.js
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, Staffan Eketorp <https://github.com/staeke>
// Definitions: https://github.com/Marak/colors.js

export interface Color {
    (text: string): string;

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

export function supportsColor(): ColorSupportLevel;
export function enable(): void;
export function disable(): void;
export function setTheme(theme: any): void;

export let enabled: boolean;

export const strip: Color;
export const stripColors: Color;

export const black: Color;
export const red: Color;
export const green: Color;
export const yellow: Color;
export const blue: Color;
export const magenta: Color;
export const cyan: Color;
export const white: Color;
export const gray: Color;

export const brightRed: Color;
export const brightGreen: Color;
export const brightYellow: Color;
export const brightBlue: Color;
export const brightMagenta: Color;
export const brightCyan: Color;
export const brightWhite: Color;

export const bgBlack: Color;
export const bgRed: Color;
export const bgGreen: Color;
export const bgYellow: Color;
export const bgBlue: Color;
export const bgMagenta: Color;
export const bgCyan: Color;
export const bgWhite: Color;
export const bgGray: Color;

export const bgBrightRed: Color;
export const bgBrightGreen: Color;
export const bgBrightYellow: Color;
export const bgBrightBlue: Color;
export const bgBrightMagenta: Color;
export const bgBrightCyan: Color;
export const bgBrightWhite: Color;

export const reset: Color;
export const bold: Color;
export const dim: Color;
export const italic: Color;
export const underline: Color;
export const inverse: Color;
export const hidden: Color;
export const strikethrough: Color;

declare global {
    interface String {
        strip: string;
        stripColors: string;

        black: string;
        red: string;
        green: string;
        yellow: string;
        blue: string;
        magenta: string;
        cyan: string;
        white: string;
        gray: string;
        grey: string;

        bgBlack: string;
        bgRed: string;
        bgGreen: string;
        bgYellow: string;
        bgBlue: string;
        bgMagenta: string;
        bgCyan: string;
        bgWhite: string;

        reset: string;
        bold: string;
        dim: string;
        italic: string;
        underline: string;
        inverse: string;
        hidden: string;
        strikethrough: string;

        rainbow: string;
        zebra: string;
        america: string;
        trap: string;
        random: string;
        zalgo: string;
    }
}
