import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://neverthelesspress.vercel.app',
  publicDir: './static',
  devToolbar: {
    enabled: false,
  },
});
