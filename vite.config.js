import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // For user/organization site (rgipw.github.io)
  plugins: [react()],
});
