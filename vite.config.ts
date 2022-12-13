import { fileURLToPath, URL } from 'url';
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // Silent the deprecation warning
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/', import.meta.url)),
    },
    dedupe: ['vue'],
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    svgLoader(),
    dts({
      staticImport: true,
      outputDir: 'dist/types',
      exclude: ['dist', 'build'],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/vue-lite-modal.ts'),
      name: 'Vue Lite Modal',
      fileName: (format) => `vue-lite-modal.${format}.js`,
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
  },
});
