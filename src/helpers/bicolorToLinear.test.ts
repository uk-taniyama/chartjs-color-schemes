import { bicolorToLinear } from './bicolorToLinear';

it('bicolorToLinear', () => {
  const linear = bicolorToLinear({
    color1: '#FF00FF00',
    color2: '#FFFFFFFF',
  });
  expect(linear(0)).toBe('#F0F0');
  expect(linear(1)).toBe('#FFF');
  expect(linear(0.5)).toBe('#FF7FFF80');
});
