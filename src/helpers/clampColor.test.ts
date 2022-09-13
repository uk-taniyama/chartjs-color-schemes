import { clampColor } from './clampColor';

describe('clampColor', () => {
  const linear = (n: number) => n.toString();
  it('clamp:-10, 10', () => {
    const getIndex = clampColor(linear, -10, 10);
    expect(getIndex(-10.1)).toEqual('0');
    expect(getIndex(-10)).toEqual('0');
    expect(getIndex(0)).toEqual('0.5');
    expect(getIndex(10)).toEqual('1');
    expect(getIndex(10.1)).toEqual('1');
  });
  it('clamp:-10, 10, 1.0, 0.0', () => {
    const getIndex = clampColor(linear, -10, 10, 1.0, 0.0);
    expect(getIndex(-10.1)).toEqual('1');
    expect(getIndex(-10)).toEqual('1');
    expect(getIndex(0)).toEqual('0.5');
    expect(getIndex(10)).toEqual('0');
    expect(getIndex(10.1)).toEqual('0');
  });
});
