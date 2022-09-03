import type { Colors, ColorLinear } from '../types';

export function createColors(linear: ColorLinear, count: number): Colors {
  const colors: string[] = [];
  if (count <= 0) {
    return colors;
  }
  if (count === 1) {
    colors.push(linear(0));
    return colors;
  }
  for (let i = 0; i < count; i += 1) {
    colors[i] = linear(i / (count - 1));
  }
  return colors;
}
