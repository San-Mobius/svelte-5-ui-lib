<script lang="ts">
    import { sineIn } from "svelte/easing";
    import { ChevronDownOutline } from "flowbite-svelte-icons";
    import Dropdown from "$lib/dropdown/Dropdown.svelte";
    import DropdownUl from "$lib/dropdown/DropdownUl.svelte";
    import DropdownLi from "$lib/dropdown/DropdownLi.svelte";
    import { uiHelpers } from "$lib/uiHelpers.svelte";
    import Label from "$lib/forms/label/Label.svelte";
    import type { InputValue, InputProps as Props } from "./index";

    let { value = $bindable<InputValue>(), containerClass, label, liClass, iconClass, iconSnippet, options }: Props = $props();

    let dropdown = uiHelpers();
    let dropdownStatus = $state(false);
    let closeDropdown = dropdown.close
    $effect(() => {
      dropdownStatus = dropdown.isOpen;
    });

    let isNumber = $state(true);
    $effect(()=> {
        isNumber = Number(value) ? true : false 
    })

  </script>

<Label class="mb-4 w-full font-bold">{label}</Label>
<div class={`${containerClass ? containerClass : "container w-full rounded border border-gray-200 bg-white flex"}`}>
    <div class="w-1/12 flex content-center justify-center place-items-center">
        {#if isNumber}
        <div class="flex items-start justify-center">
            <span class="flex" onclick={() => dropdown.toggle()}> (|=)
                <ChevronDownOutline class="ms-2 h-5 w-5 text-black dark:text-white" />
            </span>
            <div class="relative left-20">
                <Dropdown dropdownStatus={dropdownStatus} closeDropdown={closeDropdown} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[110px] top-[20px] border w-min px-1">
                    <DropdownUl>
                    {#each options as option}
                         <DropdownLi liClass={`${liClass ? liClass : " mt-1 hover:bg-slate-100 w-15 cursor-pointer"}`}>{option}</DropdownLi>
                    {/each}
                    </DropdownUl>
                </Dropdown>
            </div>
        </div>
        {:else}
        <div class={`${iconClass ? iconClass : "h-6 w-6"}`}>
            {@render iconSnippet()}
        </div>
        {/if}
    </div>

    <div class="w-11/12">
        <input type="text" bind:value class="w-full outline-none border-none bg-transparent focus:ring-0"/>
    </div>
</div>

  