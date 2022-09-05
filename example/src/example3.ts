import './style.css';
import Chart from 'chart.js/auto';
import { registry, ScaleOptionsByType } from 'chart.js';
import { clampColor } from 'chartjs-color-schemes/helpers';
import { getD3Schemes } from 'chartjs-color-schemes/schemes';
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';
import { ColorScale } from 'chartjs-chart-geo';

import seed from 'seed-random';


Chart.register(MatrixController, MatrixElement);

registry.addScales(ColorScale);

// get schemes and register.
const { namedLinear } = getD3Schemes();

// get registered scheme names.
const schemeNames = Object.keys(namedLinear);

const schemeNameEl = document.getElementById('schemeName')!;
const schemesEl = document.getElementById('schemes')!;

let random = seed('default');

function createMatrixData(countX: number, countY: number, maxV: number) {
  const data: Record<string, any>[] = [];
  for (let x = 0; x < countX; x += 1) {
    for (let y = 0; y < countY; y += 1) {
      const v = (y < 1) ? x * 2 + y * countX : random() * maxV;
      data.push({ x, y, v });
    }
  }
  return data;
}


const X = 30;
const Y = 25;
const V = 50;

type ColorScaleOptions = Partial<ScaleOptionsByType<'color'>>;
const colorScaleOpts: ColorScaleOptions = {
  type: 'color',
  interpolate: 'blues',
  missing: 'transparent',
  quantize: 0,
  legend: {
    indicatorWidth: 24,
    align: 'left',
    length: Number.MAX_SAFE_INTEGER,
    width: Number.MAX_SAFE_INTEGER,
    position: {
      x: 180, 
      y: 12,
    },
    margin: 0,
  },
  min: 0,
  max: V,
}

function config(): any {
  random = seed('default');
  const getColor = (ctx: any) => clampColor(namedLinear.Blues, 0, V)(ctx?.raw?.v || 0);

  const data = createMatrixData(X, Y, V);
  return {
    type: 'matrix',
    data: {
      datasets: [{
        data,
        backgroundColor: (ctx: any) => getColor(ctx),
        width: (ctx: any) => (ctx?.chart?.chartArea?.width || 0) / X,
        height: (ctx: any) => (ctx?.chart?.chartArea?.height || 0) / Y,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      layout: {
        padding: {
          left: 80,
          right: 80,
        }
      },
      scales: {
        x: {
          // display: false,
          min: -0.5,
          max: X - 0.5,
          ticks: {
            callback: (value: number) => (Number.isInteger(value) ? value : undefined),
          },
          offset: false,
        },
        y: {
          // display: false,
          min: -0.5,
          max: Y - 0.5,
          ticks: {
            callback: (value: number) => (Number.isInteger(value) ? value : undefined),
          },
          offset: false,
        },
        r: colorScaleOpts,
      },
      plugins: {
        title: {
          display: false,
        },
        legend: {
          display: false,
        },
      },
    },
  };
}

const canvas: HTMLCanvasElement = document.getElementById('chart') as any;
const chart = new Chart(canvas, config());

schemesEl.innerHTML = schemeNames.map((name) => `<button class="btn btn-chartjs" id="${name}">${name}</button>`).join(' ');
schemesEl.addEventListener('click', (ev: any) => {
  if (ev.target.tagName !== 'BUTTON') {
    return;
  }
  const schemeName = ev.target.id;
  schemeNameEl.innerHTML = schemeName;

  const linear = namedLinear[schemeName];
  colorScaleOpts.interpolate = linear;
  const getColor = (ctx: any) => clampColor(linear, 0, V)(ctx?.raw?.v || 0);
  chart.config.data.datasets[0].backgroundColor = getColor;
  (chart.config as any).options.scales.r.interpolate= schemeName;
  chart.update();
});
