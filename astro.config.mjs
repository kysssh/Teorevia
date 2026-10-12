// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import remarkDirective from 'remark-directive';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkBloques } from './src/lib/remark-bloques.mjs';
// https://astro.build/config
export default defineConfig({
    site: 'https://Kysssh.github.io',
    base: '/teorevia/',
    integrations: [sitemap()],
    vite: { plugins: [tailwindcss()] },
    markdown: {
        remarkPlugins: [remarkDirective, remarkBloques, remarkMath],
        rehypePlugins: [rehypeKatex],
        shikiConfig: { theme: 'github-dark' },
    },
});
