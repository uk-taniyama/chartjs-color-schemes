import { getColor } from './getColor';

it('getColor', () => {
  const COLORS = ['#000000', '#000001', '#000002'];

  expect(getColor(COLORS, 0)).toBe(COLORS[0]);
  expect(getColor(COLORS, 1)).toBe(COLORS[1]);
  expect(getColor(COLORS, 2)).toBe(COLORS[2]);
  expect(getColor(COLORS, 3)).toBe(COLORS[0]);
  expect(getColor(COLORS, 4)).toBe(COLORS[1]);
});
