import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Endereço final do site.
const SITE_URL = 'https://fretesuberaba.com.br';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
});
