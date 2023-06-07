import frontmatter from 'gray-matter';
import type { TransformResult } from 'rollup';
import type { Plugin } from 'vite';

type PluginOptions = {
  language?: string;
  delimiters?: string | [string, string];
  excerpt_separator?: string;
};

const _transform = (code: string, id: string, options: PluginOptions): TransformResult => {
  if (!id.endsWith('.md')) {
    return null;
  }

  const fm = frontmatter(code, {
    language: 'yaml',
    delimiters: '---',
    excerpt_separator: '<!-- more -->',
    ...options,
  });
  const result = [
    `// vite-plugin-markdown-frontmatter: ${id}`,
    // `export const id = ${JSON.stringify(id)};`,
    `export const frontmatter = ${JSON.stringify(fm.data)};`,
    `export const markdown = ${JSON.stringify(fm.content)};`,
    `export const markdown_excerpt = ${JSON.stringify(fm.excerpt)};`,
    // TODO: add toc (table of content)
    // TODO: add links
    '',
  ];
  return {
    code: result.join('\n'),
  };
};

export const markdown_frontmatter = (options: PluginOptions = {}): Plugin => ({
  name: 'vite-plugin-markdown-frontmatter',
  enforce: 'pre',
  transform(code, id) {
    return _transform(code, id, options);
  },
});
