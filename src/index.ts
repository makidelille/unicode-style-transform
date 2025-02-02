import { lookup, reverseLookup } from "./map";
import { Style } from "./type";

export function info(str: string): { style: Style, base?: string } {
    if (!str[0]) return { style: Style.None };
    const first = str[0];
    const base = reverseLookup[first];
    if (!base || !lookup[base]) return { style: Style.None };
    return {
        base,
        style: Object
            .entries(lookup[base])
            .find(([_type, a]) => a === first)?.[0] as unknown as Style ?? Style.None
    }
}

export function stylize(str: string, styleToAdd: Style): string {
    let newString = '';
    for (const char of str) {
        const { style, base = char } = info(str);
        const newStyle: Style = style | styleToAdd;
        newString += lookup[base]?.[newStyle] ?? base
    }
    return newString;
}

export function unstylize(str: string, styleToRemove: Style = Style.All): string {
    let newString = '';
    for (const char of str) {
        const { style, base = char } = info(str);
        const newStyle: Style = style & (styleToRemove ^ Style.All);
        newString += lookup[base]?.[newStyle] ?? base;
    }
    return newString;
}