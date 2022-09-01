import { createColorSchemes } from '.';

describe('index', () => {
  it('line: indexed by datasetIndex', () => {
    const colors = ['#000000', '#000001', '#000002'];
    const colorSchemes = createColorSchemes(colors);
    const color = colorSchemes.color();
    colors.forEach((_, index) => {
      const ctx = {
        type: 'data',
        active: true,
        chart: {
          options: {
            type: 'line',
          },
        },
        datasetIndex: index,
        dataIndex: -1,
      };
      const actual = color(ctx as any);
      expect(actual).toBe(colors[index]);
    });
  });
});
