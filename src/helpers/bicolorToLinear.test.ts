import { bicolorToLinear } from './bicolorToLinear';

it('bicolorToLinear', () => {
  const linear = bicolorToLinear({
    c0: '#FF00FF00',
    c1: '#FFFFFFFF',
  });
  expect(linear(0)).toBe('#F0F0');
  expect(linear(1)).toBe('#FFF');
  expect(linear(0.5)).toBe('#FF7FFF80');
});
