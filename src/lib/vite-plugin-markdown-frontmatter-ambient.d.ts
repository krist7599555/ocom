declare module '*.md' {
	const frontmatter: Record<string, any>;
	const markdown: string;
	const markdown_excerpt: string;
}
