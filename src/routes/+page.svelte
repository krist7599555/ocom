<script lang="ts">
import Button from '$lib/component/Button.svelte';
import { Github } from '@steeze-ui/lucide-icons';
import type { PageData } from './$types';

export let data: PageData;
</script>

<div class="bg-orange-600">
	<div class="prose mx-auto prose-invert pb-8 pt-12 ![max-width:100%] text-center">
		<h1 class="text-white mb-0">
			เนื้อหา ocom ที่จำเป็นทั้งหมด<br />
		</h1>

		<p class="no-prose text-white mt-4">ตั้งแต่ไม่รู้อะไรเลย จนเป็นถึงผู้แทน</p>
	</div>
</div>

<main class="prose pt-12">
	<div>
		<Button href="https://github.com/krist7599555/ocom/tree/master/docs" icon={Github}>
			<!-- prettier-ignore -->
			<svg slot="icon" class="lucide lucide-github mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
				<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
				<path d="M9 18c-4.51 2-5-2-7-2"/>
			</svg>
			ช่วยกันเขียนใน Github</Button
		>
	</div>

	<h2>Table of content</h2>
	<ol>
		{#each data.docs as doc}
			<li>
				<a href={doc.path_id}>{doc.title}</a>
			</li>
		{/each}
	</ol>
</main>
