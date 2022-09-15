# chartjs-colorful

Be colorful Chart.js v3.

## Homepage

- https://uk-taniyama.github.io/chartjs-colorful/

## Example

- [Support colors](example/out/example1.html)
- [Colorful chart and scheme](example/out/example2.html)
- [Valued color and colorful scale](example/out/example3.html)

- [Sample UMD](samples/sample1.html)

## Install

- **yarn** install: `yarn add chart.js chartjs-colorful`
- **npm** install: `npm install --save chart.js chartjs-colorful`

### Support Scheme Packages

- chartjs-plugin-colorschemes
- d3-scale-chromatic

## Interfaces

[docs/README.md](docs/README.md)

## How to use

### Setup

```javascript
import Chart from 'chart.js/auto';
import { ColorfulScale, ColorfulPlugin } from 'chartjs-colorful';
import { defaultConverter } from 'chartjs-colorful/helpers';
import { linears, schemes } from 'chartjs-colorful/registries';
import { getD3Schemes, getOfficeSchemes } from 'chartjs-colorful/schemes';

// register scale and plugin.
Chart.register(ColorfulScale, ColorfulPlugin);

// add custom scheme
schemes.add('custom', ['#F00', '#FF0', '#0F0', '#0FF', '#00F', '#F0F']);

// add hue-rotate color.
// select key color and get 12 colors.
// NOTE createColors's 3rd argument is 'false' because rotateLinear(0) and rotateLinear(1) are the same color.
const rotateLinear = createRotateLinear('#ff7f7f');
schemes.add('rotate', createColors(rotateLinear, 12, false));

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
      // or set scheme(=string[])
      // colors: ['#F00', '#FF0', '#0F0', '#0FF', '#00F', '#F0F'],
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

### Use other color schemes packages.

### One by one

```js
import { schemes } from 'chartjs-colorful/registries';
import { schemeTableau10 } from 'd3-scale-chromatic';

// Add a scheme(=string[]) with a suitable name.
schemes.add('Tableau10', schemeTableau10);
```

####  All at once

```js
import { schemes } from 'chartjs-colorful/registries';
import { getBrewerSchemes, getD3Schemes, getOfficeSchemes, getTableauSchemes } from 'chartjs-colorful/schemes';

// from chartjs-plugin-colorschemes
schemes.addAll(getBrewerSchemes());
schemes.addAll(getOfficeSchemes());
schemes.addAll(getTableauSchemes());

// from d3-scale-chromatic
schemes.addAll(getD3Schemes().namedColors);
```

## License

[MIT license](https://opensource.org/licenses/MIT).
