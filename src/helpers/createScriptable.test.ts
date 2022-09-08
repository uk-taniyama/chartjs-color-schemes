import { createScriptableColor, createScriptableValue } from './createScriptable';

describe('createScriptableValue', () => {
  const ctx = {
    raw: {
      v: 10,
    },
  };

  it('string', () => {
    const valueFn = createScriptableValue('v');
    expect(valueFn(ctx)).toBe(10);
  });

  it('string not exist.', () => {
    const valueFn = createScriptableValue('x');
    expect(valueFn(ctx)).toBeUndefined();
  });

  it('ValueFn', () => {
    const valueFn = createScriptableValue((c) => c.raw.v);
    expect(valueFn(ctx)).toBe(10);
  });
});

describe('createScriptableColor', () => {
  it('default', () => {
    const valueFn = (c: any) => c;
    const colorFn = (v: number) => `${v}`;
    const color = createScriptableColor(valueFn, colorFn);
    expect(color(0)).toBe('0');
    expect(color(null)).toBeNull();
    expect(color(undefined)).toBeNull();
  });
});
