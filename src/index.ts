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
  indexedByData: ['pie', 'doughnut', 'polarArea'],
};

export function getColor(ctx: Context, colors: string[]) {
  const chartType = getChartType(ctx);
  console.log(ctx.type, chartType, ctx.dataIndex, ctx.datasetIndex);
  const index = defaults.indexedByData.indexOf(chartType) >= 0 ? ctx.dataIndex : ctx.datasetIndex;
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
    this.colors = [];
    this.update(colors);
  }

  color() {
    return createBorderColor(this.colors);
  }

  update(colors: string[]) {
    this.colors.splice(0, this.colors.length, ...colors);
  }
}

export function createColorSchemes(colors: string[]): ColorScheme {
  return new ColorSchemeImpl(colors);
}
