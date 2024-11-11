import type { InputProps } from "$lib/forms/input";
import type { Severity } from "$lib/Mobius/shared/common.util";
import type { Props } from "$lib/Mobius/types/InputTypeModels";


export interface MobiusInputProps extends InputProps, Props{
    severity: Severity;
}