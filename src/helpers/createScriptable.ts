import { isString } from 'lodash-es';
import type { ColorFn, ValueFn } from '../types';

export function createScriptableValue(value: string | ValueFn): ValueFn {
  if (isString(value)) {
    return (ctx: any) => ctx?.raw?.[value];
  }
  return value;
}

export function createScriptableColor(valueFn: ValueFn, colorFn: ColorFn) {
  return (ctx: any) => {
    const value = valueFn(ctx);
    return value == null ? null : colorFn(value);
  };
}
