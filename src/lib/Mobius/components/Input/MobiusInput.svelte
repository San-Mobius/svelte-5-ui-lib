<script lang="ts">
    import { Input } from "$lib/forms/input";
    import { getSeverityClass } from "$lib/Mobius/shared/common.util";
    import type { MobiusInputProps } from ".";

    let { severity, ...restProps}: MobiusInputProps = $props();
    let severityClass = getSeverityClass(severity);
    let inputClassName = `rounded-lg px-4 py-2 opacity-100 mobius-${severityClass}-border-color`;
</script>

<Input size="md" class={inputClassName} {...restProps} />