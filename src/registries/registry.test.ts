import { linears } from './registry.linears';
import { schemes } from './registry.schemes';
import { getD3Schemes } from '../schemes';

it('schemes', () => {
  const { namedColors } = getD3Schemes();

  schemes.addAll(namedColors);
  expect(schemes.names).toEqual(['default', ...Object.keys(namedColors)]);
  const defaultLinear = schemes.get();
  expect(defaultLinear).toBeArray();
  expect(schemes.get('BrBG')).toBe(namedColors.BrBG);
  expect(schemes.get('XXXXXX')).toEqual(defaultLinear);
  schemes.clear();
  expect(schemes.names).toEqual(['default']);
});

it('linears', () => {
  const { namedLinear } = getD3Schemes();

  linears.addAll(namedLinear);
  expect(linears.names).toEqual(['default', ...Object.keys(namedLinear)]);
  const defaultLinear = linears.get();
  expect(defaultLinear).toBeFunction();
  expect(linears.get('BrBG')).toBe(namedLinear.BrBG);
  expect(linears.get('XXXXXX')).toEqual(defaultLinear);
  linears.clear();
  expect(linears.names).toEqual(['default']);
});
