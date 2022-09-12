import type {
  Chart, ChartType, Plugin, ScriptableContext,
} from 'chart.js';
import type { DeepPartial } from 'chart.js/types/utils';
import { isArray, isNumber } from 'chart.js/helpers';
import { isFunction } from 'lodash-es';
import {
  clampColor, transparent, createScriptableColor,
  createScriptableValue, getColor, getColors, createLinear,
} from './helpers';
import type {
  ColorConverter, ColorLinear, Colors, ValueFn,
} from './types';
import { ColorfulScaleOptions, createColorfulScaleOptions } from './colorfulScale';
import { getLinear, getScheme } from './repositories';

export interface ColorfulPluginDataOptions {
  /**
   * minimum number for the scale.
   */
  min: number;
  /**
   * maximum number for the scale.
   */
  max: number;
  /**
   * name for the color linear.
   * @see {@link addLinears}, {@link getLinear}
   */
  name?: string;
  /**
   * colorful-scale axis.
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

export type ColorFnNames = 'color' | 'color2' | 'gradient' | 'colors' | 'colors2' | 'gradients';

export interface ColorfulPluginDatasetOptions {
  types?: string[];
  backgroundColor?: ColorFnNames;
  borderColor?: ColorFnNames;
  pointBackgroundColor?: ColorFnNames;
  pointBorderColor?: ColorFnNames;
}

export interface ColorfulPluginOptions {
  colors: string | Colors;
  converter: ColorConverter;
  dataset: ColorfulPluginDatasetOptions[];
  data: ColorfulPluginDataOptions[];
}

export interface IColorfulPlugin extends Plugin<ChartType, ColorfulPluginOptions> {
  defaults: ColorfulPluginOptions;
  /** @private */
  colors: Colors;
  /** @private */
  colors2: Colors;

  /** @private */
  beforeUpdated: boolean;
  /** @private */
  isDatasetsUpdate: boolean;
}

function getGradientParamByRScale(
  chart: Chart,
) {
  const rScale = chart.scales.r;
  if (rScale == null) {
    return null;
  }
  const { xCenter, yCenter, drawingArea } = rScale as any;
  if (xCenter == null || yCenter == null || drawingArea == null) {
    return null;
  }
  return {
    x: xCenter,
    y: yCenter,
    r1: 0,
    r2: drawingArea,
  };
}

function getGradientParamByArcElement(
  chart: Chart,
  datasetIndex: number,
  dataIndex: number,
) {
  const el = chart.getDatasetMeta(datasetIndex)?.data[dataIndex];
  if (el == null) {
    return null;
  }
  const {
    x, y, innerRadius, outerRadius,
  } = el.getProps(['x', 'y', 'innerRadius', 'outerRadius'], true);
  if (!isNumber(x) || !isNumber(y) || !isNumber(innerRadius) || !isNumber(outerRadius)) {
    return null;
  }
  return {
    x: x as number,
    y: y as number,
    r1: innerRadius as number,
    r2: outerRadius as number,
  };
}

function setGradientColorStop(gradient: CanvasGradient, color: ColorLinear | string) {
  if (isFunction(color)) {
    for (let i = 0; i <= 10; i += 1) {
      const v = (i / 10);
      gradient.addColorStop(v, color(v));
    }
  } else {
    gradient.addColorStop(0, transparent(color));
    gradient.addColorStop(1, color);
  }
}

function createDataGradient(
  chart: Chart,
  color: string,
  datasetIndex: number,
  dataIndex: number,
) {
  const param = getGradientParamByRScale(chart)
   || getGradientParamByArcElement(chart, datasetIndex, dataIndex);
  if (param == null) {
    return color;
  }
  const { ctx } = chart;
  const gradient = ctx.createRadialGradient(
    param.x,
    param.y,
    param.r1,
    param.x,
    param.y,
    param.r2,
  );
  setGradientColorStop(gradient, color);
  return gradient;
}

