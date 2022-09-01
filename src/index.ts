import type { ScriptableContext } from 'chart.js';

type Context = ScriptableContext<any>;
// borderColor(ctx: ScriptableContext<any>) {
//   console.log(ctx.type, ctx.chart.options.type, ctx.datasetIndex, ctx.dataIndex);
//   return '#';
// },

function getChartType(ctx: Context) {
  return ((ctx?.chart) as any)?.options?.type;
}

export const defaults = {
  indexedByDataset: ['line'],
};

export function getColor(ctx: Context, colors: string[]) {
  const chartType = getChartType(ctx);
  console.log(ctx.type, chartType, ctx.dataIndex, ctx.datasetIndex);
  const index = defaults.indexedByDataset.indexOf(chartType) > 0 ? ctx.dataIndex : ctx.datasetIndex;
  return colors[index % colors.length];
}

export function createBorderColor(colors: string[]) {
  return (ctx: Context) => getColor(ctx, colors);
}

interface ColorScheme {
  color(): (ctx: Context) => string;
}

class ColorSchemeImpl implements ColorScheme {
  colors: string[];

  constructor(colors: string[]) {
    this.colors = colors;
  }

  color() {
    return createBorderColor(this.colors);
  }
}

export function createColorSchemes(colors: string[]): ColorScheme {
  return new ColorSchemeImpl(colors);
}
