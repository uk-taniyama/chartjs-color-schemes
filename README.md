# chartjs-color-schemes
Simple color schemes for Chart.js v3.x

## Example

- [Support colors](example/out/example1.html)
- [Colorful chart and scheme](example/out/example2.html)
- [Valued color and colorful scale](example/out/example3.html)

## Install

- **yarn** install: `yarn add chart.js chartjs-color-schemes`
- **npm** install: `npm install --save chart.js chartjs-color-schemes`

### Support Scheme Packages

- chartjs-plugin-colorschemes(included)
- d3-scale-chromatic

## Interfaces

[docs/README.md](docs/README.md)

## How to use

### Setup

```javascript
import Chart from 'chart.js/auto';
import { ColorfulScale, ColorfulPlugin } from 'chartjs-color-schemes';
import { defaultConverter } from 'chartjs-color-schemes/helpers';
import { linears, schemes } from 'chartjs-color-schemes/registries';
import { getD3Schemes, getOfficeSchemes } from 'chartjs-color-schemes/schemes';

// register scale and plugin.
Chart.register(ColorfulScale, ColorfulPlugin);

// add custom scheme
schemes.add('custom', ['#F00', '#FF0', '#0F0', '#0FF', '#00F', '#F0F']);

// get schemes and register.
const { namedColors: d3Schemes } = getD3Schemes();
schemes.addAll(d3Schemes);
schemes.addAll(getOfficeSchemes());

// get lininers and register.
const { namedLinear } = getD3Schemes();
linears.addAll(namedLinear);
```

### Select scheme

```js
const options = {
  plugins: {
    colorful: {
      // set scheme name
      colors: 'custom',
      // set converter. (alpha:0.5)
      converter: defaultConverter,
    }
  }
}
```

### Use colorful scale and valued color.

```js
const options = {
  plugins: {
    colorful: {
      data: [{
        // linear name.(optional)
        linear: 'Turbo',
        // dataset index.
        datasetIndex: 0,
        // value field and minimum-maximum value.
        value: 'r',
        min: 0,
        max: 50,
        // colorful scale name.
        axis: 'r',
      }]
    }
  }
}
```

### Change dataset color rule.

```js
const options = {
  plugins: {
    colorful: {
      dataset: [ {
          types: ['pie', 'doughnut', 'polarArea'],
          borderColor: 'colors',
          backgroundColor: 'gradients',
          hoverBackgroundColor: 'colors',
        }, {
          types: ['bar', 'line'],
          borderColor: 'color',
          backgroundColor: 'gradient',
          pointBackgroundColor: 'color',
          hoverBackgroundColor: 'color',
        }, {
          types: ['radar'],
          borderColor: 'color',
          backgroundColor: 'gradient',
          pointBackgroundColor: 'color',
        }, {
          // default=(other type)
          borderColor: 'color',
          backgroundColor: 'color2',
          hoverBackgroundColor: 'color',
        },
      ]
    }
  }
}
```

## License

[MIT license](https://opensource.org/licenses/MIT).
