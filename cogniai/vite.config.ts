import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration Vite pour CogniAI
// En dev: base = '/' pour que les assets soient accessibles normalement
// En prod: base = '/cogniai/' pour le déploiement sur hylst.fr/cogniai/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/cogniai/' : '/',
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

