import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.test.ts', 'src/**/*.spec.ts', 'tests/**/*.test.ts', 'tests/**/*.spec.ts'],
    environment: 'jsdom'
  }
});