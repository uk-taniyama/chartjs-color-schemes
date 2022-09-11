import type { Colors } from '../types';

export function getColor(colors: Colors, index: number) {
  return colors[index % colors.length];
}
