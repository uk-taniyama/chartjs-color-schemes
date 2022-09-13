import { isString } from 'lodash-es';
import type { ColorLinear, ScriptableColor, ScriptableValue } from '../types';

export function createScriptableValue(value: string | ScriptableValue): ScriptableValue {
  if (isString(value)) {
    return (ctx: any) => ctx?.raw?.[value];
  }
  return value;
}

export function createScriptableColor(
  valueFn: ScriptableValue,
  linear: ColorLinear,
): ScriptableColor {
  return (ctx: any) => {
    const value = valueFn(ctx);
    return value == null ? null : linear(value);
  };
}
