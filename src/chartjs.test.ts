import { Chart } from 'chart.js';
import 'canvas';

describe('chart.js', () => {
  it('def', async () => {
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
        responsive: true,
        maintainAspectRatio: false,
      },
    });
    console.log(chart !== null);
  });
});
