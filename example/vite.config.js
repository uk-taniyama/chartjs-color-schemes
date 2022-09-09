import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  base: './',
  resolve: command ==='serve' ? {
    alias: {
      'chartjs-color-schemes': __dirname + '/../src/',
      'chartjs-color-schemes/helpers': __dirname + '/../src/helpers/',
      'chartjs-color-schemes/schemes': __dirname + '/../src/schemes/',
    },
  }: undefined,
  build: {
    outDir: 'out',
    rollupOptions: {
      input: {
        example1: __dirname + '/example1.html',
        example2: __dirname + '/example2.html',
        // example3: __dirname + '/example3.html',
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
