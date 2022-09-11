import { getColors } from './getColors';

it('getColors', () => {
  const COLORS = ['#000000', '#000001', '#000002'];

  const colors: string[] = [];
  expect(getColors(COLORS, 0)).toEqual(colors);
  colors.push(COLORS[0]);
  expect(getColors(COLORS, 1)).toEqual(colors);
  colors.push(COLORS[1]);
  expect(getColors(COLORS, 2)).toEqual(colors);
  colors.push(COLORS[2]);
  expect(getColors(COLORS, 3)).toEqual(colors);
  colors.push(COLORS[0]);
  expect(getColors(COLORS, 4)).toEqual(colors);
});
