import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
server: {
  port: 8080

export default defineConfig({
  plugins: [react()],
  base: '/intel-nexus-flow/', // Set your repo name here
});
