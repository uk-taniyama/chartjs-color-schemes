import { createLinear, createRotateLinear } from './createLinear';

it('createLinear', () => {
  const linear = createLinear('#000');
  expect(linear(-1)).toBe('#0000');
  expect(linear(0)).toBe('#0000');
  expect(linear(0.5)).toBe('#00000080');
  expect(linear(1)).toBe('#000');
  expect(linear(2)).toBe('#000');
});
describe.only('createRotateLinear', () => {
  it('normal', () => {
    const rotateLinear = createRotateLinear('#F00');
    expect(rotateLinear(0)).toBe('#F00');
    expect(rotateLinear(0.25)).toBe('#80FF00');
    expect(rotateLinear(0.5)).toBe('#0FF');
    expect(rotateLinear(0.75)).toBe('#8000FF');
    expect(rotateLinear(1)).toBe('#F00');
  });
  it('reverse', () => {
    const rotateLinear = createRotateLinear('#F00', true);
    expect(rotateLinear(0)).toBe('#F00');
    expect(rotateLinear(0.25)).toBe('#8000FF');
    expect(rotateLinear(0.5)).toBe('#0FF');
    expect(rotateLinear(0.75)).toBe('#80FF00');
    expect(rotateLinear(1)).toBe('#F00');
  });
});
