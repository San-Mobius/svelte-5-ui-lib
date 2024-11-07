type MultiSelectType = "OUTLINE" | "CHECKBOX" | "UPSELL" | "CUSTOM" 

export interface MultiSelectProps extends Props {
    variant: MultiSelectType;
    options: Array<any>;
} 

export interface MultiSelectChildProps {
    handleSelection: (e: MouseEvent)=> void;
    value: any;
    isChecked: boolean;
}