import { error } from '@sveltejs/kit';
import { STATIC_DOCS } from '$docs';
import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
  for (const doc of STATIC_DOCS) {
    if (doc.path_id == url.pathname || doc.path_id.replace('/general/', '') == url.pathname) {
      return doc;
    }
  }
  throw error(404, `not found docs ${url.pathname}}`);
}) satisfies PageServerLoad;
