import type { ButtonProps } from "$lib/buttons";
import type { Props } from "$lib/mobius/types/InputTypeModels";
import type { Snippet } from "svelte";
import MobiusButton from './MobiusButton.svelte';
import { Severity } from "$lib/mobius/shared";

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


