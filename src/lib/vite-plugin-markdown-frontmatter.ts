import type { Plugin } from 'vite';
import type { TransformResult } from 'rollup';
import FrontMatter from 'gray-matter';

type PluginOptions = {};

const _transform = (code: string, id: string, options: PluginOptions): TransformResult => {
	if (!id.endsWith('.md')) return null;

	const fm = FrontMatter(code, {
		language: 'yaml',
		delimiters: '---',
		excerpt_separator: '<!-- more -->'
	});
	console.log({ id });
	const result = [
		`// vite-plugin-markdown-frontmatter: ${id}`,
		// `export const id = ${JSON.stringify(id)};`,
		`export const frontmatter = ${JSON.stringify(fm.data)};`,
		`export const markdown = ${JSON.stringify(fm.content)};`,
		`export const markdown_excerpt = ${JSON.stringify(fm.excerpt)};`,
		// TODO: add toc (table of content)
		// TODO: add links
		``
	];
	return {
		code: result.join('\n')
	};
};

export const markdown_frontmatter = (options: PluginOptions = {}): Plugin => {
	return {
		name: 'vite-plugin-markdown-frontmatter',
		enforce: 'pre',
		transform(code, id) {
			return _transform(code, id, options);
		}
	};
};
