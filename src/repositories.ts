import { createLinear } from './helpers';
import type { Colors, ColorLinear } from './types';

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

export function addScheme(schemeName: string, colors: Colors): void {
  globalSchemes[schemeName] = colors;
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

const defaultLinear = createLinear('#000000');

const globalLinears: Record<string, ColorLinear> = {
  default: defaultLinear,
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
    return defaultLinear;
  }
  return globalLinears[name] || defaultLinear;
}
