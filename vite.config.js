import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: import.meta.env.PORT || 4173,
    host: '0.0.0.0'
  }
});
