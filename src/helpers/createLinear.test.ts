import { createLinear } from './createLinear';

it('createLinear', () => {
  const linear = createLinear('#000');
  expect(linear(-1)).toBe('#0000');
  expect(linear(0)).toBe('#0000');
  expect(linear(0.5)).toBe('#00000080');
  expect(linear(1)).toBe('#000');
  expect(linear(2)).toBe('#000');
});
