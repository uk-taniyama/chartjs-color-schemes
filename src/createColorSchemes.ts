import { clampValue } from './helpers';
import type {
  Colors, ColorConverter, ColorFn, ColorLinear,
} from './types';

const globalNamedColors: Record<string, string> = {
  red: '#ff6384',
  orange: '#ff9f40',
  yellow: '#ffcd56',
  green: '#4bc0c0',
  blue: '#36a2eb',
  purple: '#9966ff',
  grey: '#c9cbcf',
  black: '#404244',
  white: '#F4F5F7',
};

globalNamedColors.line = globalNamedColors.grey;
globalNamedColors.font = globalNamedColors.white;

const defaultScheme: Colors = [
  globalNamedColors.red,
  globalNamedColors.orange,
  globalNamedColors.yellow,
  globalNamedColors.green,
  globalNamedColors.blue,
  globalNamedColors.purple,
];

const globalSchemes: Record<string, Colors> = {
  default: defaultScheme,
};

export function clearNamedColors(): void {
  Object.keys(globalNamedColors).forEach((key) => delete globalNamedColors[key]);
}

export function setNamedColor(name: string, color: string): void {
  globalNamedColors[name] = color;
}

export function setNamedColors(namedColors: Record<string, string>): void {
  Object.assign(globalNamedColors, namedColors);
}

export function addScheme(schmeName: string, colors: Colors): void {
  globalSchemes[schmeName] = colors;
}

export function addSchemes(schemes: Record<string, Colors>): void {
  Object.entries(schemes).forEach(([k, v]) => addScheme(k, v));
}

export function getSchemeNames(): string[] {
  return Object.keys(globalSchemes);
}

export function getScheme(name?: string): Colors {
  if (name == null) {
    return defaultScheme;
  }
  return globalSchemes[name] || defaultScheme;
}

export function createGreyLiear(): ColorLinear {
  const clamp = clampValue(0, 1, 255, 0);
  return (value: number) => {
    const hex = Math.floor(clamp(value)).toString(16).padStart(2, '0');
    return `#${hex}${hex}${hex}`;
  };
}

const grayLinear = createGreyLiear();

const globalLinears: Record<string, ColorLinear> = {
  default: grayLinear,
};

export function addLinear(name: string, linear: ColorLinear) {
  globalLinears[name] = linear;
}

export function addLinears(linears: Record<string, ColorLinear>) {
  Object.entries(linears).forEach(([name, linear]) => addLinear(name, linear));
}

export function getLinearNames(): string[] {
  return Object.keys(globalLinears);
}

export function getLinear(name?: string): ColorLinear {
  if (name == null) {
    return grayLinear;
  }
  return globalLinears[name] || grayLinear;
}

export function getColor(colors: Colors, index: number) {
  return colors[index % colors.length];
}

export function getColors(colors: Colors, count: number, startIndex: number = 0) {
  const result = Array(count);
  for (let i = 0; i < count; i += 1) {
    result[i] = getColor(colors, startIndex + i);
  }
  return result;
}

export interface ColorSchemes {
  color: (ctx: any) => string;
  color2: (ctx: any) => string;
  colors: (ctx: any) => Colors;
  colors2: (ctx: any) => Colors;
  namedColor(name: string): ColorFn;
  lineColor: ColorFn;
  fontColor: ColorFn;
  setColorConverter(converter: ColorConverter): void;
  setSchemeColors(colors: Colors): void;
  setSchemeName(schmeName: string): void;
}

class ColorSchemesImpl implements ColorSchemes {
  scheme: string[];

  converter: ColorConverter;

  lineColor: ColorFn;

  fontColor: ColorFn;

  constructor() {
    this.scheme = getScheme();
    this.converter = (c) => c;
    this.color = this.color.bind(this);
    this.color2 = this.color2.bind(this);
    this.colors = this.colors.bind(this);
    this.colors2 = this.colors2.bind(this);
    this.lineColor = this.namedColor('line');
    this.fontColor = this.namedColor('font');
  }

  color(ctx: any): string {
    return getColor(this.scheme, ctx.datasetIndex);
  }

  color2(ctx: any): string {
    return this.converter(this.color(ctx));
  }

  colors(ctx: any): Colors {
    return getColors(this.scheme, ctx.dataset.data.length);
  }

  colors2(ctx: any): Colors {
    return this.colors(ctx).map(this.converter);
  }

  // eslint-disable-next-line class-methods-use-this
  namedColor(name: string): ColorFn {
    return () => globalNamedColors[name];
  }

  setColorConverter(converter: ColorConverter): void {
    this.converter = converter;
  }

  setSchemeColors(colors: Colors): void {
    this.scheme = colors;
  }

  setSchemeName(schemeName: string): void {
    this.scheme = getScheme(schemeName);
  }
}

export function createColorSchemes(): ColorSchemes {
  return new ColorSchemesImpl();
}
