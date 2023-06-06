<script lang="ts">
import Markdoc, { type Config } from '@markdoc/markdoc';
import type { ComponentType } from 'svelte';

import Tags from './Tags.svelte';

export let doc = '';
export let config: Config = {};
export let components = new Map<string, ComponentType>();

const ast = Markdoc.parse(doc);
const content = Markdoc.transform(ast, config);
</script>

{#if Markdoc.Tag.isTag(content)}
  <Tags children={content.children} {components} />
{:else}
  <div class="rounded border border-red-500 bg-red-200 p-4 text-red-900">Markdoc is empty</div>
{/if}
