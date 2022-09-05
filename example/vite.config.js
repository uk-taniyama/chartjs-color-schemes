export default {
  base: './',
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
};

