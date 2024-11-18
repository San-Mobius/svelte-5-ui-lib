import type { ButtonProps } from "$lib/buttons";
import type { Snippet } from "svelte";
import MobiusButton from './MobiusButton.svelte';
import { Severity } from "$lib/mobius";
import { Props } from "$lib/mobius/types/InputTypeModels";

enum MobiusButtonVariants {
    "OUTLINE" = "OUTLINE",
    "LINK" = "LINK",
    "STANDARD" = "STANDARD"
}
interface MobiusButtonProps extends ButtonProps, Props {
    variant: MobiusButtonVariants;
    severity: Severity;
    leftIcon?: Snippet;
    rightIcon?: Snippet;
    appendClass?: string;
}

export { MobiusButton, MobiusButtonVariants, type MobiusButtonProps };


