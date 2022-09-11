export type Colors = string[];
export type ColorConverter = (color: string) => string;
export type ColorFn = (ctx: any) => string;
export type ColorLinear = (index: number) => string;
export type NamedColors = Record<string, Colors>;
export type NamedLinear = Record<string, ColorLinear>;
export type ValueFn = (ctx: any) => number | null | undefined;
export interface Bicolor {
  color1: string;
  color2: string;
}
export function isBicolor(what: any): what is Bicolor {
  return what != null && what.color1 != null && what.color2 != null;
}
