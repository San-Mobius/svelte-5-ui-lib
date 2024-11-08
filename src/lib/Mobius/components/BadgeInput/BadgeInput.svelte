<script lang="ts">
    import Badge from "$lib/badge/Badge.svelte";
    import type { BadgesInputProps } from "./index.ts";
    
    let tags:string[] = $state([]);          
    let inputValue:string = $state('');    
    let { placeholder, tagsContainerClassName, setField, name, badgeProps }:BadgesInputProps = $props();

    $effect(()=> {
        if(setField) {
            setField(name, tags);
        }
    })

    function handleKeyDown(event:KeyboardEvent) {
        if (event.key === ',' || event.key === 'Enter') {
            event.preventDefault(); 
            const trimmedValue = inputValue.trim();
            if (trimmedValue && !tags.includes(trimmedValue)) {
                tags = [...tags, trimmedValue];  
                inputValue = '';  
            }
        } else if (event.key === 'Backspace' && inputValue === '') {
            tags = tags.slice(0, -1);
        }
    }

    function removeTag(index:number) {
        tags = tags.filter((_, i) => i !== index);
    }

    function editTag(index:number) {
        inputValue = tags[index];
        removeTag(index);
    }
</script>

<style>
    .tag-container {
        display: flex;
        flex-wrap: wrap;
        border: 1px solid #ddd;
        padding: 5px;
        gap: 5px;
    }
    input {
        border: none;
        outline: none;
        flex: 1;
    }
</style>

<div class={tagsContainerClassName || "tag-container"}>
    {#each tags as tag, index}
        <div>
            <Badge dismissable = {true} onclick={() => removeTag(index)} {...badgeProps}>
                <span onclick={() => editTag(index)}>{tag}</span>
            </Badge>   
        </div>
    {/each}
    <input
        bind:value={inputValue}
        onkeydown={handleKeyDown}
        placeholder={placeholder}
    />
</div>