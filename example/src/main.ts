import './style.css';
import Chart from 'chart.js/auto';
import {
  createColorSchemes, setup, addScheme, addSchemes, getSchemeNames,
} from 'chartjs-color-schemes';
import { getD3Schemes, getOfficeSchemes } from 'chartjs-color-schemes/schemes';

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

const labels = ['Data 1', 'Data 2', 'Data 3', 'Data 4'];

const ctx: HTMLCanvasElement = document.getElementById('chart') as any;
const schemeNameEl = document.getElementById('schemeName')!;
const schemesEl = document.getElementById('schemes')!;
const typesEl = document.getElementById('types')!;

function randomData() {
  return Math.random() * 40 + Math.random() * 5;
}

function config(type: string): any {
  return {
    type,
    data: {
      labels,
      datasets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((name) => ({
        label: `Dataset ${name}`,
        data: labels.map(randomData),
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
const types = ['line', 'bar'];
typesEl.innerHTML = types.map((type) => `<button class="btn btn-chartjs" id="${type}">${type}</button>`).join(' ');
typesEl.addEventListener('click', (ev: any) => {
  const type = ev.target.id;
  chart.destroy();
  chart = new Chart(ctx, config(type));
});
