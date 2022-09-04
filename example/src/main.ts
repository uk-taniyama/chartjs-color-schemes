import './style.css';
import Chart from 'chart.js/auto';
import {
  createColorSchemes, setup, addScheme, addSchemes, getSchemeNames,
} from 'chartjs-color-schemes';
import { getD3Schemes, getOfficeSchemes } from 'chartjs-color-schemes/schemes';
import seed from 'seed-random';

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
setup(colorSchemes);

const ctx: HTMLCanvasElement = document.getElementById('chart') as any;
const schemeNameEl = document.getElementById('schemeName')!;
const schemesEl = document.getElementById('schemes')!;
const typesEl = document.getElementById('types')!;

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

function config(chartType: string): any {
  random = seed('default');
  const getData = createRandomData(chartType);
  return {
    type: chartType === 'area' ? 'line' : chartType,
    data: {
      labels,
      datasets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((name) => ({
        label: `Dataset ${name}`,
        data: labels.map(getData),
        fill: chartType === 'area' ? true : undefined,
      })),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: false,
        },
      },
    },
  };
}
let chart = new Chart(ctx, config('line'));

schemesEl.innerHTML = schemeNames.map((name) => `<button class="btn btn-chartjs" id="${name}">${name}</button>`).join(' ');
schemesEl.addEventListener('click', (ev: any) => {
  const schemeName = ev.target.id;
  schemeNameEl.innerHTML = schemeName;

  // set scheme name and update.
  colorSchemes.setSchemeName(schemeName);
  chart.update();
});
const types = ['line', 'area', 'bar', 'bubble', 'scatter', 'pie', 'doughnut', 'polarArea', 'radar'];
typesEl.innerHTML = types.map((type) => `<button class="btn btn-chartjs" id="${type}">${type}</button>`).join(' ');
typesEl.addEventListener('click', (ev: any) => {
  const type = ev.target.id;
  chart.destroy();
  chart = new Chart(ctx, config(type));
});
