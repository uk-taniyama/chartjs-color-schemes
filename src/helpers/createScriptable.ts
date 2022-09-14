import type { ScriptableContext } from 'chart.js';
import { flow, isString } from 'lodash-es';
import type { ColorLinear, ScriptableColor, ScriptableValue } from '../types';

export function createScriptableValue(value: string | ScriptableValue): ScriptableValue {
  if (isString(value)) {
    return (ctx: ScriptableContext<any>) => (ctx?.raw as any)?.[value];
  }
  return value;
}

/**
 * v is null then return null.
 * v is NOT null then return fn(v).
 */
export function throughNull<V, R>(
  fn: (v: V) => R,
): (v: V | null | undefined) => R | null {
  return (v: V | null | undefined) => (v == null ? null : fn(v));
}

export function createScriptableColor(
  valueFn: ScriptableValue,
  linear: ColorLinear,
): ScriptableColor {
  return flow(valueFn, throughNull(linear));
}
