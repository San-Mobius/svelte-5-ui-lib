<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import { getSeverityClass } from "$lib/Mobius/shared/common.util";
  import { MobiusButtonVariants, type MobiusButtonProps } from "./Index";
  
  let {children, variant, severity, appendClass, leftIcon, rightIcon, ...restProps}: MobiusButtonProps = $props()
  let buttonClass = '';
  let severityClass = getSeverityClass(severity);
  
  switch(variant) {
    case MobiusButtonVariants.LINK : 
      buttonClass = `bg-transparent text-mobius_${severityClass} dark:bg-mobius_${severityClass} hover:bg-slate-50 focus:ring-0 dark:hover:bg-slate-900 dark:text-white`
      break;
    case MobiusButtonVariants.OUTLINE:
      buttonClass = `bg-transparent text-mobius_${severityClass} dark:text-mobius_${severityClass} border-mobius_${severityClass} border dark:bg-mobius_${severityClass} hover:bg-slate-50 dark:hover:bg-slate-900 focus:ring-0`;
      break;
    case MobiusButtonVariants.STANDARD:
      buttonClass = `bg-mobius_${severityClass} text-white border-mobius_${severityClass} hover:bg-slate-700 dark:hover:bg-slate-900 dark:bg-mobius_${severityClass} focus:ring-0`
      break;
    default:
      buttonClass = `bg-mobius_${severityClass} text-white border-mobius_${severityClass} hover:bg-slate-700 dark:hover:bg-slate-900 dark:bg-mobius_${severityClass} focus:ring-0`
  }

  if(appendClass) {
    buttonClass+=appendClass;
  }

</script>

<Button {...restProps} class={buttonClass}>
  {#if leftIcon}
     {@render leftIcon()}
  {/if}

  {@render children()}

  {#if leftIcon}
    {@render leftIcon()}
  {/if}
</Button>