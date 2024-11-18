<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import { getSeverityClass, Severity } from "$lib/mobius";
  import { MobiusButtonVariants, type MobiusButtonProps } from "./index"
  
  let {children, variant, severity = Severity.PRIMARY, appendClass, leftIcon, rightIcon, ...restProps}: MobiusButtonProps = $props()
  let severityClass = getSeverityClass(severity);
  let buttonClass = $state('');
  
  switch(variant) {
    case MobiusButtonVariants.LINK : 
      buttonClass = `bg-transparent text-mobius_${severityClass} dark:bg-mobius_${severityClass} hover:bg-slate-50 focus:ring-0 dark:hover:bg-slate-900 dark:text-white underline underline-offset-[3px]`
    break;
  
    case MobiusButtonVariants.OUTLINE:
      buttonClass = `bg-transparent ${severityClass === 'basic' ? 'text-black border-slate-200' : `text-mobius_${severityClass} border-mobius_${severityClass}`} dark:text-mobius_${severityClass} border dark:bg-mobius_${severityClass} hover:bg-slate-50 dark:hover:bg-slate-900 focus:ring-0`;
    break;
  
    case MobiusButtonVariants.STANDARD:
      buttonClass = `bg-mobius_${severityClass} text-white border-mobius_${severityClass} hover:bg-slate-700 dark:hover:bg-slate-900 dark:bg-mobius_${severityClass} focus:ring-0`
    break;
  
  }

  if(appendClass) {
    buttonClass += ' ' + appendClass;
  }
  
</script>

{#if severity}
   <Button {...restProps} class={buttonClass}>
     {#if leftIcon}
        {@render leftIcon()}
     {/if}
   
     {@render children()}
   
     {#if leftIcon}
       {@render leftIcon()}
     {/if}
   </Button>
{/if}