import { Chart } from 'chart.js';
import type { ColorSchemes } from './createColorSchemes';
import { defaultConverter } from './defaultConverter';

const defaultColorsTypes = ['pie', 'doughnut', 'polarArea'];

export function setup(schemes: ColorSchemes, colorsTypes: string[] = defaultColorsTypes) {
  schemes.setColorConverter(defaultConverter);
  Object.entries(Chart.overrides).forEach(([type, opts]) => {
    if (colorsTypes.indexOf(type) >= 0) {
      Object.assign(opts, {
        backgroundColor: schemes.colors2,
      });
    } else {
      Object.assign(opts, {
        borderColor: schemes.color,
        backgroundColor: schemes.color2,
        pointBorderColor: schemes.color,
        pointBackgroundColor: schemes.color2,
      });
    }
  });
}
