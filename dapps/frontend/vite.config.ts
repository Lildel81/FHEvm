import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path from 'path';

export default defineConfig({
  assetsInclude: ['**/*.bin'],
  plugins: [react(), nodePolyfills()],
  define: {
    'import.meta.env.MOCKED': process.env.MOCKED === 'true',
  },
  resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@deployments': path.resolve(__dirname, '../hardhat/deployments'),
  },
},
  server: {
    port: 9000,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
    historyApiFallback: true, // Enable SPA fallback
  },
  worker: {
    format: 'es',
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});

