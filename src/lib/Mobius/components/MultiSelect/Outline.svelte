<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import type { MultiSelectChildProps } from ".";

  let { handleSelection, isChecked, option }: MultiSelectChildProps = $props();
</script>

<Button
  color="light"
  outline
  class={`${isChecked ? "sc-bg-color text-white" : "pr-border-color text-blue-700"} py-1" px-2`}
  onclick={() => {
    handleSelection(option.value);
  }}
>
  {option.label}
</Button>
