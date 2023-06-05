<script lang="ts">

  import Prism from 'prismjs'
  import 'prismjs/components/prism-c'
  import 'prismjs/components/prism-cpp'
  import 'prismjs/components/prism-python'
  import 'prismjs/components/prism-bash'
//   import loadLanguage from 'prismjs/components.js'
// console.log(Prism)
//   loadLanguage(['cpp'])
// https://markdoc.dev/docs/examples#syntax-highlighting
export let language = "";
export let children: string[] = [];

console.log($$restProps)
$: code = children.join('')
$: html = Prism.highlight(code, Prism.languages.cpp, 'cpp');
</script>


<div class="not-prose text-xs">
  <pre class="language-{language}"><code class="language-{language}">{@html html}</code></pre>
</div>
