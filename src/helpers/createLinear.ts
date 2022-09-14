import { color as toColor } from 'chart.js/helpers';
import type { Color, ColorLinear } from '../types';

export function createLinear(color: Color): ColorLinear {
  const colorModel = toColor(color);
  return (value: number) => colorModel.alpha(value).hexString();
}

export function createRotateLinear(color: Color, reverse: boolean = false): ColorLinear {
  const colorModel = toColor(color);
  const deg = reverse ? -360 : 360;
  return (value: number) => colorModel.clone().rotate(value * deg).hexString();
}
