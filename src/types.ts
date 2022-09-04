export type Colors = string[];
export type ColorConverter = (color: string) => string;
export type ColorFn = (ctx: any) => string;
export type ColorLinear = (index: number) => string;
export type NamedColors = Record<string, Colors>;
export type NamedLinear = Record<string, ColorLinear>;
