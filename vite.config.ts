
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/intel-nexus-flow/',
  server: {
    port: 8080
  }
});
