import type { ButtonProps } from "$lib/buttons";
import type { Severity } from "$lib/Mobius/shared/common.util";
import type { Props } from "$lib/Mobius/types/InputTypeModels";

export enum MobiusButtonVariants {
    "OUTLINE" = "OUTLINE",
    "LINK" = "LINK",
    "STANDARD" = "STANDARD"
}
export interface MobiusButtonProps extends ButtonProps, Props {
    variant: MobiusButtonVariants;
    severity: Severity
}