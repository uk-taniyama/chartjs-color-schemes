/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CanvasGradient } from 'canvas';
import { ColorfulPlugin } from './colorfulPlugin';
import type { NamedLinear } from './types';
import { linears } from './registries';
import { createLinear } from './helpers';

describe('ColorfulPlugin', () => {
  it('id', () => {
    expect(ColorfulPlugin.id).toBe('colorful');
  });
  const ctx = {
    raw: {
      r: 0,
      v: 1,
    },
  };
  const namedLinears: NamedLinear = {
    test: createLinear('#000'),
  };

  beforeEach(() => {
    linears.addAll(namedLinears);
  });

  afterEach(() => {
    linears.clear();
  });

  function createChart(): any {
    const canvas = document.createElement('canvas');
    return {
      ctx: canvas.getContext('2d'),
      config: {
        type: 'line',
      },
      chartArea: {
        top: 0, bottom: 100, left: 0, right: 100, height: 100, width: 100,
      },
      data: {
        datasets: [{}, {}],
      },
      options: {
        scales: {
        },
      },
    };
  }
  it('empty', () => {
    const chart = createChart();
    // @ts-ignore
    ColorfulPlugin.beforeInit(chart, undefined, {
      data: [],
    });
    expect(true).toBeTrue();
  });

  it('update dataset only. set valid function.', () => {
    const chart = createChart();
    // @ts-ignore
    ColorfulPlugin.beforeInit(chart, undefined, {
      data: [{
        min: 0,
        max: 1,
        linear: 'test',
        datasetIndex: 0,
      }],
    });
    const color = chart.data.datasets[0].backgroundColor;
    expect(color).toBeFunction();
    expect(color({ chart })).toBeInstanceOf(CanvasGradient);
  });

  it('update dataset only', () => {
    const chart = createChart();
    // @ts-ignore
    ColorfulPlugin.beforeInit(chart, undefined, {
      data: [{
        min: 0,
        max: 1,
        datasetIndex: 0,
        value: 'v',
        linear: 'name',
      }],
    });
    const color = chart.data.datasets[0].backgroundColor;
    expect(color).toBeFunction();
    expect(color(ctx)).toBe('#000');
  });

  it('many', () => {
    const chart = createChart();
    // @ts-ignore
    ColorfulPlugin.beforeInit(chart, undefined, {
      data: [{
        min: 0,
        max: 1,
        value: 'v',
        linear: 'name',
      }, {
        min: 0,
        max: 10,
        value: 'r',
        linear: 'test',
        datasetIndex: 1,
        axis: 'r',
        min2: 1,
        max2: 0,
      }],
    });
    const color0 = chart.data.datasets[0].backgroundColor;
    expect(color0).toBeUndefined();
    const color1 = chart.data.datasets[1].backgroundColor;
    expect(color1).toBeFunction();
    const scale = chart.options.scales.r;
    expect(scale).toEqual({
      linear: expect.toBeFunction(),
      min: 0,
      max: 10,
      type: 'colorful',
    });
    const { linear } = scale;
    expect(linear()(0)).toBe('#000');
  });
});
