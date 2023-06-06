import type { PageServerLoad } from './$types';
import { _ALL_DOCS } from './docs/[...slugs]/+page.server';

export const load = (async () => {
  return {
    docs: _ALL_DOCS.map(it => ({
      path_id: it.path_id,
      path_segment: it.path_segments,
      title: it.frontmatter?.title || it.path_id.replace('/', ' - '),
    })),
  };
}) satisfies PageServerLoad;

export const prerender = true;
export const ssr = true;
export const csr = false;
