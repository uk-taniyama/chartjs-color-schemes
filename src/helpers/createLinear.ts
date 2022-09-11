import { color as toColor } from 'chart.js/helpers';
import type { ColorLinear } from '../types';

export function createLinear(color: string): ColorLinear {
  const colorModel = toColor(color);
  // eslint-disable-next-line no-nested-ternary
  return (value: number) => colorModel.alpha(value).hexString();
}
