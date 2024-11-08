<script lang="ts">
  import type { Snippet } from "svelte";


    let isSelected = true;
    let className = `w-full py-2 px-4 ${isSelected ? 'border-blue-600 text-blue-600 border font-light text-sm' : ''} bg-gray-50 rounded justify-between flex`
    let { rightIcon } : {rightIcon : Snippet} = $props(); 

    let optionList = [{
        icon: '',
        text: ''
    }]

</script>

sasa

<div class={className + ' mb-10 justify-between flex border-blue-600 border font-light text-sm'}>
    <div>
        hidsdas 
    </div>
    {#if rightIcon}
        <div>
            {@render rightIcon()}
        </div>
    {/if}
</div>

<div class={className}>
    hidsdas
</div>