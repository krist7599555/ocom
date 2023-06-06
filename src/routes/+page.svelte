<script lang="ts">
import { Github, GitCommit } from '@steeze-ui/lucide-icons';
import { Icon } from '@steeze-ui/svelte-icon';

import Button from '$lib/component/Button.svelte';

import type { PageData } from './$types';

export let data: PageData;
console.log(data.commits)
</script>

<div class="bg-orange-600">
  <div class="prose prose-invert mx-auto pb-8 pt-12 text-center ![max-width:100%]">
    <h1 class="mb-0 text-white">
      เนื้อหา ocom ที่จำเป็นทั้งหมด<br />
    </h1>
    <p class="not-prose mt-4 text-white">ตั้งแต่ไม่รู้อะไรเลย จนเป็นถึงผู้แทน</p>
  </div>
</div>

<section class="prose mt-12">
  <div>
    <Button href="https://github.com/krist7599555/ocom/tree/master/docs">
      <Icon slot="icon" class="w-6 mr-2" src={Github} />
      ช่วยกันเขียนใน Github
    </Button>
  </div>
  <div class="divide-y text-slate-500 not-prose rounded-xl mt-2 border overflow-hidden hover:border-orange-200 hover:bg-orange-100/30 hover:divide-transparent">
    {#each data.commits as c}
      <a href={c.commit_url} class='flex items-center justify-between p-2 text-xs hover:bg-orange-100 cursor-pointer no-underline'>
        <div><Icon class="text-blue-500 inline w-4" src={GitCommit} /> {c.commit_message}</div>
        <div>{Intl.DateTimeFormat('th', { dateStyle: 'medium' }).format(c.commit_date)}</div>
      </a>
    {/each}
  </div>
</section>

<main class="prose mt-12">
  <h2>Table of content</h2>
  <ol>
    {#each data.docs as doc}
      <li>
        <a href={doc.path_id}>{doc.title}</a>
      </li>
    {/each}
  </ol>
</main>
