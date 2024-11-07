<script lang="ts">
  import type { Component } from "svelte";
  import type { MultiSelectProps } from ".";
  import Outline from "./Outline.svelte";

  const handleSelection = (value: any) => {
    if (selected.includes(value)) {
      selected = selected.filter((item) => item != value);
    } else {
      selected.push(value);
    }
  };

  let props: MultiSelectProps = {
    isSmallTextVisible: false,
    variant: "OUTLINE",
    options: [1, 2, 3, 4, 5]
  };

  const MultiSelectTypeComponentMap: { [key: string]: Component } = {
    "OUTLINE": Outline
  };

  let selected: Array<any> = $state([]);
</script>

<div class="flex">
  {#each props.options as option}
    {selected.includes(option)}
    <svelte:component this={MultiSelectTypeComponentMap[props.variant]} {handleSelection} value={option} isChecked={selected.includes(option)}></svelte:component>
  {/each}
</div>
