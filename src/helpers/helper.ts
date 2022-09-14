import { isFunction as isFunctionBase, isNumber as isNumberBase } from 'chart.js/helpers';

export const isFunction: (v: any) => v is Function = isFunctionBase as any;
export const isNumber: (v: any) => v is number = isNumberBase as any;
