import './style.css';
import Chart from 'chart.js/auto';
import { getD3Schemes } from 'chartjs-color-schemes/schemes';
import { DebugPlugin } from 'chartjs-color-schemes/helpers';
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';
import seed from 'seed-random';
import {
  ColorfulScale, ColorfulPlugin, addLinears, getLinearNames,
  createColorSchemes, setup,
} from 'chartjs-color-schemes';

if (document.location.search === '?e2e') {
  Chart.defaults.animation = false;
  Chart.defaults.animations.colors = false;
}

Chart.register(MatrixController, MatrixElement);
Chart.register(DebugPlugin);
Chart.register(ColorfulScale, ColorfulPlugin);
const schemes = createColorSchemes();
setup(schemes);

// get schemes and register.
const { namedLinear } = getD3Schemes();

// get registered linears
addLinears(namedLinear);
const schemeNames = getLinearNames();

let random = seed('default');

function createMatrixData(countX: number, countY: number, maxV: number) {
  const data: Record<string, any>[] = [];
  for (let x = 0; x < countX; x += 1) {
    for (let y = 0; y < countY; y += 1) {
      // const v = (y < 1) ? x * 2 + y * countX : random() * maxV;
      const r = random() * maxV;
      data.push({
        x, y, r,
      });
    }
  }
  return data;
}

function createBubbleData(count: number, maxX: number, maxY: number, maxV: number) {
  const data: Record<string, any>[] = [];
  for (let i = 0; i < count; i += 1) {
    data.push({
      x: random() * maxX,
      y: random() * maxY,
      r: random() * maxV,
    });
  }
  return data;
}

const X = 30;
const Y = 20;
const V = 20;
Object.assign(window, { Chart });

function createMatrixOptions(maxX: number, maxY: number) {
  return {
    width: (ctx: any) => (ctx?.chart?.chartArea?.width || 0) / maxX,
    height: (ctx: any) => (ctx?.chart?.chartArea?.height || 0) / maxY,
  };
}

function configMatrix(): any {
  random = seed('default');

  const data = createMatrixData(X, Y, V);
  return {
    type: 'matrix',
    data: {
      datasets: [{
        data, ...createMatrixOptions(X, Y),
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      scales: {
        x: {
          // display: false,
          min: -0.5,
          max: X - 0.5,
          grid: {
            display: false,
          },
          ticks: {
            callback: (value: number) => (Number.isInteger(value) ? value : undefined),
          },
          offset: false,
        },
        y: {
          // display: false,
          min: -0.5,
          max: Y - 0.5,
          grid: {
            // display: false,
          },
          ticks: {
            callback: (value: number) => (Number.isInteger(value) ? value : undefined),
          },
          offset: false,
        },
        // r: linearColors.getScaleOptions(),
      },
      plugins: {
        title: {
          display: false,
        },
        legend: {
          display: false,
        },
        [ColorfulPlugin.id]: {
          data: [{
            min: 0,
            max: V,
            axis: 'r',
          }],
        },
        tooltip: {
          callbacks: {
            title(arg: any) {
              return [arg[0].raw.x, arg[0].raw.y].join('/');
            },
            label({ raw }: any) {
              return raw.r;
            },
          },
        },
      },
    },
  };
}

function configBubble(): any {
  random = seed('default');

  const data = createBubbleData(50, X, Y, V);
  return {
    type: 'bubble',
    data: {
      datasets: [{
        data,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        title: {
          display: false,
        },
        legend: {
          display: false,
        },
        [ColorfulPlugin.id]: {
          data: [{
            min: 0,
            max: V,
            axis: 'r',
          }],
        },
      },
    },
  };
}

const canvas: HTMLCanvasElement = document.getElementById('chart') as any;
let chart = new Chart(canvas, configBubble());
Object.assign(window, { chart });
const schemesEl = document.getElementById('schemes')!;
const schemeNameEl = document.getElementById('schemeName')!;
schemesEl.innerHTML = schemeNames.map((name) => `<button class="btn btn-chartjs" id="${name}">${name}</button>`).join(' ');
schemesEl.addEventListener('click', (ev: any) => {
  if (ev.target.tagName !== 'BUTTON') {
    return;
  }
  const name = ev.target.id;
  schemeNameEl.innerHTML = name;
  (chart.options as any).plugins[ColorfulPlugin.id].data[0].name = name;
  chart.update();
});

const handlers: Record<string, (opts: any) => void> = {
  ToggleScale: (opts: any) => {
    if (opts.scale?.display !== false) {
      Object.assign(opts, {
        scale: {
          display: false,
        },
      });
    } else {
      opts.scale.display = true;
    }
  },
  DefaultColor: (opts: any) => {
    opts.min2 = 0;
    opts.max2 = 1;
  },
  ReverceColor: (opts: any) => {
    opts.min2 = 1;
    opts.max2 = 0;
  },
  HalfColor: (opts: any) => {
    opts.min2 = 0.25;
    opts.max2 = 0.75;
  },
};
const handlersEl = document.getElementById('handlers')!;
handlersEl.innerHTML = Object.keys(handlers).map((name) => `<button class="btn btn-chartjs" id="${name}">${name}</button>`).join(' ');
handlersEl.addEventListener('click', (ev: any) => {
  if (ev.target.tagName !== 'BUTTON') {
    return;
  }
  const name = ev.target.id;
  handlers[name]((chart.options as any).plugins[ColorfulPlugin.id].data[0]);
  chart.update();
});
const typesEl = document.getElementById('types')!;
const types = ['bubble', 'matrix'];
typesEl.innerHTML = types.map((type) => `<button class="btn btn-chartjs" id="${type}">${type}</button>`).join(' ');
typesEl.addEventListener('click', (ev: any) => {
  if (ev.target.tagName !== 'BUTTON') {
    return;
  }
  const type = ev.target.id;
  chart.destroy();
  chart = new Chart(canvas, type === 'bubble' ? configBubble() : configMatrix());
  Object.assign(window, { chart });
});
