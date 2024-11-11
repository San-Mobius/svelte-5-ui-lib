<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import { getSeverityClass, SeverityClassMapObject } from "$lib/Mobius/shared/common.util";
  import { MobiusButtonVariants, type MobiusButtonProps } from "./Index";
  
  let {children, variant, severity, ...restProps}: MobiusButtonProps = $props()
  let buttonClass = '';
  let variantClass = getSeverityClass(severity);
  
  switch(variant) {
    case MobiusButtonVariants.LINK : 
      buttonClass = `bg-transparent mobius-${variantClass}-color hover:bg-transparent focus:ring-0`
      break;
    case MobiusButtonVariants.OUTLINE:
      buttonClass = `bg-transparent mobius-${variantClass}-color mobius-${variantClass}-border-color border hover:bg-slate-100 focus:ring-0`
      break;
    case MobiusButtonVariants.STANDARD:
      buttonClass = `bg-transparent mobius-${variantClass}-bg-color text-white mobius-${variantClass}-border-color hover:bg-transparent focus:ring-0`
      break;

  }

</script>


<Button {...restProps} class={buttonClass}>
    {@render children()}
</Button>