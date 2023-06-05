<script lang="ts">
//import icon component
import { Icon } from '@steeze-ui/svelte-icon';
import type { IconSource } from '@steeze-ui/svelte-icon/types';

//import as many icons from a Icon Pack
import { ChevronLeft } from '@steeze-ui/heroicons';

export let href: string | null = null;
export let icon: IconSource | null = null;
let className = '';
export { className as class };
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	on:click
	{href}
	class="px-5 py-2 rounded bg-red-600 text-white no-underline flex justify-center items-center w-fit {className}"
	{...$$restProps}
>
	{#if icon}
		<Icon src={icon} class="h-5 w-fit mr-1.5 -ml-0.5 inline-block" />
	{:else if $$slots.icon}
		<slot name="icon" />
	{/if}
	<slot />
</svelte:element>
