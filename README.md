# chartjs-color-schemes
Simple color schemes for Chart.js v3.x

## Samples & Example

- [Samples](samples/sample1.html)
  for umd.

- [Example](example/out/index.html)
  for vite.

## Install

- **yarn** install: `yarn add chart.js chartjs-color-schemes`
- **npm** install: `npm install --save chart.js chartjs-color-schemes`

### Support Scheme Packages

- d3-scale-chromatic
- chartjs-plugin-colorschemes

## Interfaces

[docs/README.md](docs/README.md)

## Example

```javascript
import Chart from 'chart.js/auto';
import { createColorSchemes, setup, addSchemes, getSchemeNames } from 'chartjs-color-schemes';
import { getD3Schemes } from 'chartjs-color-schemes/schemes';

// create color-schemes.
const colorSchemes = createColorSchemes();

// get schemes and register.
const { namedColors: d3Schemes } = getD3Schemes();
addSchemes(d3Schemes);
addSchemes(getOfficeSchemes());

// get registered scheme names.
const schemeNames = getSchemeNames();

// setup color scheme.
setup(colorSchemes);

// use custom scheme
const primaryColors = ['#00F', '#0F0', '#0FF', '#F00', '#F0F', '#FF0'];

// set colors.
colorSchemes.setSchemeColors(primaryColors);

// or register and set scheme name.
addScheme('Primary', primaryColors);
colorSchemes.setSchemeName('Primary');

// and update!!
chart.update();
```

## License

[MIT license](https://opensource.org/licenses/MIT).
