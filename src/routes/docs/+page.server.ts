import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load = (async () => {
  throw redirect(302, '/');
}) satisfies PageServerLoad;

export const prerender = true;
export const ssr = true;
export const csr = false;
