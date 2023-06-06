import { arr_map, pipe, to_entries } from '@krist7599555/lodosh';

export const STATIC_DOCS = pipe(
  import.meta.glob('../docs/**/*.md', { eager: true }),
  it => it as Record<string, typeof import('*.md')>,
  to_entries,
  arr_map(([path, raw]) => {
    const path_segments = pipe(
      path.replace('/index.md', '').replace('.md', ''),
      it => it.split('/docs/')[1],
      it => it.split('/'),
      arr_map((tok): { order: number | null; token: string } => {
        const res = /^(\d)-(.+)$/.exec(tok);
        return res
          ? {
              order: +res[1],
              token: res[2],
            }
          : {
              order: null,
              token: tok,
            };
      })
    );
    const path_id =
      '/docs/' +
      path_segments
        .map(it => it.token)
        .filter(it => it != 'index')
        .join('/');
    return {
      github_link:
        `https://github.com/krist7599555/ocom/blob/master/docs/` + path.split('/docs/')[1],
      markdown_file_path: new URL(path, import.meta.url).href,
      frontmatter: raw.frontmatter,
      title: raw.frontmatter?.title || path_id.split('/docs/')[1].replace('/', ' - '),
      description: raw.frontmatter?.description || '',
      tags: (raw.frontmatter?.tags as string[]) || [],
      content: raw.markdown,
      content_excerpt: raw.markdown_excerpt,
      path_segments,
      path_id,
    };
  })
);
