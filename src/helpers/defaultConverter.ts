import { color as toColor } from 'chart.js/helpers';
import type { ColorConverter } from '../types';

export const defaultConverter: ColorConverter = (color) => toColor(color).alpha(0.5).hexString();
