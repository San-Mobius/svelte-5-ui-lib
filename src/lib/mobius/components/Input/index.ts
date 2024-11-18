import type { InputProps } from "$lib/forms/input";
import type { Severity } from "$lib/mobius";
import { Props } from "$lib/mobius/types/InputTypeModels";


export interface MobiusInputProps extends InputProps, Props{
    severity: Severity;
}