function createRadialGradient(
  chart: Chart,
): CanvasGradient | null {
  const param = getGradientParamByRScale(chart);
  if (param == null) {
    return null;
  }

  const { ctx } = chart;
  return ctx.createRadialGradient(
    param.x,
    param.y,
    param.r1,
    param.x,
    param.y,
    param.r2,
  );
}

export function createGradient(
  chart: Chart,
  linear: ColorLinear | string,
): CanvasGradient | null {
  const { ctx, chartArea } = chart;
  if (chartArea == null) {
    return null;
  }

  let gradient = createRadialGradient(chart);
  if (gradient == null) {
    const {
      top, left, bottom, right,
    } = chartArea;
    const indexAxis = chart.options?.indexAxis;
    if (indexAxis === 'x') {
      gradient = ctx.createLinearGradient(0, bottom, 0, top);
    } else {
      gradient = ctx.createLinearGradient(left, 0, right, 0);
    }
  }
  setGradientColorStop(gradient, linear);
  return gradient;
}

export function createScriptableGradient(
  plugin: IColorfulPlugin,
  chart: Chart,
  color: string,
  linear: ColorLinear | null = null,
) {
  return () => {
    if (!plugin.isDatasetsUpdate) {
      return color;
    }
    return createGradient(chart, linear || color);
  };
}

export function createScriptableDataGradient(plugin: IColorfulPlugin, colors: Colors) {
  return ({ chart, datasetIndex, dataIndex }: ScriptableContext<any>) => {
    const color = getColor(colors, dataIndex);
    if (!plugin.isDatasetsUpdate) {
      return color;
    }
    return createDataGradient(
      chart,
      color,
      datasetIndex,
      dataIndex,
    );
  };
}

export function resolveColors(colorsOrName: Colors | string): Colors {
  if (isArray<string>(colorsOrName)) {
    return colorsOrName as Colors;
  }
  return getScheme(colorsOrName);
}

/** @internal */
export function applyColorfulPluginDataOptions(
  plugin: IColorfulPlugin,
  chart: Chart,
  data: ColorfulPluginDataOptions,
) {
  const {
    name,
    min,
    max,
    axis,
    scale,
    datasetIndex,
    value,
    min2 = 0,
    max2 = 1,
  } = data;

  const linear = name ? getLinear(name) : createLinear(getColor(plugin.colors, datasetIndex || 0));
  const valueToColor = clampColor(linear, min, max, min2, max2);
  if (axis) {
    const opt = createColorfulScaleOptions(valueToColor, min, max);
    // eslint-disable-next-line no-param-reassign
    (chart.options as any).scales![axis] = Object.assign(opt, scale);
  }

  if (datasetIndex == null) {
    return;
  }
  const dataset = chart.data.datasets[datasetIndex];
  if (dataset == null) {
    return;
  }
  const colorMax2 = linear(max2);
  if (value) {
    // background by value.
    const getValue = createScriptableValue(value);
    const colorBase = createScriptableColor(getValue, valueToColor);
    const color = (ctx: ScriptableContext<any>) => {
      // for legends.
      if (!plugin.isDatasetsUpdate) {
        return colorMax2;
      }
      // for data.
      return colorBase(ctx);
    };
    dataset.borderColor = colorMax2;
    dataset.backgroundColor = color as any;
  } else {
    // gradation background.
    const color = createScriptableGradient(plugin, chart, colorMax2, linear);
    dataset.backgroundColor = color as any;
    dataset.borderColor = colorMax2;
    (dataset as any).pointBackgroundColor = colorMax2;
  }
}

export function createColor(
  plugin: IColorfulPlugin,
  chart: Chart,
  name: string,
  datasetIndex: number,
  dataLength: number,
) {
  const { colors, colors2 } = plugin;
  if (name === 'color') {
    return getColor(colors, datasetIndex);
  }
  if (name === 'color2') {
    return getColor(colors2, datasetIndex);
  }
  if (name === 'gradient') {
    return createScriptableGradient(
      plugin,
      chart,
      getColor(colors, datasetIndex),
    );
  }
  if (name === 'colors') {
    return getColors(colors, dataLength);
  }
  if (name === 'colors2') {
    return getColors(colors2, dataLength);
  }
  if (name === 'gradients') {
    return createScriptableDataGradient(plugin, colors);
  }
  return null;
}

