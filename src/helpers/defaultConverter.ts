import type { ColorConverter } from '../types';
import { createAlphaConverter } from './convertColor';

export const defaultConverter: ColorConverter = createAlphaConverter(0.5);
