import type { ColorLinear, Colors } from '../types';

/**
 * create Colors from ColorLinear.
 *
 * includeOne=false(default) => [0, 1].<br>
 * includeOne=true => [0, 1).<br>
 * If linear returns the same value for 0 and 1, specify include=false.
 * For example, linear created with createRotateLinear
 */
export function createColors(
  linear: ColorLinear,
  count: number,
  includeOne: boolean | undefined = true,
): Colors {
  const colors: Colors = [];
  if (count <= 0) {
    return colors;
  }
  if (count === 1) {
    colors.push(linear(0));
    return colors;
  }
  const length = includeOne ? count - 1 : count;
  for (let i = 0; i < count; i += 1) {
    colors[i] = linear(i / length);
  }
  return colors;
}
