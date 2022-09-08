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
  it('clamp:-10, 10, 1, 0', () => {
    const getIndex = clampValue(-10, 10, 1, 0);
    expect(getIndex(-10.1)).toEqual(1);
    expect(getIndex(-10)).toEqual(1);
    expect(getIndex(0)).toEqual(0.5);
    expect(getIndex(10)).toEqual(0);
    expect(getIndex(10.1)).toEqual(0);
  });
  it('clamp:-10, 10, 0.8, 0.2', () => {
    const getIndex = clampValue(-10, 10, 0.8, 0.4);
    expect(getIndex(-10.1)).toEqual(0.8);
    expect(getIndex(-10)).toEqual(0.8);
    expect(getIndex(0)).toEqual(0.6);
    expect(getIndex(10)).toEqual(0.4);
    expect(getIndex(10.1)).toEqual(0.4);
  });
});
