<script lang="ts">
    import { Input } from "$lib/forms/input";
    import { getSeverityClass } from "$lib/mobius";
    import type { MobiusInputProps } from ".";

    let { severity, ...restProps}: MobiusInputProps = $props();
    let severityClass = getSeverityClass(severity);
    let inputClassName = `rounded-lg px-4 py-2 opacity-100 border focus:border-mobius_${severityClass} dark:focus:border-mobius_${severityClass}`;
</script>

<!-- <Input size="md" class={inputClassName} {...restProps} /> -->