/** @internal */
export function applyColorfulPluginSetupOptions(
  plugin: IColorfulPlugin,
  chart: Chart,
  opts: ColorfulPluginDatasetOptions[],
) {
  if (opts == null || opts.length === 0) {
    return;
  }
  const chartType = (chart.config as any).type;
  chart.data.datasets.forEach((dataset, index) => {
    const type = dataset.type || chartType;
    const opt = opts.find((o) => o.types === undefined || o.types.indexOf(type) >= 0);
    if (opt == null) {
      return;
    }
    Object.entries(opt)
      .forEach(([name, value]) => {
        if (!name.endsWith('Color')) {
          return;
        }
        const color = createColor(plugin, chart, value, index, dataset.data.length);
        if (color != null) {
          // eslint-disable-next-line no-param-reassign
          (dataset as any)[name] = color;
        }
      });
  });
}

/** @internal */
export function applyColorfulPluginOptions(
  plugin: IColorfulPlugin,
  chart: any,
  opts: ColorfulPluginOptions,
) {
  const {
    colors, converter, dataset: setup, data,
  } = opts;
  /* eslint-disable no-param-reassign */
  plugin.colors = isArray(colors) ? colors as Colors : getScheme(colors);
  plugin.colors2 = converter == null ? plugin.colors : plugin.colors.map((c) => converter(c));
  /* eslint-disable no-param-reassign */
  applyColorfulPluginSetupOptions(plugin, chart, setup);
  data?.forEach((d) => applyColorfulPluginDataOptions(plugin, chart, d));
}

declare module 'chart.js' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface PluginOptionsByType<TType extends ChartType> {
    colorful: ColorfulPluginOptions;
  }
}

export const colorfulPluginDatasetDefaults: ColorfulPluginDatasetOptions[] = [
  {
    types: ['pie', 'doughnut', 'polarArea'],
    backgroundColor: 'gradients',
    borderColor: 'color',
  }, {
    types: ['bar', 'line'],
    borderColor: 'color',
    backgroundColor: 'gradient',
    pointBackgroundColor: 'color',
  }, {
    types: ['radar'],
    borderColor: 'color',
    backgroundColor: 'gradient',
  }, {
    borderColor: 'color',
    backgroundColor: 'color2',
  },
];

/**
 * support colorful-scale and colorful-chart plugin.
 * @see {@link ColorfulPluginOptions}
 */
const ColorfulPluginImpl: IColorfulPlugin = {
  /** @private */
  id: 'colorful',
  /** @private */
  defaults: {
    colors: '',
    converter: null as any,
    dataset: colorfulPluginDatasetDefaults,
    data: [],
  },

  colors: [],
  colors2: [],

  /**
   * @private
   * scale options cannot change beforeUpdate.
   * so, scale options are set and chart.update() ONLY ONCE in beforeUpdate.
   */
  beforeUpdated: false,

  isDatasetsUpdate: false,

  /** @private */
  beforeInit(chart: Chart, _args: any, opts: ColorfulPluginOptions) {
    applyColorfulPluginOptions(this, chart, opts);
    this.beforeUpdated = true;
  },

  /** @private */
  beforeUpdate(chart: Chart, _args: any, opts: ColorfulPluginOptions) {
    if (this.beforeUpdated === false) {
      this.beforeUpdated = true;
      applyColorfulPluginOptions(this, chart, opts);
      chart.update();
      return false;
    }
    return undefined;
  },

  /** @private */
  afterUpdate() {
    this.beforeUpdated = false;
  },

  /** @private */
  beforeDatasetsUpdate() {
    this.isDatasetsUpdate = true;
  },

  /** @private */
  afterDatasetsUpdate() {
    this.isDatasetsUpdate = false;
  },
};

export const ColorfulPlugin = ColorfulPluginImpl as Plugin<ChartType, ColorfulPluginOptions>;
