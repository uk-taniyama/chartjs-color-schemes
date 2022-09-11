import type { Colors } from '../types';
import { getColor } from './getColor';

export function getColors(colors: Colors, count: number, startIndex: number = 0): Colors {
  const result = Array(count);
  for (let i = 0; i < count; i += 1) {
    result[i] = getColor(colors, startIndex + i);
  }
  return result;
}
