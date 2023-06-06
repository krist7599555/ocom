<script lang="ts">
export let data: PageData;

import { ChevronLeft, Github } from '@steeze-ui/lucide-icons';
import type { ComponentType } from 'svelte';

import { browser } from '$app/environment';
import Button from '$lib/component/Button.svelte';
import Callout from '$lib/markdoc-component/Callout.svelte';
import Prism from '$lib/markdoc-component/Prism.svelte';
import Markdoc from '$lib/markdoc-svelte/Markdoc.svelte';

import type { PageData } from './$types';
import Ref from '$lib/markdoc-component/Ref.svelte';
import type { Config } from '@markdoc/markdoc';

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
      // children: ['paragraph', 'tag', 'list'],
      attributes: {
        path: {
          type: String,
          required: true,
          // default: 'note',
          // matches: ['check', 'error', 'note', 'warning'],
        },
      }, 
    }
  },
};
</script>

<div class="bg-orange-600 text-white">
  <div class="prose prose-invert pb-8 pt-6">
    <div class="flex gap-2">
      <Button href="/" class="mb-3 inline-block" icon={ChevronLeft}>ย้อนกลับ</Button>
      <Button href={data.github_link} class="mb-3 inline-block" icon={Github}>แก้ไขหน้านี้</Button>
    </div>

    <h1 class="mt-6 text-white">
      {data.title}
    </h1>
  </div>
</div>

<div class="prose py-12">
  <Markdoc doc={data.content} {config} {components} />
</div>
