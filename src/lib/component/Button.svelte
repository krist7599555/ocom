<script lang="ts">
//import icon component
//import as many icons from a Icon Pack
import { ChevronLeft } from '@steeze-ui/heroicons';
import { Icon } from '@steeze-ui/svelte-icon';
import type { IconSource } from '@steeze-ui/svelte-icon/types';

export let href: string | null = null;
export let icon: IconSource | null = null;
let className = '';
export { className as class };
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  on:click
  {href}
  class="flex w-fit items-center justify-center rounded bg-red-600 px-5 py-2 text-white no-underline {className}"
  {...$$restProps}
>
  {#if icon}
    <Icon src={icon} class="-ml-0.5 mr-1.5 inline-block h-5 w-fit" />
  {:else if $$slots.icon}
    <slot name="icon" />
  {/if}
  <slot />
</svelte:element>
