import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { markdown_frontmatter } from './src/lib/vite-plugin-markdown-frontmatter';

export default defineConfig({
	plugins: [
		markdown_frontmatter(),
		sveltekit()
		//
	]
});
