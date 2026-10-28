import { defineConfig } from 'vite';

// JSX automático: no hace falta importar React en cada componente.
export default defineConfig({
  esbuild: { jsx: 'automatic' },
});
