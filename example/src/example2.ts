import './style.css';
import Chart from 'chart.js/auto';
import { ColorfulPlugin, ColorfulScale } from 'chartjs-colorful';
import { createColors, createRotateLinear, halfTransparent } from 'chartjs-colorful/helpers';
import { schemes } from 'chartjs-colorful/registries';
import { getD3Schemes, getOfficeSchemes } from 'chartjs-colorful/schemes';
import seed from 'seed-random';

if (document.location.search === '?e2e') {
  Chart.defaults.animation = false;
  Chart.defaults.animations.colors = false;
}

// Chart.register(DebugPlugin);
Chart.register(ColorfulScale, ColorfulPlugin);

// add custom scheme
schemes.add('custom', ['#F00', '#FF0', '#0F0', '#0FF', '#00F', '#F0F']);

const rotateLinear = createRotateLinear('#ff7f7f');
schemes.add('rotate', createColors(rotateLinear, 12, false));

// get schemes and register.
const { namedColors: d3Schemes } = getD3Schemes();
schemes.addAll(d3Schemes);
schemes.addAll(getOfficeSchemes());

// get registered scheme names.
const schemeNames = schemes.names;

const ctx: HTMLCanvasElement = document.getElementById('chart') as any;

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

function config(chartType: string, colors: string): any {
  random = seed('default');
  const getData = createRandomData(chartType);
  return {
    type: chartType.startsWith('area') ? 'line' : chartType.replace('2', ''),
    data: {
      labels,
      datasets: [1, 2, 3].map((name) => ({
        label: `Dataset ${name}`,
        data: labels.map(getData),
        fill: chartType.startsWith('area') || chartType.startsWith('bar') ? true : undefined,
        borderWidth: 2,
      })),
    },
    options: {
      indexAxis: chartType.endsWith('2') ? 'y' : undefined,
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: false,
        },
        [ColorfulPlugin.id]: {
          colors,
          converter: halfTransparent,
        },
      },
    },
  };
}

const schemeNameEl = document.getElementById('schemeName')!;

const schemesEl = document.getElementById('schemes')!;
schemesEl.innerHTML = schemeNames.map((name) => `<button class="btn scheme" id="${name}">${name}</button>`).join(' ');

let chart: Chart | null = null!;
function selectScheme(name: string) {
  Array.from(document.getElementsByClassName('scheme')).forEach((el) => {
    el.classList.toggle('btn-chartjs', el.id === name);
  });

  schemeNameEl.innerText = name;
  if (chart == null) {
    return;
  }
  // set scheme name and update.
  chart.options.plugins!.colorful!.colors = name;
  chart.update();
}

const types = ['line', 'line2', 'area', 'area2', 'bar', 'bar2', 'bubble', 'scatter', 'pie', 'doughnut', 'polarArea', 'radar'];
const typesEl = document.getElementById('types')!;
typesEl.innerHTML = types.map((type) => `<button class="btn type" id="${type}">${type}</button>`).join(' ');

function selectType(type: string) {
  Array.from(document.getElementsByClassName('type')).forEach((el) => {
    el.classList.toggle('btn-chartjs', el.id === type);
  });

  if (chart != null) {
    chart.destroy();
  }
  chart = new Chart(ctx, config(type, schemeNameEl.innerText));
  Object.assign(window, { chart });
}

const buttonsEl = document.getElementById('buttons')!;
buttonsEl.addEventListener('click', (ev: any) => {
  if (ev.target.tagName !== 'BUTTON') {
    return;
  }
  const { id, classList } = ev.target;
  if (classList.contains('scheme')) {
    selectScheme(id);
  } else {
    selectType(id);
  }
});

selectScheme('default');
selectType('line');
