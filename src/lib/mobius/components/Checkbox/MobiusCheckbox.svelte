<script lang="ts">
  import Checkbox from "$lib/forms/checkbox/Checkbox.svelte";
  import { getSeverityClass } from "$lib/mobius";
  import type { MobiusCheckboxProps } from "./item";

  const { severity, setField, ...restProps } : MobiusCheckboxProps = $props();
  let severityClass = getSeverityClass(severity);

  const handleOnclick = () => {
    if(setField) {}
  }
</script>

<Checkbox { ...restProps } class={`focus:ring-0 text-mobius_${severityClass} dark:focus:ring-0`} onchange={handleOnclick} />