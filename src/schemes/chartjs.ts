/* eslint-disable */
// @ts-ignore
import * as brewer from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.brewer.js';
// @ts-ignore
import * as office from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.office.js';
// @ts-ignore
import * as tableau from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau.js';
/* eslint-enable */
// colorschemes.brewer.js  colorschemes.office.js  colorschemes.tableau.js

import type { NamedColors } from '../types';

export function getBrewerSchemes(): NamedColors {
  return brewer;
}

export function getOfficeSchemes(): NamedColors {
  return office;
}

export function getTableauSchemes(): NamedColors {
  return tableau;
}
