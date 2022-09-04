import { isArray, isObject } from 'chart.js/helpers';
import { isString } from 'lodash-es';
import type { NamedColors } from 'src/types';
import { getBrewerSchemes, getOfficeSchemes, getTableauSchemes } from './chartjs';
import { getD3Schemes } from './d3';

function isNamedColors(namedColors: NamedColors) {
  expect(isObject(namedColors)).toBe(true);
  Object.entries(namedColors).forEach(([name, value]) => {
    expect(isString(name)).toBe(true);
    expect(isArray(value)).toBe(true);
    value.forEach((item) => expect(isString(item)).toBe(true));
  });
}

describe('adapter', () => {
  it('brewer', () => {
    const namedColors = getBrewerSchemes();
    isNamedColors(namedColors);
  });
  it('office', () => {
    const namedColors = getOfficeSchemes();
    isNamedColors(namedColors);
  });
  it('tableau', () => {
    const namedColors = getTableauSchemes();
    isNamedColors(namedColors);
  });
  it('d3', () => {
    const result = getD3Schemes();
    isNamedColors(result.namedColors);
  });
});
