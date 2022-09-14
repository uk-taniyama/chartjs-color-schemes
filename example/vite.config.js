import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  base: './',
  resolve: command ==='serve' ? {
    alias: {
      'chart.js': __dirname + '/../node_modules/chart.js',
      'chart.js/helpers': __dirname + '/../node_modules/chart.js/helpers',
      'chart.js/auto': __dirname + '/../node_modules/chart.js/auto',
      'chartjs-colorful': __dirname + '/../src/',
      'chartjs-colorful/helpers': __dirname + '/../src/helpers/',
      'chartjs-colorful/schemes': __dirname + '/../src/schemes/',
    },
  }: undefined,
  build: {
    outDir: 'out',
    rollupOptions: {
      input: {
        example1: __dirname + '/example1.html',
        example2: __dirname + '/example2.html',
        example3: __dirname + '/example3.html',
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      }
    }
  }
})
);
