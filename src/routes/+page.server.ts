import { arr_map } from '@krist7599555/lodosh';
import { async_pipe } from 'ts-async-pipe';

import { STATIC_DOCS } from '$docs';

import type { PageServerLoad } from './$types';

function github_latest_commit() {
  return async_pipe(
    fetch('https://api.github.com/repos/krist7599555/ocom/commits?per_page=3'),
    it => it.json() as Promise<any[]>,
    arr_map(it => ({
      commit_message: it.commit.message as string,
      commit_date: new Date(it.commit.committer.date),
      commit_url: it.html_url,
      author_image: it.author.avatar_url as string,
      author_name: it.author.id as string,
    }))
  );
}

export const load = (async () => {
  return {
    commits: github_latest_commit(),
    docs: STATIC_DOCS.map(it => ({
      path_id: it.path_id,
      path_segment: it.path_segments,
      title: it.frontmatter?.title || it.path_id.replace('/', ' - '),
    })),
  };
}) satisfies PageServerLoad;

export const prerender = true;
export const ssr = true;
export const csr = false;
