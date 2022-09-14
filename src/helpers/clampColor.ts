import type { ColorLinear } from '../types';
import { clampValue } from './clampValue';

/**
 * Get the function is input value [min,max] translate to [colorMin, colorMax] then call linear.
 * ex) linear:(red -> blue), min:0, max:20, colorMin: 1.0, colorMax: 0.0
 * returned function call by '0' then returned 'blue'.
 * returned function call by '20' then returned 'red'.
 */
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
