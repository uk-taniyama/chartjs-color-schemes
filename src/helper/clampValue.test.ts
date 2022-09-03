import { clampValue } from './clampValue';

describe('clampValue', () => {
  it('clamp:-10, 10', () => {
    const getIndex = clampValue(-10, 10);
    expect(getIndex(-10.1)).toEqual(0);
    expect(getIndex(-10)).toEqual(0);
    expect(getIndex(0)).toEqual(0.5);
    expect(getIndex(10)).toEqual(1);
    expect(getIndex(10.1)).toEqual(1);
  });
});
