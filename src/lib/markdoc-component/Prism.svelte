<script lang="ts">
import Prism from 'prismjs';

Prism.manual = true;
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';

// https://markdoc.dev/docs/examples#syntax-highlighting
export let language = '';
export let children: string[] = [];

$: code = children.join('');
$: html = Prism.highlight(code, Prism.languages.cpp, 'cpp');
</script>

<div class="not-prose text-xs">
  <pre class="language-{language}"><code class="language-{language}">{@html html}</code></pre>
</div>
