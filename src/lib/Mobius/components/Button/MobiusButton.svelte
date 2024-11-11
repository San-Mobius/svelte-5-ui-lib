<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import { getSeverityClass } from "$lib/Mobius/shared/common.util";
  import { MobiusButtonVariants, type MobiusButtonProps } from "./Index";
  
  let {children, variant, severity, appendClass, leftIcon, rightIcon, ...restProps}: MobiusButtonProps = $props()
  let buttonClass = '';
  let severityClass = getSeverityClass(severity);
  
  switch(variant) {
    case MobiusButtonVariants.LINK : 
      buttonClass = `bg-transparent mobius-${severityClass}-color dark:mobius-${severityClass}-bg-color hover:bg-slate-50 focus:ring-0 dark:bg-blue-100`
      break;
    case MobiusButtonVariants.OUTLINE:
      buttonClass = `bg-transparent mobius-${severityClass}-color dark:mobius-${severityClass}-bg-color mobius-${severityClass}-border-color border hover:bg-slate-50 focus:ring-0`
      break;
    case MobiusButtonVariants.STANDARD:
      buttonClass = `bg-transparent mobius-${severityClass}-bg-color text-white mobius-${severityClass}-border-color hover:bg-slate-50 focus:ring-0`
      break;
    default:
      buttonClass = `bg-transparent mobius-${severityClass}-bg-color text-white mobius-${severityClass}-border-color hover:bg-slate-50 focus:ring-0`
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