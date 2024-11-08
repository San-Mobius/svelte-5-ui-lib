import type { ButtonProps } from "$lib/buttons";
import type { Snippet } from "svelte";

type MultiSelectType = "OUTLINE" | "CHECKBOX" | "UPSELL";

export type Option = {
    helperText?: string;
    label?: string;
    value: any;
    buttonProps?: MultiSelectButtonProp;
    imageSrc?: string
}
export interface MultiSelectProps extends Props {
    variant: MultiSelectType;
    options: Array<Option>;
    gap: number;
} 

export interface MultiSelectChildProps {
    handleSelection: (e: MouseEvent)=> void;
    option: Option;
    isChecked: boolean;
}
export interface MultiSelectButtonProp {
    label: string;
    selectedLabel: string;
    Icon?: Snippet
}