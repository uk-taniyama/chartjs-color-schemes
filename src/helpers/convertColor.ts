import { color as toColor } from 'chart.js/helpers';
import type { ColorModel } from 'chart.js/helpers';
import type { Color, ColorConverter } from '../types';

type Fn = (v: ColorModel) => ColorModel;

/**
 * Create color's alpha converter.
 */
export function createAlphaConverter(alpha: number): ColorConverter {
  return (color) => toColor(color).alpha(alpha).hexString();
}

/**
 * Get a transparent color.
 *
 * #FFFFFF -> #FFFFFF00
 */
export const transparent: ColorConverter = createAlphaConverter(0);

/**
 * Get a half-transparent color.
 *
 * #FFFFFF -> #FFFFFF80
 */
export const halfTransparent: ColorConverter = createAlphaConverter(0.5);

export class ConvertColorBuilder {
  /** @private */
  fn: Fn[];

  /** @private */
  constructor() {
    this.fn = [];
  }

  build(): ColorConverter {
    return (color: Color) => this.fn.reduce(
      (prev, fn) => fn(prev),
      toColor(color),
    ).hexString();
  }

  mix(color: Color, weight: number) {
    this.fn.push((x) => x.mix(toColor(color), weight));
    return this;
  }

  alpha(v: number) {
    this.fn.push((x) => x.alpha(v));
    return this;
  }

  clearer(ration: number) {
    this.fn.push((x) => x.clearer(ration));
    return this;
  }

  greyscale() {
    this.fn.push((x) => x.greyscale());
    return this;
  }

  opaquer(ratio: number) {
    this.fn.push((x) => x.opaquer(ratio));
    return this;
  }

  negate() {
    this.fn.push((x) => x.negate());
    return this;
  }

  lighten(ratio: number) {
    this.fn.push((x) => x.lighten(ratio));
    return this;
  }

  darken(ratio: number) {
    this.fn.push((x) => x.darken(ratio));
    return this;
  }

  saturate(ratio: number) {
    this.fn.push((x) => x.saturate(ratio));
    return this;
  }

  desaturate(ratio: number) {
    this.fn.push((x) => x.desaturate(ratio));
    return this;
  }

  rotate(deg: number) {
    this.fn.push((x) => x.rotate(deg));
    return this;
  }
}

export function createConvertColorBuilder(): ConvertColorBuilder {
  return new ConvertColorBuilder();
}
