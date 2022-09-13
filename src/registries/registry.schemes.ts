import { Registry } from './registry';
import type { Color, Scheme } from '../types';

export const globalNamedColors: Record<string, Color> = {
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

const defaultScheme: Scheme = [
  globalNamedColors.red,
  globalNamedColors.orange,
  globalNamedColors.yellow,
  globalNamedColors.green,
  globalNamedColors.blue,
  globalNamedColors.purple,
];

export const schemes = new Registry<Scheme>(defaultScheme);
