export type Color = string;
export type Colors = Color[];
export type Scheme = Color[];

export type ColorConverter = (color: Color) => Color;

export type ScriptableColor = (ctx: any) => Color | null;
export type ScriptableValue = (ctx: any) => number | null | undefined;

/**
 * Given a value in the range [0,1], returns the corresponding color.
 * @param value 0.0, 1.0
 */
export type ColorLinear = (value: number) => Color;

export type NamedColors = Record<string, Colors>;
export type NamedLinear = Record<string, ColorLinear>;

export interface Bicolor {
  c0: string;
  c1: string;
}
export function isBicolor(what: any): what is Bicolor {
  return what != null && what.color1 != null && what.color2 != null;
}
