type Colors = string[];
const globalSchemes: Record<string, Colors> = {};
const defaultNamedColors: Record<string, string> = {
  red: '#ff6384',
  orange: '#ff9f40',
  yellow: '#ffcd56',
  green: '#4bc0c0',
  blue: '#36a2eb',
  purple: '#9966ff',
  grey: '#c9cbcf',
  black: '#404244',
  white: '#FFFFFF',
};

const defaultColors: Colors = [
  defaultNamedColors.red,
  defaultNamedColors.orange,
  defaultNamedColors.yellow,
  defaultNamedColors.green,
  defaultNamedColors.blue,
  defaultNamedColors.purple,
];

export function addScheme(schmeName: string, colors: Colors) {
  globalSchemes[schmeName] = colors;
}

export function addSchemes(schemes: Record<string, Colors>) {
  Object.entries(schemes).forEach(([k, v]) => addScheme(k, v));
}

export function getScheme(schemeName?: string): Colors {
  if (schemeName == null) {
    return defaultColors;
  }
  return globalSchemes[schemeName] || defaultColors;
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

type ColorConverter = (color: string) => string;

interface ColorSchemes {
  color(ctx: any): string;
  color2(ctx: any): string;
  colors(ctx: any): Colors;
  colors2(ctx: any): Colors;
  namedColor(name: string): (ctx: any) => string;
  setColorConverter(converter: ColorConverter): void;
  setSchemeColors(colors: Colors): void;
  setSchemeName(schmeName: string): void;
}

class ColorSchemesImpl implements ColorSchemes {
  scheme: string[];

  converter: ColorConverter;

  constructor() {
    this.scheme = getScheme();
    this.converter = (c) => c;
    this.color = this.color.bind(this);
    this.color2 = this.color2.bind(this);
    this.colors = this.colors.bind(this);
    this.colors2 = this.colors2.bind(this);
  }

  color(ctx: any): string {
    return getColor(this.scheme, ctx.datasetIndex);
  }

  color2(ctx: any): string {
    return this.converter(this.color(ctx));
  }

  colors(ctx: any): Colors {
    return getColors(this.scheme, ctx.dataset.length);
  }

  colors2(ctx: any): Colors {
    return this.colors(ctx).map(this.converter);
  }

  // eslint-disable-next-line class-methods-use-this
  namedColor(name: string): (ctx: any) => string {
    return () => defaultNamedColors[name];
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
