import type { CheckboxProps } from "$lib/forms/checkbox";
import type { Severity } from "$lib/Mobius/shared/common.util";
import type { Props } from "$lib/Mobius/types/InputTypeModels";

export interface MobiusCheckboxProps extends CheckboxProps, Props { 
    severity: Severity
}