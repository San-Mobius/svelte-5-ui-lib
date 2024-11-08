<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import { AngleRightOutline, CheckOutline } from "flowbite-svelte-icons";
  import type { MultiSelectChildProps } from ".";

  let { handleSelection, isChecked, option }: MultiSelectChildProps = $props();
</script>

<div class={`container m-0 flex rounded p-2 shadow-sm `}>
  <div class="img w-1/12">
    {#if option.imageSrc}
         <img src={option.imageSrc} width="80" height="80" alt="" srcset="" />
    {/if}
  </div>

  <div class="content w-8/12">
    <h4 class="flex items-center">
      {option.label} <AngleRightOutline class="me-2 h-4 w-4" />
    </h4>
    <small>
      {option.helperText}
    </small>
  </div>
  
  <div class="btn w-3/12 items-center flex">
    <Button
      color="light"
      outline
      class={`${isChecked ? "bg-blue-700 text-white" : "hover border-blue-700 text-blue-700"} py-1" px-2 hover:opacity-90`}
      onclick={() => {
        handleSelection(option.value);
      }}
    >
      {#if option.buttonProps?.Icon}
        {@render option.buttonProps?.Icon()}
      {/if}
      
      {#if isChecked}
        <CheckOutline class="me-2 h-4 w-4" />{option.buttonProps?.selectedLabel}
      {:else}
            {option.buttonProps?.label}
      {/if}
    </Button>
  </div>
</div>
