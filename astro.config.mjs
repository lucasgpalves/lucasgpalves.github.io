// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lucasgpalves.github.io',
  base: '/',
  output: 'static',
  compressHTML: true,
});
