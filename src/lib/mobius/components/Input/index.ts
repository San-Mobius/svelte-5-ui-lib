import type { InputProps } from "$lib/forms/input";
import type { Severity } from "$lib/mobius/shared/common.util";
import type { Props } from "$lib/mobius/types/InputTypeModels";


export interface MobiusInputProps extends InputProps, Props{
    severity: Severity;
}