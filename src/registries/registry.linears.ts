import { Registry } from './registry';
import type { ColorLinear } from '../types';
import { createLinear } from '../helpers';

export const defaultLinear = createLinear('#000');
export const linears = new Registry<ColorLinear>(defaultLinear);
