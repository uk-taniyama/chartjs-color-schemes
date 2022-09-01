import { Chart, ScriptableContext } from 'chart.js';
import 'canvas';

describe('chart.js', () => {
  it('def', async () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;
    return new Promise((resolve) => {
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
          borderColor(ctx: ScriptableContext<any>) {
            console.log(ctx.type, ctx.chart.options.type, ctx.datasetIndex, ctx.dataIndex);
            return '#';
          },
        },
      });
      console.log(chart !== null);
      resolve('true');
    });
  });
});
