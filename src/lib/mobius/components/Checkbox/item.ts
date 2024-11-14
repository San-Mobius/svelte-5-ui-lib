import type { CheckboxProps } from "$lib/forms/checkbox";
import type { Severity } from "$lib/mobius/shared/common.util";
import type { Props } from "$lib/mobius/types/InputTypeModels";

export interface MobiusCheckboxProps extends CheckboxProps, Props { 
    severity: Severity
}