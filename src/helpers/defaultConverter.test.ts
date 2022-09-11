import { defaultConverter } from './defaultConverter';

it('defaultConverter', () => {
  expect(defaultConverter('#FFF')).toBe('#FFFFFF80');
});
