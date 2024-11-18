import type { CheckboxProps } from "$lib/forms/checkbox";
import type { Severity } from "$lib/mobius";
import { Props } from "$lib/mobius/types/InputTypeModels";

export interface MobiusCheckboxProps extends CheckboxProps, Props { 
    severity: Severity
}