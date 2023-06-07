<script lang="ts">
export let data: PageData;

import type { ComponentType } from 'svelte';
import type { PageData } from './$types';

import type { Config } from '@markdoc/markdoc';
import { ChevronRight, Edit3, Menu } from '@steeze-ui/lucide-icons';
import { Icon } from '@steeze-ui/svelte-icon';

import Callout from '$lib/markdoc-component/Callout.svelte';
import Prism from '$lib/markdoc-component/Prism.svelte';
import Ref from '$lib/markdoc-component/Ref.svelte';
import Markdoc from '$lib/markdoc-svelte/Markdoc.svelte';

const components = new Map<string, ComponentType>([
  ['Callout', Callout],
  ['Prism', Prism],
  ['Ref', Ref],
]);

const config: Config = {
  variables: {
    frontmatter: data.frontmatter,
  },
  nodes: {
    fence: {
      render: 'Prism',
      attributes: {
        language: {
          type: String,
        },
      },
    },
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
          matches: ['check', 'error', 'note', 'warning'],
        },
      },
    },
    ref: {
      render: 'Ref',

      description: 'Display @docs/ reference',
      // Children: ['paragraph', 'tag', 'list'],
      attributes: {
        path: {
          type: String,
          required: true,
          // Default: 'note',
          // matches: ['check', 'error', 'note', 'warning'],
        },
      },
    },
  },
};
</script>

<div class="bg-orange-600 text-white">
  <div class="prose prose-invert pb-10 pt-12">
    <h1 class=" text-white">
      {data.title}
    </h1>
  </div>
</div>

<div class="border-b">
  <div
    class="prose flex flex-wrap items-center justify-start gap-x-2 py-2 [&_a]:text-sm [&_a]:text-orange-500"
  >
    <a href="/">
      <Icon src={Menu} class="inline w-4" />
    </a>
    {#each data.path_segments as seg, i}
      <Icon src={ChevronRight} class="w-6 opacity-30" />
      <a
        href="/docs/{data.path_segments
          .map(it => it.token)
          .slice(0, i + 1)
          .join('/')}">{seg.token}</a
      >
    {/each}

    <a href={data.github_link} class="hidden w-fit md:ml-auto md:inline-block">
      <Icon src={Edit3} class="inline w-4" />
      แก้ไขหน้านี้
    </a>
  </div>
</div>

<div class="prose py-12">
  <Markdoc doc={data.content.trim() || 'ไม่มีเนื้อหา...'} {config} {components} />
</div>
