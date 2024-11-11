// Make Sure Every default value is initialised in child component

type themeTypes = {
    defaultStyle ?: string;
    disableStyle ?: string;
    hoverStyle ?: string;
    focusStyle ?: string;
    darkStyle ?: string;
}

type Form = {
    post: string;
    fields: Array<FieldType>;
    type?: themeTypes;
    cols: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

type fieldTypes = "INPUT" | "DROPDOWN";

export interface Props {
    className?: string;
    containerClass?: string;
    helperText?: string;
    smallText?: {
        value: string;
        class: string;
    };
    theme?: themeTypes;
    customValidator?: () => void;
    isSmallTextVisible?: boolean;
    // setField?: (name: string, value: string)=> void;
    required?: boolean;
}

type FieldTypeProps = {
    INPUT: InputProps;
    DROPDOWN: DropdownProps;
}

type FieldType<T extends fieldTypes> = {
    name: string;
    fieldType: T;
    props: FieldTypeProps[T];
    span: number;
}
