import type { ColorLinear } from '../types';
import { clampValue } from './clampValue';

export function clampColor(linear: ColorLinear, min: number, max: number): ColorLinear {
  const clamp = clampValue(min, max);
  return (value: number) => linear(clamp(value));
}
