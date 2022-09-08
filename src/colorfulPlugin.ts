import type { Chart } from 'chart.js';
import { clampColor, createScriptableColor, createScriptableValue } from './helpers';
import type { ValueFn } from './types';
import { createColorfulScaleOptions } from './colorfulScale';
import { getLinear } from './createColorSchemes';

export interface ColorfulPluginData {
  min: number;
  max: number;
  name: string;
  axis?: string;
  scale?: any;
  datasetIndex?: number;
  value?: string | ValueFn;
  min2?: number;
  max2?: number;
}

export interface ColorfulPluginOptions {
  data: ColorfulPluginData[];
}

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

export function applyColorfulPluginOptions(chart: any, opts: ColorfulPluginOptions) {
  const { data } = opts;
  if (data == null) {
    return;
  }
  data.forEach((d) => applyColorfulPluginData(chart, d));
}

export const ColorfulPlugin = {
  id: 'colorful',
  defaults: {
    data: [],
  },

  /**
   * @private
   * scale options cannot change beforeUpdate.
   * so, scale options are set and chart.update() ONLY ONCE in beforeUpdate.
   */
  beforeUpdated: false,

  beforeInit(chart: Chart, _args: any, opts: ColorfulPluginOptions) {
    applyColorfulPluginOptions(chart, opts);
    this.beforeUpdated = true;
  },

  beforeUpdate(chart: any, _args: { mode: string }, opts: ColorfulPluginOptions) {
    if (this.beforeUpdated === false) {
      this.beforeUpdated = true;
      applyColorfulPluginOptions(chart, opts);
      chart.update();
      return false;
    }
    return undefined;
  },

  afterUpdate() {
    this.beforeUpdated = false;
  },
};
