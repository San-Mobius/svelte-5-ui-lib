<script lang="ts">
  import type { Component } from "svelte";
  import type { MultiSelectProps, Option } from ".";
  import Outline from "./Outline.svelte";
  import CheckBox from "./CheckBox.svelte";
  import UpSell from "./UpSell.svelte";

  const handleSelection = (value: any) => {
    if (selected.includes(value)) {
      selected = selected.filter((item) => item != value);
    } else {
      selected.push(value);
    }
  };

  let { isSmallTextVisible, variant, options, gap} : MultiSelectProps = $props();

  const MultiSelectTypeComponentMap: { [key: string]: Component } = {
    "OUTLINE": Outline,
    "CHECKBOX": CheckBox,
    "UPSELL": UpSell
  };

  const checkValueIsPresent = (value: any): boolean => {
    let isPresent: boolean = false;
    if($state.snapshot(selected).includes(value)) {
        isPresent = true;
    }
    return isPresent
  }

  let selected: Array<any> = $state([]);
</script>

<div class="flex flex-wrap gap-{gap ?? 2}">
  {#each options as option}
    <svelte:component this={MultiSelectTypeComponentMap[variant]} {handleSelection} {option} isChecked={checkValueIsPresent(option.value)} helperText={"HELPER Text"}></svelte:component>
  {/each}
</div>
