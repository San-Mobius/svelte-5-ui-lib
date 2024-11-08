<script lang="ts">
  import Checkbox from "$lib/forms/checkbox/Checkbox.svelte";
  import Helper from "$lib/forms/helper/Helper.svelte";
    import type { MultiSelectChildProps } from ".";
  
    let { handleSelection, isChecked, option}: MultiSelectChildProps = $props();
</script>

<div class={`container px-2 py-4 rounded shadow-sm m-0 ${isChecked ? 'bg-slate-100' : ' bg-white'} dark:bg-slate-900 text-white`}>
    <Checkbox checked={isChecked} onchange={() => { handleSelection(option.value) }} class="focus:ring-0">
        {#if option.label}
             {option.label}
        {/if}
    </Checkbox>
    {#if option.helperText}
         <Helper class="ps-6 ml-[-25px] mt-2">{option.helperText}</Helper>
    {/if}
</div>