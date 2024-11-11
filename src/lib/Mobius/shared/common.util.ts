export enum Severity {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    WARNING = "WARNING"
}

export const possibleSeverity = [
    "bg-mobius_primary",
    "border-mobius_primary",
    "text-mobius_primary",
    "bg-mobius_secondary",
    "border-mobius_secondary",
    "text-mobius_secondary",
    "bg-mobius_success",
    "border-mobius_success",
    "text-mobius_success",
    "bg-mobius_warning",
    "border-mobius_warning",
    "text-mobius_warning",
    "bg-mobius_error",
    "border-mobius_error",
    "text-mobius_error"
]

export const SeverityClassMapObject: {[key in Severity] : string} = {
    [Severity.PRIMARY] : 'primary',
    [Severity.SECONDARY] : 'secondary',
    [Severity.SUCCESS] : 'success',
    [Severity.WARNING] : 'warning',
    [Severity.ERROR] : 'error',
}

export const getSeverityClass = (severity: Severity): string => {
    return SeverityClassMapObject[severity] || '';  // Return an empty string if severity is not found
};