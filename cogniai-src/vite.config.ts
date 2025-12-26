import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration Vite pour CogniAI
// En dev: base = '/'
// En prod: base = './' pour des chemins relatifs (marche partout : /cogniai/, /test/, etc.)
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? './' : '/',
  build: {
    outDir: '../cogniai',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
}));

