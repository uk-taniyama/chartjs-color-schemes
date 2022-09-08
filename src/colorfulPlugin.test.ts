import { ColorfulPlugin } from './colorfulPlugin';
import type { NamedLinear } from './types';
import { addLinear, addLinears } from './createColorSchemes';

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
  const linears: NamedLinear = {
    test: (v) => v.toString(),
  };

  beforeEach(() => {
    addLinears(linears);
  });

  afterEach(() => {
    Object.keys(linears).forEach((k) => addLinear(k, undefined as any));
  });

  function createChart(): any {
    return {
      config: {
        data: {
          datasets: [{}, {}],
        },
        options: {
          scales: {
          },
        },
      },
    };
  }
  it('empty', () => {
    const chart = createChart();
    ColorfulPlugin.beforeInit(chart, undefined, {
      data: [],
    });
    expect(chart).toEqual(createChart());
  });

  it('update dataset only. set valid function.', () => {
    const chart = createChart();
    ColorfulPlugin.beforeInit(chart, undefined, {
      data: [{
        min: 0,
        max: 1,
        name: 'test',
      }],
    });
    const color = chart.config.data.datasets[0].backgroundColor;
    expect(color).toBeFunction();
    expect(color(ctx)).toBe('0');
  });

  it('update dataset only', () => {
    const chart = createChart();
    ColorfulPlugin.beforeInit(chart, undefined, {
      data: [{
        min: 0,
        max: 1,
        value: 'v',
        name: 'name',
      }],
    });
    const color = chart.config.data.datasets[0].backgroundColor;
    expect(color).toBeFunction();
    expect(color(ctx)).toBe('#000000');
  });

  it('many', () => {
    const chart = createChart();
    ColorfulPlugin.beforeInit(chart, undefined, {
      data: [{
        min: 0,
        max: 1,
        value: 'v',
        name: 'name',
      }, {
        min: 0,
        max: 10,
        value: 'r',
        name: 'test',
        datasetIndex: 1,
        axis: 'r',
        min2: 1,
        max2: 0,
      }],
    });
    const color0 = chart.config.data.datasets[0].backgroundColor;
    expect(color0).toBeFunction();
    const color1 = chart.config.data.datasets[1].backgroundColor;
    expect(color1).toBeFunction();
    const scale = chart.config.options.scales.r;
    expect(scale).toEqual({
      linear: expect.toBeFunction(),
      min: 0,
      max: 10,
      type: 'colorful',
    });
    const { linear } = scale;
    expect(linear()(0)).toBe('1');
  });
});
