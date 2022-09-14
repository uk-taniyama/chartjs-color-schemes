import { interpolateRainbow } from 'd3-scale-chromatic';
import { createColors } from './createColors';

describe('createColors', () => {
  it('count=0', () => {
    const colors = createColors(interpolateRainbow, 0);
    expect(colors.length).toBe(0);
  });
  it('count=1', () => {
    const colors = createColors(interpolateRainbow, 1);
    expect(colors.length).toBe(1);
    expect(colors[0]).toEqual(interpolateRainbow(0));
  });
  it('count=2', () => {
    const colors = createColors(interpolateRainbow, 2);
    expect(colors.length).toBe(2);
    expect(colors[0]).toEqual(interpolateRainbow(0));
    expect(colors[1]).toEqual(interpolateRainbow(1));
  });
  it('count=3', () => {
    const colors = createColors(interpolateRainbow, 3);
    expect(colors.length).toBe(3);
    expect(colors[0]).toEqual(interpolateRainbow(0));
    expect(colors[2]).toEqual(interpolateRainbow(1));

    // includeOne=false, same as includeOne=true exclude last item.
    const colors2 = createColors(interpolateRainbow, 2, false);
    expect(colors2.length).toBe(2);
    expect(colors2[1]).toEqual(colors[1]);
    expect(colors2[1]).toEqual(colors[1]);
  });
});
