<script lang="ts">
import type { PageData } from './$types';

export let data: PageData;
import Callout from '$lib/markdoc-component/Callout.svelte';
import Prism from '$lib/markdoc-component/Prism.svelte';
import Markdoc from '$lib/markdoc-svelte/Markdoc.svelte';
import Button from '$lib/component/Button.svelte';

import { ChevronLeft, Github } from '@steeze-ui/lucide-icons';
import type { ComponentType } from 'svelte';

const components = new Map<string, ComponentType>([
	['Callout', Callout],
	['Prism', Prism]
]);

const config = {
	variables: {
		frontmatter: data.frontmatter
	},
	nodes: {
		fence: {
			render: 'Prism',
			attributes: {
				language: {
					type: String
				}
			}
		}
	},
	tags: {
		callout: {
			render: 'Callout',
			description: 'Display the enclosed content in a callout box',
			children: ['paragraph', 'tag', 'list'],
			attributes: {
				type: {
					type: String,
					default: 'note',
					matches: ['check', 'error', 'note', 'warning']
				}
			}
		}
	}
};

console.log(data.content);
</script>

<div class="bg-orange-600 text-white">
	<div class="prose prose-invert pb-8 pt-6">
		<div class="flex gap-2">
			<Button href="/" class="mb-3 inline-block" icon={ChevronLeft}>ย้อนกลับ</Button>
			<Button href={data.github_link} class="mb-3 inline-block" icon={Github}>แก้ไขหน้านี้</Button>
		</div>

		<h1 class="text-white mt-6">
			{data.title}
		</h1>
	</div>
</div>

<div class="py-12 prose">
	<Markdoc doc={data.content} {config} {components} />
</div>
