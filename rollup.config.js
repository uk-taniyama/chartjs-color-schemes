const { default: resolve } = require('@rollup/plugin-node-resolve');
const { default: esbuild } = require('rollup-plugin-esbuild');
const { default: dts } = require('rollup-plugin-dts');
const json = require('@rollup/plugin-json');

const pkg = require('./package.json');

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.homepage}
 * (c) ${new Date().getFullYear()} ${pkg.name} Contributors
 * Released under the MIT License
 */`;

const commonPlugins = [
  json(),
  esbuild({
    exclude: ['**/*test*', 'src/e2e/**'],
    sourceMap: true,
  }),
  resolve({
    mainFields: ['module', 'main'],
    extensions: ['.ts', '.mjs', '.cjs', '.js', '.jsx', '.json', '.node'],
    modulesOnly: true,
  }),
];

const watch = process.env.ROLLUP_WATCH === 'true';

const globals = {
  'chart.js': 'Chart',
  'chart.js/helpers': 'Chart.helpers',
  'd3-scale-chromatic': 'd3',
};

const external = Object.keys(globals);
const external2 = [...external, './helpers', '../helpers', './schemes', '../schemes'];

const minifyPlugins = [
  ...commonPlugins,
  esbuild({
    exclude: ['**/*test*', 'src/e2e/**'],
    sourceMap: false,
    minify: true,
  }),
];

const dtsPlugins = [
  dts(),
];

const onwarn = (warning, defaultHandler) => {
  // NOTE next warning is not a bug. https://github.com/d3/d3-interpolate/issues/58
  if (warning.code === 'CIRCULAR_DEPENDENCY') {
    if (warning.importer.indexOf('d3-interpolate')) return;
  }
  // console.error(warning);
  defaultHandler(warning);
};

const defs = [
  { format: 'umd', ext: '.js', minify: false },
  { format: 'umd', ext: '.min.js', minify: true },
]
  .filter(({ minify }) => watch === false || minify === false)
  .map(({
    format, ext, minify,
  }) => ({
    input: 'src/index.umd.ts',
    // eslint-disable-next-line no-nested-ternary
    plugins: (minify ? minifyPlugins : commonPlugins),
    output: {
      name: 'ChartColorSchemes',
      format,
      file: `dist/index${ext}`,
      banner,
      indent: false,
      globals,
    },
    onwarn,
    external,
  }));

const defs2 = [
  { format: 'esm', ext: '.js', plugins: commonPlugins },
  { format: 'cjs', ext: '.js', plugins: commonPlugins },
  { format: 'es', ext: '.d.ts', plugins: dtsPlugins },
]
  .filter(({ minify }) => watch === false || minify === false)
  .map(({ format, ext, plugins }) => ['.', 'helpers', 'schemes']
    .map((dir) => ({
      plugins,
      input: `src/${dir}/index.ts`.replace('/./', '/'),
      output: {
        format,
        file: `dist/${format}/${dir}/index${ext}`.replace('/./', '/'),
        globals,
      },
      onwarn,
      external: external2,
    })))
  .reduce((prev, curr) => [...prev, ...curr], []);

module.exports = watch ? [defs[0]] : [...defs, ...defs2];
