/* eslint-disable no-underscore-dangle */
import {
  ChartArea, LinearScale, LinearScaleOptions, Ticks,
} from 'chart.js';
import type { DeepPartial } from 'chart.js/types/utils';
import type { ColorLinear } from './types';

export interface ColorfulScaleOptions extends LinearScaleOptions {
}

declare module 'chart.js' {
  interface CartesianScaleTypeRegistry {
    colorLinear: {
      options: ColorfulScaleOptions;
    }
  }
}

const id = 'colorful';

export function createColorfulScaleOptions(linear: ColorLinear, min: number, max: number) {
  return {
    type: id,
    min,
    max,
    // NOTE ALL scale options scriptable. so wrap to function.
    linear: () => linear,
  };
}

const colorfulScaleDefaults: DeepPartial<ColorfulScaleOptions> = {
  grid: {
    display: true,
    drawTicks: true,
    drawBorder: false,
    drawOnChartArea: false,
  },
  ticks: {
    padding: 20,
    position: 'right',
    // @ts-expect-error: TS2322 not defined.but exist.....
    crossAlign: 'right',
    // @ts-expect-error: TS2322 not defined.but exist.....
    callback: Ticks.formatters.numeric,
  },
  axios: 'v',
  position: 'right',
};

export class ColorfulScale extends LinearScale {
  private colorful: any;

  static readonly id = id;

  static readonly defaults = colorfulScaleDefaults;

  // NOTE 効果ない模様......
  // static readonly descriptors = {
  //   _scriptable: (name: string) => name !== 'linear',
  // };
  static readonly descriptors = {
    _scriptable: false,
  };

  constructor(cfg: any) {
    super(cfg);
    this.colorful = {
    };
  }

  init(options: any) { // CustomScaleOptions
    super.init(options);
  }

  beforeUpdate(): void {
    // NOTE initがplugin.beforeUpdateの前に来る......
    // Object.assign(
    //   this.options,
    //   (this.chart.config.options as any).scales[this.axis],
    // );
    super.beforeUpdate();
  }

  configure(): void {
    super.configure();
  }

  afterFit() {
    super.afterFit();
    this.colorful.linear = (this.options as any).linear;
    this.colorful.min = this.options.min || 0;
    this.colorful.max = this.options.max || 1;
    this.colorful.padding = this.options.ticks.padding;
    this.colorful.gradient = null;
    this.colorful.size = this.width - 2 * this.colorful.padding;
  }

  _createGradient() {
    const { ctx, height } = this;
    const { linear, max } = this.colorful;
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    for (let i = 0; i <= 10; i += 1) {
      const v = (i / 10);
      gradient.addColorStop(v, linear(max * (1 - v)));
    }
    return gradient;
  }

  _getGradient() {
    if (this.colorful.gradient != null) {
      return this.colorful.gradient;
    }
    this.colorful.gradient = this._createGradient();
    return this.colorful.gradient;
  }

  drawLabels(chartArea: ChartArea): void {
    const { padding, size } = this.colorful;
    const offset = padding + size - 6;
    this.left -= offset;
    this.right -= offset;
    super.drawLabels(chartArea);
    this.left += offset;
    this.right += offset;
  }

  _computeGridLineItems(chartArea: ChartArea) {
    const { padding, size } = this.colorful;
    const offset = padding + size - 12;
    const x = this.left + offset;
    // @ts-expect-error: TS2339 access private method.
    const items: { tx1: number, tx2: number }[] = super._computeGridLineItems(chartArea);
    items.forEach((item) => {
      Object.assign(item, {
        tx1: x,
        tx2: this.right,
      });
    });
    return items;
  }

  drawGrid(chartArea: ChartArea) {
    const { ctx } = this;
    const { padding, size } = this.colorful;
    const offset = padding + size - 4;
    const x = this.left + offset;
    const w = this.right - x;
    ctx.save();
    ctx.fillStyle = this._getGradient();
    ctx.fillRect(x, this.top, w, this.height);
    // ctx.fillRect(this.left, this.top, this.width, this.height);
    // const length = this.ticks.length - 1;
    // const dy = this.height / length;
    // for (let i = 0; i < length; i += 1) {
    //   const y1 = this.top + i * dy;
    //   const y2 = y1 + dy;
    //   ctx.fillStyle = linear((length-i)/length);
    //   ctx.fillRect(x, y1, w, dy);
    // }
    ctx.restore();
    super.drawGrid(chartArea);
  }
}
