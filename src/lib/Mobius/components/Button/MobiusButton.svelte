<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import { getSeverityClass, Severity } from "$lib/Mobius/shared/common.util";
  import { MobiusButtonVariants, type MobiusButtonProps } from "./Index";
  
  let {children, variant, severity = Severity.PRIMARY, appendClass, leftIcon, rightIcon, ...restProps}: MobiusButtonProps = $props()
  let severityClass = getSeverityClass(severity);
  let buttonClass;
  
  switch(variant) {
    case MobiusButtonVariants.LINK : 
      buttonClass = `bg-transparent text-mobius_${severityClass} dark:bg-mobius_${severityClass} hover:bg-slate-50 focus:ring-0 dark:hover:bg-slate-900 dark:text-white`
    break;
  
    case MobiusButtonVariants.OUTLINE:
      buttonClass = `bg-transparent text-mobius_${severityClass} dark:text-mobius_${severityClass} border-mobius_${severityClass} border dark:bg-mobius_${severityClass} hover:bg-slate-50 dark:hover:bg-slate-900 focus:ring-0`;
    break;
  
    case MobiusButtonVariants.STANDARD:
      console.log(severityClass)
      buttonClass = `bg-mobius_${severityClass} text-white border-mobius_${severityClass} hover:bg-slate-700 dark:hover:bg-slate-900 dark:bg-mobius_${severityClass} focus:ring-0`
    break;
  
  }

  if(appendClass) {
    buttonClass += ' ' + appendClass;
  }
  
console.log('render')
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