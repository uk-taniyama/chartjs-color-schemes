import {
  createColorSchemes, addLinear, addLinears, getLinear, getLinearNames,
} from '.';
import { getD3Schemes } from './schemes';

describe('index', () => {
  const COLORS = ['#000000', '#000001', '#000002'];
  const COLORS2 = ['#FF0000', '#FF0001', '#FF0002'];
  const CONVERTER = (str: string) => `${str}XX`;

  it('color,color2', () => {
    const colorSchemes = createColorSchemes();
    colorSchemes.setSchemeColors(COLORS);
    const { color, color2 } = colorSchemes;
    COLORS.forEach((_, index) => {
      const ctx = {
        datasetIndex: index,
      };
      expect(color(ctx)).toBe(COLORS[index]);
      // default converter is empty. so same value.
      expect(color2(ctx)).toBe(COLORS[index]);
    });
  });

  it('colors,colors2', () => {
    const colorSchemes = createColorSchemes();
    colorSchemes.setSchemeColors(COLORS);
    const { colors, colors2 } = colorSchemes;
    const ctx = {
      dataset: { data: { length: 6 } },
    };
    expect(colors(ctx)).toEqual([...COLORS, ...COLORS]);
    // default converter is empty. so same value.
    expect(colors2(ctx)).toEqual([...COLORS, ...COLORS]);

    colorSchemes.setColorConverter(CONVERTER);
    expect(colors(ctx)).toEqual([...COLORS, ...COLORS]);
    expect(colors2(ctx)).toEqual([...COLORS, ...COLORS].map(CONVERTER));
  });

  it('converter:color', () => {
    const colorSchemes = createColorSchemes();
    colorSchemes.setSchemeColors(COLORS);
    colorSchemes.setColorConverter(CONVERTER);
    const { color, color2 } = colorSchemes;
    COLORS.forEach((_, index) => {
      const ctx = {
        datasetIndex: index,
      };
      expect(color(ctx)).toBe(COLORS[index]);
      expect(color2(ctx)).toBe(`${COLORS[index]}XX`);
    });
  });

  it('setSchemeColors', () => {
    const colorSchemes = createColorSchemes();
    colorSchemes.setSchemeColors(COLORS);
    const { colors } = colorSchemes;
    const ctx = {
      dataset: { data: { length: 3 } },
    };
    expect(colors(ctx)).toEqual(COLORS);

    // change scheme colors
    colorSchemes.setSchemeColors(COLORS2);
    expect(colors(ctx)).toEqual(COLORS2);
  });
});
describe.only('linears', () => {
  const { namedLinear } = getD3Schemes();

  addLinears(namedLinear);
  expect(getLinearNames()).toEqual(['default', ...Object.keys(namedLinear)]);
  const defaultLinear = getLinear();
  expect(defaultLinear).toBeFunction();
  expect(getLinear('BrBG')).toBe(namedLinear.BrBG);
  Object.keys(getLinearNames()).forEach((name) => {
    if (name !== 'default') {
      addLinear(name, undefined as any);
    }
  });
});
