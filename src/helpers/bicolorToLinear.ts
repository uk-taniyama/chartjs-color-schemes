import { color } from 'chart.js/helpers';
import { clampValue } from './clampValue';
import type { Bicolor, ColorLinear } from '../types';

export function bicolorToLinear(bicolor: Bicolor): ColorLinear {
  const color1 = color(bicolor.color1);
  const color2 = color(bicolor.color2);
  const r = clampValue(0, 1, color1.rgb.r, color2.rgb.r);
  const g = clampValue(0, 1, color1.rgb.g, color2.rgb.g);
  const b = clampValue(0, 1, color1.rgb.b, color2.rgb.b);
  const a = clampValue(0, 1, color1.rgb.a, color2.rgb.a);
  return (value: number) => color({
    r: r(value),
    g: g(value),
    b: b(value),
    a: a(value),
  }).hexString();
}
