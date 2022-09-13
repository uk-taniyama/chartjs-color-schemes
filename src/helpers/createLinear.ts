import { color as toColor } from 'chart.js/helpers';
import type { Color, ColorLinear } from '../types';

export function createLinear(color: Color): ColorLinear {
  const colorModel = toColor(color);
  return (value: number) => colorModel.alpha(value).hexString();
}
