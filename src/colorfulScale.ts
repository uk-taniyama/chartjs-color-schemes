/* eslint-disable no-underscore-dangle */
import {
  ChartArea, LinearScale, LinearScaleOptions, Ticks,
} from 'chart.js';
import type { DeepPartial } from 'chart.js/types/utils';
import type { ColorLinear } from './types';

/**
 * [LinearScaleOptions](https://www.chartjs.org/docs/latest/api/#linearscaleoptions)
 */
export interface ColorfulScaleOptions extends LinearScaleOptions {
  // NOTE scriptableを抑止できないので、scriptableの形式にする。
  linear: () => ColorLinear,
}

declare module 'chart.js' {
  interface CartesianScaleTypeRegistry {
    colorful: {
      options: ColorfulScaleOptions;
    }
  }
}

const id = 'colorful';

/** @internal */
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
    // TODO こいつで、color-scaleの幅が決まるんだが......
    padding: 20,
    position: 'right',
    // @ts-expect-error: TS2322 not defined.but exist.....
    crossAlign: 'right',
    // @ts-expect-error: TS2322 not defined.but exist.....
    callback: Ticks.formatters.numeric,
  },
  position: 'right',
};

/**
 * colorful-scale.
 */
export class ColorfulScale<O extends ColorfulScaleOptions = ColorfulScaleOptions>
  extends LinearScale<O> {
  private colorful: {
    linear: ColorLinear;
    padding: number;
    gradient: CanvasGradient | null;
    textSize: number;
  };

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
    // setup by afterFit.
    this.colorful = {
    } as any;
  }

  init(options: O) { // CustomScaleOptions
    super.init(options);
  }

  afterFit() {
    super.afterFit();
    // NOTE linearは関数であるが、Scriptableの処理により解決されるので、この段階では、ColorLinearになっている。
    this.colorful.linear = this.options.linear as any;
    this.colorful.padding = this.options.ticks.padding;
    this.colorful.gradient = null;
    this.colorful.textSize = this.width - 2 * this.colorful.padding;
  }

  _createGradient() {
    const { ctx, height, max } = this;
    const { linear } = this.colorful;
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
    const { padding, textSize } = this.colorful;
    const offset = padding + textSize - 6;
    this.left -= offset;
    this.right -= offset;
    super.drawLabels(chartArea);
    this.left += offset;
    this.right += offset;
  }

  _computeGridLineItems(chartArea: ChartArea) {
    const { padding, textSize } = this.colorful;
    const offset = padding + textSize - 12;
    const x = this.left + offset;
    // @ts-expect-error: TS2339 access private method.
    const items: { tx1: number, tx2: number }[] = super._computeGridLineItems(chartArea);
    items.forEach((item) => {
      /* eslint-disable no-param-reassign */
      item.tx1 = x;
      item.tx2 = this.right;
      /* eslint-enable no-param-reassign */
    });
    return items;
  }

  drawGrid(chartArea: ChartArea) {
    const { ctx } = this;
    const { padding, textSize } = this.colorful;
    const offset = padding + textSize - 4;
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
