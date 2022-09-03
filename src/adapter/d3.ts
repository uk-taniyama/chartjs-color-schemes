import * as d3colors from 'd3-scale-chromatic';
import { last } from 'lodash-es';

export const namedScheme: Record<string, string[]> = {};
export const namedLinear: Record<string, (index: number) => string> = {};
Object.entries(d3colors).forEach(([name, value]) => {
  if (name.startsWith('scheme')) {
    if (!Array.isArray(value)) {
      return;
    }
    const key = name.substring(6);
    if (value[0] != null) {
      namedScheme[key] = value;
    } else {
      namedScheme[key] = last(value);
    }
  }
  if (name.startsWith('interpolate')) {
    const key = name.substring(11);
    namedLinear[key] = value as any;
  }
});
