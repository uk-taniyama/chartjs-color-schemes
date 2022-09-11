import './style.css';
import Chart from 'chart.js/auto';
import {
  ColorfulScale, ColorfulPlugin,
  createColorSchemes, addScheme, addSchemes, getSchemeNames, getLinearNames, addLinears,
} from 'chartjs-color-schemes';
import { DebugPlugin } from 'chartjs-color-schemes/helpers';
import { getD3Schemes, getOfficeSchemes } from 'chartjs-color-schemes/schemes';
import seed from 'seed-random';

if (document.location.search === '?e2e') {
  Chart.defaults.animation = false;
  Chart.defaults.animations.colors = false;
}

// Chart.register(DebugPlugin);
Chart.register(ColorfulScale, ColorfulPlugin);

// create color-schemes.
const colorSchemes = createColorSchemes();

// add custom scheme
addScheme('Primary', ['#00F', '#0F0', '#0FF', '#F00', '#F0F', '#FF0']);

// get schemes and register.
const { namedColors: d3Schemes } = getD3Schemes();
addSchemes(d3Schemes);
addSchemes(getOfficeSchemes());

// get registered scheme names.
const schemeNames = getSchemeNames();
// setup(colorSchemes);

// get schemes and register.
const { namedLinear } = getD3Schemes();

addLinears(namedLinear);

const ctx: HTMLCanvasElement = document.getElementById('chart') as any;
const schemeNameEl = document.getElementById('schemeName')!;
const schemesEl = document.getElementById('schemes')!;

let random = seed('default');

function randomData() {
  return random() * 50;
}

function randomData3d() {
  return {
    x: randomData(),
    y: randomData(),
    r: randomData(),
  };
}

function createRandomData(type: string): any {
  if (type === 'bubble') return randomData3d;
  if (type === 'scatter') return randomData3d;
  return randomData;
}

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((name) => ([`Data ${name}`]));
// const labels = [1].map((name) => ([`Data ${name}`]));

function config(chartType: string): any {
  random = seed('default');
  const getData = createRandomData(chartType);
  return {
    type: chartType === 'area' ? 'line' : chartType,
    data: {
      labels,
      datasets: [1, 2, 3].map((name) => ({
        label: `Dataset ${name}`,
        data: labels.map(getData),
        fill: chartType === 'area' || chartType === 'bar' ? true : undefined,
        borderColor: '#F00',
        // backgroundColor: '#FCC',
        borderWidth: 2,
        // borderRadius: Number.MAX_VALUE,
        // borderSkipped: false,
      })),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: false,
        },
        [ColorfulPlugin.id]: {
          // datasets: {
          //   '??': {
          //     colors: 'Blues',
          //     background: 'gradient',
          //   },
          // },
          data: [{
            min: 0,
            max: 50,
            name: 'Blues',
            axis: 'c1',
            value: chartType === 'bubble' ? 'r' : undefined,
            datasetIndex: 0,
          }, {
            min: 0,
            max: 50,
            name: 'Greens',
            axis: 'c2',
            value: chartType === 'bubble' ? 'r' : undefined,
            datasetIndex: 1,
          }],
        },
      },
    },
  };
}
let chart = new Chart(ctx, config('bar'));
window.chart = chart;

schemesEl.innerHTML = schemeNames.map((name) => `<button class="btn btn-chartjs" id="${name}">${name}</button>`).join(' ');
schemesEl.addEventListener('click', (ev: any) => {
  if (ev.target.tagName !== 'BUTTON') {
    return;
  }
  const schemeName = ev.target.id;
  schemeNameEl.innerHTML = schemeName;

  // set scheme name and update.
  colorSchemes.setSchemeName(schemeName);
  chart.update();
});
const types = ['line', 'area', 'bar', 'bubble', 'scatter', 'pie', 'doughnut', 'polarArea', 'radar'];
const typesEl = document.getElementById('types')!;
typesEl.innerHTML = types.map((type) => `<button class="btn btn-chartjs" id="${type}">${type}</button>`).join(' ');
typesEl.addEventListener('click', (ev: any) => {
  if (ev.target.tagName !== 'BUTTON') {
    return;
  }
  const type = ev.target.id;
  chart.destroy();
  chart = new Chart(ctx, config(type));
  window.chart = chart;
});
