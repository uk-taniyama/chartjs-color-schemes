import type { ColorLinear } from '../types';
import { clampValue } from './clampValue';

export function clampColor(
  linear: ColorLinear,
  min: number,
  max: number,
  colorMin: number = 0,
  colorMax: number = 1,
): ColorLinear {
  const clamp = clampValue(min, max, colorMin, colorMax);
  return (value: number) => linear(clamp(value));
}
