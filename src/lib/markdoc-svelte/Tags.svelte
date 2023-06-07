<!-- adapted from https://github.com/movingbrands/svelte-portable-text -->
<script lang="ts">
import type { ComponentType } from 'svelte/internal';

import Markdoc, { type RenderableTreeNode } from '@markdoc/markdoc';

export let children: RenderableTreeNode[] = [];
export let components = new Map<string, ComponentType>();
</script>

{#each children as child}
  {#if typeof child === 'object' && Markdoc.Tag.isTag(child)}
    {@const match_component = components.get(child.name)}
    {#if match_component}
      <svelte:component this={match_component} {...child.attributes} children={child.children}
        ><svelte:self children={child.children} /></svelte:component
      >
    {:else}
      <svelte:element this={child.name} {...child.attributes}
        ><svelte:self children={child.children} /></svelte:element
      >
    {/if}
  {:else}{@html child}{/if}
{/each}
