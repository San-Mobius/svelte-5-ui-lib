<script lang="ts">
  import type { Snippet } from "svelte";
  import { codewrapper } from "./theme";
  import { HTMXAttributes } from "$lib/types";
  interface Props extends HTMXAttributes<HTMLDivElement> {
    children?: Snippet;
    codeblock?: Snippet;
    innerClass?: string;
  }
  let { children, codeblock, innerClass, class: classname }: Props = $props();
  const { base, inner } = $derived(codewrapper());
</script>

<div class={base({ class: classname })}>
  {#if children}
    <div class={inner({ class: innerClass })}>
      {@render children()}
    </div>
  {/if}
  {#if codeblock}
    {@render codeblock()}
  {/if}
</div>
