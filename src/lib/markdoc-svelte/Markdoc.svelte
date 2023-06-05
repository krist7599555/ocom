<script lang='ts'>
  export let doc = "";
  export let config = {};
  export let components = new Map<string, ComponentType>();

  import Markdoc from "@markdoc/markdoc";
  import Tags from "./Tags.svelte";
	import type { ComponentType } from "svelte";


  const ast = Markdoc.parse(doc);
  const content = Markdoc.transform(ast, config)
  console.log(content.children.find(it => it.name == "Prism"))
</script>



{#if content && content.children} 
<Tags children={content.children} {components}></Tags>
{/if}