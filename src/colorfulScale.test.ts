/* eslint-disable no-underscore-dangle */
import {
  Chart,
} from 'chart.js';
import { ColorfulScale, createColorfulScaleOptions } from './colorfulScale';

describe('ColorfulScale', () => {
  function createChart() {
    const linear = (v: number) => `#${Math.round(v).toString(16).padStart(3, '0')}`;
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;
    const chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['A', 'B', 'C'],
        datasets: [{
          data: [1, 2, 3],
        }],
      },
      options: {
        responsive: false,
        animation: false,
        maintainAspectRatio: false,
        scales: {
          test: createColorfulScaleOptions(linear, 0, 10) as any,
        },
      },
    });
    chart.update();
    return { chart, canvas };
  }
  it('id', () => {
    expect(ColorfulScale.id).toBe('colorful');
  });

  beforeEach(() => {
    Chart.register(ColorfulScale);
  });

  afterEach(() => {
    Chart.unregister(ColorfulScale);
  });

  it('simple', () => {
    const { chart, canvas } = createChart();
    const scale = chart.scales.test as any;
    expect(scale.colorful).toEqual({
      gradient: expect.anything(),
      linear: expect.toBeFunction(),
      padding: 20,
      textSize: 22,
    });
    const { linear } = scale.colorful;
    expect(linear(0)).toBe('#000');
    expect(linear(8)).toBe('#008');
    scale.draw({
      left: 0,
      right: 100,
      top: 0,
      bottom: 100,
      width: 100,
      height: 100,
    });
    expect(canvas.toDataURL()).toMatchSnapshot();
    chart.destroy();
  });
});
