export enum Severity {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    WARNING = "WARNING"
}

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