import {
  addLinear, addLinears, addSchemes, getLinear, getLinearNames, getScheme, getSchemeNames,
} from './repositories';
import { getD3Schemes } from './schemes';

it('schemes', () => {
  const { namedColors } = getD3Schemes();

  addSchemes(namedColors);
  expect(getSchemeNames()).toEqual(['default', ...Object.keys(namedColors)]);
  const defaultScheme = getScheme();
  expect(defaultScheme).toBeArray();
  expect(getScheme('Accent')).toEqual(namedColors.Accent);
  expect(getScheme('XXXXXX')).toEqual(defaultScheme);
});

it('linears', () => {
  const { namedLinear } = getD3Schemes();

  addLinears(namedLinear);
  expect(getLinearNames()).toEqual(['default', ...Object.keys(namedLinear)]);
  const defaultLinear = getLinear();
  expect(defaultLinear).toBeFunction();
  expect(getLinear('BrBG')).toBe(namedLinear.BrBG);
  expect(getLinear('XXXXXX')).toEqual(defaultLinear);
  getLinearNames().forEach((name) => {
    if (name !== 'default') {
      addLinear(name, undefined as any);
    }
  });
});
