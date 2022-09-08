/* eslint-disable no-param-reassign */
import { Chart } from 'chart.js';
import type { ColorSchemes } from './createColorSchemes';
import { defaultConverter } from './defaultConverter';

const defaultColorsTypes = ['pie', 'doughnut', 'polarArea'];

export function setup(schemes: ColorSchemes, colorsTypes: string[] = defaultColorsTypes) {
  schemes.setColorConverter(defaultConverter);
  Object.entries(Chart.defaults.datasets).forEach(([type, opts]) => {
    if (colorsTypes.indexOf(type) >= 0) {
      opts.backgroundColor = schemes.colors2 as any;
    } else {
      opts.borderColor = schemes.color;
      opts.backgroundColor = schemes.color2;
    }
  });
}
