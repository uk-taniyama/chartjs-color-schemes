import type { Chart, ChartType, Plugin } from 'chart.js';
import type { DeepPartial } from 'chart.js/types/utils';
import { clampColor, createScriptableColor, createScriptableValue } from './helpers';
import type { ValueFn } from './types';
import { ColorfulScaleOptions, createColorfulScaleOptions } from './colorfulScale';
import { getLinear } from './createColorSchemes';

export interface ColorfulPluginData {
  /**
   * minimum number for the scale.
   */
  min: number;
  /**
   * maxmum number for the scale.
   */
  max: number;
  /**
   * name for the color linear.
   * @see {@link addLinears}, {@link getLinear}
   */
  name: string;
  /**
   * colrful-scale axis.
   */
  axis?: string;
  /**
   * options for color-scale
   */
  scale?: DeepPartial<ColorfulScaleOptions>;
  /**
   * target dataset index.
   * @default 0
   */
  datasetIndex?: number;
  /**
   * value key name or value from ctx function.
   */
  value?: string | ValueFn;
  /**
   * minimum number for the color linear.
   * @default 0.0
   */
  min2?: number;
  /**
   * maximum number for the color linear.
   * @default 1.0
   */
  max2?: number;
}

export interface ColorfulPluginOptions {
  data: ColorfulPluginData[];
}

/** @internal */
export function applyColorfulPluginData(chart: Chart, data: ColorfulPluginData) {
  const {
    name,
    min,
    max,
    axis,
    scale,
    datasetIndex = 0,
    value = 'r',
    min2 = 0,
    max2 = 1,
  } = data;
  const getColor = clampColor(getLinear(name), min, max, min2, max2);
  if (axis != null) {
    const opt = createColorfulScaleOptions(getColor, min, max);
    // eslint-disable-next-line no-param-reassign
    (chart.config.options as any).scales![axis] = Object.assign(opt, scale);
  }
  const getValue = createScriptableValue(value);
  const color = createScriptableColor(getValue, getColor);
  // eslint-disable-next-line no-param-reassign
  chart.config.data.datasets[datasetIndex].backgroundColor = color as any;
}

/** @internal */
export function applyColorfulPluginOptions(chart: any, opts: ColorfulPluginOptions) {
  const { data } = opts;
  if (data == null) {
    return;
  }
  data.forEach((d) => applyColorfulPluginData(chart, d));
}

interface IColorfulPlugin extends Plugin<ChartType, ColorfulPluginOptions> {
  defaults: ColorfulPluginOptions;
  /** @private */
  beforeUpdated: boolean;
}

declare module 'chart.js' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface PluginOptionsByType<TType extends ChartType> {
    colorful: ColorfulPluginOptions;
  }
}

/**
 * support colorful-scale and colorful-chart plugin.
 * @see {@link ColorfulPluginOptions}
 */
const ColorfulPluginImpl: IColorfulPlugin = {
  /** @private */
  id: 'colorful',
  /** @private */
  defaults: {
    data: [],
  },

  /**
   * @private
   * scale options cannot change beforeUpdate.
   * so, scale options are set and chart.update() ONLY ONCE in beforeUpdate.
   */
  beforeUpdated: false,

  /** @private */
  beforeInit(chart: Chart, _args: any, opts: ColorfulPluginOptions) {
    applyColorfulPluginOptions(chart, opts);
    this.beforeUpdated = true;
  },

  /** @private */
  beforeUpdate(chart: Chart, _args: any, opts: ColorfulPluginOptions) {
    if (this.beforeUpdated === false) {
      this.beforeUpdated = true;
      applyColorfulPluginOptions(chart, opts);
      chart.update();
      return false;
    }
    return undefined;
  },

  /** @private */
  afterUpdate() {
    this.beforeUpdated = false;
  },
};

export const ColorfulPlugin = ColorfulPluginImpl as Plugin<ChartType, ColorfulPluginOptions>;
