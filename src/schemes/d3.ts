import * as d3colors from 'd3-scale-chromatic';
import { last } from 'lodash-es';
import type { NamedColors, NamedLinear } from '../types';

export function getD3Schemes() {
  const namedColors: NamedColors = {};
  const namedLinear: NamedLinear = {};
  Object.entries(d3colors).forEach(([name, value]) => {
    if (name.startsWith('scheme')) {
      if (!Array.isArray(value)) {
        return;
      }
      const key = name.substring(6);
      if (value[0] != null) {
        namedColors[key] = value;
      } else {
        namedColors[key] = last(value);
      }
    }
    if (name.startsWith('interpolate')) {
      const key = name.substring(11);
      namedLinear[key] = value as any;
    }
  });
  return {
    namedLinear,
    namedColors,
  };
}
