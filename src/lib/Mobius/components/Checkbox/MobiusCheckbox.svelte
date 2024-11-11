<script lang="ts">
  import Checkbox from "$lib/forms/checkbox/Checkbox.svelte";
  import { getSeverityClass } from "$lib/Mobius/shared/common.util";
  import type { MobiusCheckboxProps } from "./item";

  const { severity, ...restProps } : MobiusCheckboxProps = $props();
  let severityClass = getSeverityClass(severity);

</script>

<Checkbox { ...restProps } class={`focus:ring-0 text-mobius_${severityClass} dark:focus:ring-0`} >laebl</Checkbox>